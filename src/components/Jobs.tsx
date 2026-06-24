import { useState, useRef, useEffect } from 'react'
import { ChevronRight, MapPin, ArrowUpRight } from 'lucide-react'

interface Job {
  id: number
  index: string
  role: string
  company: string
  period: string
  type: 'Full-time' | 'Part Time' | 'Volunteering' | 'Leadership' | 'Contract'
  location: string
  description: string
  skills: string[]
  achievements: string[]
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
      "Handled the social media presence for the Faculty of Engineering & Science, creating engaging content to promote academic programmes, research initiatives and events. Collaborated with the marketing team to develop content strategies, manage posting schedules, and analyze engagement metrics to optimize reach and impact.",
    skills: ["Social Media", "Premiere Pro", "Adobe Express", "Canva"],
    achievements: [
      "Increased following to Faculty Social Media accounts by 10%",
      "Introduced new initiatives to faculty events (inc. Open Days) to increase engagement including NFC-Based event guides, live coverage and robot demonstrations",
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
      "Represented the University within major internal and external events to communicate the value of the university's offerings to various audiences. Delivered lectures on HE topics, led campus tours and participated in panel discussions to share insights and experiences. Mentored new ambassadors and collaborated with the recruitment team to develop strategies for engaging prospective students.",
    skills: ["Customer Service", "Clearing", "Public Speaking", "Mentoring"],
    achievements: [
      "Successfully led 2 clearing teams of 10+ student and staff ambassadors during the 2024 and 2025 clearing cycles, contributing to a 15% increase in conversion rates",
      "Assisted in planning and leading an outreach initiative targeting underperforming schools to increase STEM awareness.",
      "Communicated and assisted prospective queries via Phone, CRM Email, LiveChat and in-person, demonstrating strong communication skills and a customer-centric approach to service",
    ],
  },
  {
    id: 3,
    index: "03",
    role: "President",
    company: "comptech.gre (University Computer Technology Society)",
    period: "Sep 2023 — May 2025",
    type: "Leadership",
    location: "Greenwich, London",
    description:
      "Led the university's Computer Technology Society, overseeing all aspects of club operations, including event planning, member engagement, and collaboration with industry partners. Organized workshops, guest lectures, and networking events to provide members with opportunities for learning and professional development. Managed a team of 5 student leaders and coordinated with university staff to ensure the success of club initiatives.",
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
]

const typeColors: Record<Job["type"], string> = {
  "Full-time": "text-[#4effc8] border-[#4effc8]/30 bg-[#4effc8]/5",
  "Part Time": "text-[#a78bfa] border-[#a78bfa]/30 bg-[#a78bfa]/5",
  "Leadership": "text-[#f472b6] border-[#f472b6]/30 bg-[#f472b6]/5",
  "Contract": "text-[#60a5fa] border-[#60a5fa]/30 bg-[#60a5fa]/5",
  "Volunteering": "text-[#fb923c] border-[#fb923c]/30 bg-[#fb923c]/5",
}

function AccordionItem({ job, isOpen, onToggle }: { job: Job; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [isOpen])

  return (
    <div className={`border-b border-white/5 transition-colors duration-300 ${isOpen ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'}`}>
      <button
        onClick={onToggle}
        className="w-full text-left px-6 md:px-8 py-5 flex items-center gap-5 group focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={`font-mono text-xs tracking-widest shrink-0 transition-colors duration-200 ${isOpen ? 'text-indigo-400' : 'text-gray-500'}`}>
          {job.index}
        </span>

        <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center md:gap-4">
          <span className="font-semibold text-base leading-snug text-white truncate">
            {job.role}
          </span>
          <span className={`font-mono text-sm truncate transition-colors ${isOpen ? 'text-indigo-400' : 'text-gray-400'}`}>
            @{job.company}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 shrink-0">
          <span className={`font-mono text-xs px-2.5 py-0.5 rounded border ${typeColors[job.type]}`}>
            {job.type}
          </span>
          <span className="font-mono text-xs text-gray-500">
            {job.period}
          </span>
        </div>

        <ChevronRight
          size={16}
          className={`shrink-0 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-90 text-indigo-400' : ''}`}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
      >
        <div ref={contentRef}>
          <div className="px-6 md:px-8 pb-8 pt-1">
            {/* Mobile Header elements (rendered inside expanding zone) */}
            <div className="md:hidden flex items-center gap-3 mb-5">
              <span className={`font-mono text-xs px-2 py-0.5 rounded border ${typeColors[job.type]}`}>
                {job.type}
              </span>
              <span className="font-mono text-xs text-gray-500">
                {job.period}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-8 md:gap-12">
              <div className="space-y-6">
                <p className="text-sm text-gray-400 leading-relaxed font-sans">
                  {job.description}
                </p>

                {job.achievements.length > 0 && (
                  <div className="space-y-2">
                    <p className="font-mono text-xs tracking-wider text-indigo-400 uppercase">
                      ./highlights
                    </p>
                    <ul className="space-y-2">
                      {job.achievements.map((a, i) => (
                        <li key={i} className="flex gap-2.5 items-start">
                          <span className="font-mono text-xs text-indigo-500 mt-0.5 select-none">→</span>
                          <span className="text-sm text-gray-300 leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="space-y-5">
                <div>
                  <p className="font-mono text-xs tracking-wider text-indigo-400 uppercase mb-3">
                    ./skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/5 border border-white/5 text-gray-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-2 text-xs font-mono text-gray-500 border-t border-white/5">
                  <MapPin size={13} className="text-indigo-400" />
                  {job.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Jobs() {
  const [openId, setOpenId] = useState<number | null>(1)

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="py-20 bg-[#0a0b10]" id="jobs">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Work Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-consolas font-bold text-white mt-4 mb-4">
            Some Positions I've Held
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Click on a role below to expand and view my key highlights, responsibilities, and skill stack.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Terminal Shell Container */}
          <div className="bg-[#111219] rounded-2xl border border-white/5 shadow-2xl overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="px-6 py-3 flex items-center justify-between bg-[#181923] border-b border-white/5">
              <div className="flex items-center gap-1.5">
                {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                  <span
                    key={i}
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ background: c, opacity: 0.8 }}
                  />
                ))}
              </div>
              <span className="font-mono text-xs text-gray-500">
                rjviernes — jobs.sh
              </span>
              <div className="w-14" />
            </div>

            {/* Terminal Body Table Headers (Hidden on Mobile) */}
            <div className="hidden md:grid px-8 py-3 border-b border-white/5 font-mono text-xs text-gray-500 tracking-wider uppercase" style={{ gridTemplateColumns: "44px 1fr auto" }}>
              <span>#</span>
              <span>Position / Company</span>
              <span>Details</span>
            </div>

            {/* Accordions */}
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

            {/* Terminal Footer status bar */}
            <div className="px-6 md:px-8 py-4 flex items-center justify-between border-t border-white/5 font-mono text-xs text-gray-500">
              <span>
                {openId !== null
                  ? `viewing ${jobs.find((j) => j.id === openId)?.company}`
                  : "select a position"}
              </span>
              <a
                href="#contact_info"
                className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                contact me
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
