import { useState, useRef, useEffect } from "react";
import { ChevronRight, MapPin, ArrowUpRight } from "lucide-react";

interface Job {
  id: number;
  index: string;
  role: string;
  company: string;
  period: string;
  type: "Full-time" | "Part Time" | "Volunteering" | "Leadership" | "Contract";
  location: string;
  description: string;
  skills: string[];
  achievements: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    index: "01",
    role: "Social Media & Content Ops.",
    company: "University of Greenwich",
    period: "June 2023 — Oct 2025",
    type: "Part Time",
    location: "Greenwich, London",
    description:
      "Handled the social media presence for the Faculty of Engineering & Science, creating engaging content to promote academic programmes, research initiatives and events. \
       Collaborated with the marketing team to develop content strategies, manage posting schedules, and analyze engagement metrics to optimize reach and impact.",
    skills: ["Social Media", "Premiere Pro", "Adobe Express", "Canva"],
    achievements: [
      "Increased following to Faculty Social Media accounts by 10%",
      "Introduced new initatives to faculty events (inc. Open Days) to increase engagement including NFC-Based event guides, live coverage and robot demonstrations",
      "Helped meet recruitment targets for Computer Science undergraduate and postgraduate programmes in 2023/24/25 cycle",
    ],
  },
  {
    id: 2,
    index: "02",
    role: "Senior UK Student Recruitment Ambassador",
    company: "University of Greenwich",
    period: "Jan 2023 — Oct 2025",
    type: "Part Time",
    location: "Greenwich, London",
    description:
      "Represented the University within major internal and external events to communicate the value of the university's offerings to various audiences. \
      Delivered lectures on HE topics, led campus tours and participated in panel discussions to share insights and experiences. Mentored new ambassadors and \
      collaborated with the recruitment team to develop strategies for engaging prospective students.",
    skills: ["Customer Service", "Clearing", "Public Speaking", "Mentoring"],
    achievements: [
      "Successfully led 2 clearing teams of 10+ student and staff ambassadors during the 2024 and 2025clearing cycles, contributing to a 15% increase in conversion rates",
      "Asssisted in planning and leading an outreach initiative targeting underperforming schools to increase STEM awareness.",
      "Communicated and assisted prospective queries via Phone, CRM Email, LiveChat and in-person, demonstrating strong communication skills and a customer-centric approach to service",
    ],
  },
  {
    id: 3,
    index: "03",
    role: "President",
    company: "comptech.gre (University of Greenwich Computer Technology Society)",
    period: "Sep 2023 — May 2025",
    type: "Leadership",
    location: "Greenwich, London",
    description:
      "Led the university's Computer Technology Society, overseeing all aspects of club operations, including event planning, member engagement, and collaboration with industry partners. \
       Organized workshops, guest lectures, and networking events to provide members with opportunities for learning and professional development. Managed a team of 5 student leaders and coordinated with university staff to ensure the success of club initiatives.",
    skills: ["Team Leading", "Event Management", "Content Creation", "Representation"],
    achievements: [
      "Introduced various events collaborating with different partners including Notion.",
      "Increased membership by 15% through targeted outreach and engaging programming, fostering a vibrant community of tech enthusiasts on campus",
      "Re-Introduced the Faculty end of year ball, organising a 300+ person event with live music and catering, receiving positive feedback from attendees and university staff",
    ],
  },
  {
    id: 4,
    index: "04",
    role: "WoW: Teacher Assistant",
    company: "Brompton Academy",
    period: "Jan 2022 — Jul 2022",
    type: "Part Time",
    location: "Gillingham, Kent",
    description:
      "Assisted in delivering a weekly lesson for secondary school students on Business Studies. Supported the lead instructor in curriculum development, provided one-on-one mentoring to students, and facilitated hands-on activities to enhance learning outcomes.",
    skills: ["Teaching", "Mentoring", "Curriculum Development", "Public Speaking"],
    achievements: [
      "Received positive feedback from students and staff for engaging teaching style and dedication to student success",
      "Contributed to an improvement in student performance on assessments through personalized support and interactive lessons",
    ],
  },

];

const typeColors: Record<Job["type"], string> = {
  "Full-time": "text-[#4effc8] border-[#4effc8]/30 bg-[#4effc8]/5",
  "Part Time": "text-[#a78bfa] border-[#a78bfa]/30 bg-[#a78bfa]/5",
  Freelance: "text-[#fb923c] border-[#fb923c]/30 bg-[#fb923c]/5",
  Leadership: "text-[#f472b6] border-[#f472b6]/30 bg-[#f472b6]/5",
  Contract: "text-[#60a5fa] border-[#60a5fa]/30 bg-[#60a5fa]/5",
};

function AccordionItem({ job, isOpen, onToggle }: { job: Job; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      className={`border-b border-border transition-colors duration-300 ${
        isOpen ? "bg-card" : "hover:bg-white/[0.02]"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-6 md:px-10 py-5 flex items-center gap-5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        aria-expanded={isOpen}
      >
        <span
          className="font-mono text-xs tracking-widest shrink-0 transition-colors duration-200"
          style={{ color: isOpen ? "var(--primary)" : "var(--muted-foreground)" }}
        >
          {job.index}
        </span>

        <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center md:gap-4">
          <span
            className="font-semibold text-base leading-snug transition-colors duration-200 truncate"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: isOpen ? "var(--foreground)" : "var(--foreground)",
            }}
          >
            {job.role}
          </span>
          <span
            className="font-mono text-sm truncate"
            style={{ color: isOpen ? "var(--primary)" : "var(--muted-foreground)" }}
          >
            {job.company}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 shrink-0">
          <span
            className={`font-mono text-xs px-2 py-0.5 rounded border ${typeColors[job.type]}`}
          >
            {job.type}
          </span>
          <span className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
            {job.period}
          </span>
        </div>

        <ChevronRight
          size={15}
          className="shrink-0 transition-transform duration-300 ease-out"
          style={{
            color: isOpen ? "var(--primary)" : "var(--muted-foreground)",
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
          }}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
      >
        <div ref={contentRef}>
          <div className="px-6 md:px-10 pb-8 pt-1">
            <div className="md:hidden flex items-center gap-3 mb-5">
              <span
                className={`font-mono text-xs px-2 py-0.5 rounded border ${typeColors[job.type]}`}
              >
                {job.type}
              </span>
              <span className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
                {job.period}
              </span>
            </div>

            <div className="grid md:grid-cols-[1fr_260px] gap-8 md:gap-12">
              <div className="space-y-6">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "var(--muted-foreground)",
                    lineHeight: "1.8",
                  }}
                >
                  {job.description}
                </p>

                <div className="space-y-2">
                  <p
                    className="font-mono text-xs tracking-widest uppercase mb-3"
                    style={{ color: "var(--primary)", opacity: 0.7 }}
                  >
                    ./highlights
                  </p>
                  <ul className="space-y-2">
                    {job.achievements.map((a, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span
                          className="font-mono text-xs mt-[3px] shrink-0"
                          style={{ color: "var(--primary)" }}
                        >
                          →
                        </span>
                        <span
                          className="text-sm"
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            color: "var(--foreground)",
                            opacity: 0.85,
                            lineHeight: "1.6",
                          }}
                        >
                          {a}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <p
                    className="font-mono text-xs tracking-widest uppercase mb-3"
                    style={{ color: "var(--primary)", opacity: 0.7 }}
                  >
                    ./stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-xs px-2.5 py-1 rounded"
                        style={{
                          background: "var(--muted)",
                          color: "var(--muted-foreground)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="pt-4 flex items-center gap-2 text-xs font-mono"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <MapPin size={11} />
                  {job.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "transparent", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div
          className="rounded-lg overflow-hidden"
          style={{
            border: "1px solid var(--border)",
            background: "var(--card)",
          }}
        >
          <div
            className="px-6 md:px-10 py-3 flex items-center justify-between border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex items-center gap-1.5">
              {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                <span
                  key={i}
                  className="w-3 h-3 rounded-full"
                  style={{ background: c, opacity: 0.8 }}
                />
              ))}
            </div>
            <span
              className="font-mono text-xs"
              style={{ color: "var(--muted-foreground)" }}
            >
              rjviernes — jobs.sh
            </span>
            <div className="w-14" />
          </div>

          <div
            className="hidden md:grid px-6 md:px-10 py-2.5 border-b"
            style={{ borderColor: "var(--border)", gridTemplateColumns: "44px 1fr auto" }}
          >
            {["#", "position", "period"].map((h) => (
              <span
                key={h}
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: "var(--muted-foreground)", opacity: 0.5 }}
              >
                {h}
              </span>
            ))}
          </div>

          <div>
            {jobs.map((job) => (
              <AccordionItem
                key={job.id}
                job={job}
                isOpen={openId === job.id}
                onToggle={() => toggle(job.id)}
              />
            ))}
          </div>

          <div
            className="px-6 md:px-10 py-4 flex items-center justify-between border-t"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
              {openId !== null
                ? `viewing ${jobs.find((j) => j.id === openId)?.company}`
                : "select a position"}
            </span>
            <a
              href="https://rjviernes.tech"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs flex items-center gap-1 transition-opacity duration-150 hover:opacity-100"
              style={{ color: "var(--primary)", opacity: 0.6 }}
            >
              full portfolio
              <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
