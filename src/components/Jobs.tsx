import { useState } from 'react'
import { MapPin, ArrowUpRight, X, Calendar, Briefcase, Award, TrendingUp } from 'lucide-react'

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
  metric: string
  metricLabel: string
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
      "Directed the end-to-end production of digital assets and promotional media for the Faculty of Engineering & Science. Collaborated with researchers and academics to translate complex computer science and engineering concepts into user-friendly digital campaigns, managing schedules and multi-channel publishing to drive reach.",
    skills: ["Social Media Management", "Adobe Premiere Pro", "After Effects", "Photoshop", "Lightroom", "Canva", "Video Production"],
    achievements: [
      "Increased following to Faculty Social Media accounts by 10% through high-impact organic campaigns.",
      "Produced, filmed, and edited dynamic short-form videos and clearing campaign clips that unified the faculty's digital identity.",
      "Introduced NFC-based interactive event guides, live event coverages, and robotic demonstrations at Open Days to boost attendee engagement.",
      "Helped meet undergraduate and postgraduate enrollment recruitment targets for Computer Science programmes in the 2023/24/25 cycles."
    ],
    metric: "+10%",
    metricLabel: "Social Growth"
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
      "Led student recruitment teams and workflow logs during high-pressure Clearing operations, UCAS fairs, and outreach initiatives. Managed admissions inquiries across CRM databases, LiveChat, telephone consoles, and in-person campus tours under strict SLA deadlines.",
    skills: ["Team Leadership", "Customer Support", "Public Speaking", "CRM Systems", "Dynamics365", "Data Analytics", "Mentoring"],
    achievements: [
      "Coordinated and led clearing support teams of 10+ student and staff ambassadors during peak cycles, contributing to a 15% increase in conversion rates.",
      "Mentored and trained new student ambassadors on CRM email processes and customer service guidelines.",
      "Assisted in leading outreach programs targeting underperforming schools to increase STEM awareness and HE engagement."
    ],
    metric: "+15%",
    metricLabel: "Clearing Conversions"
  },
  {
    id: 3,
    index: "03",
    role: "President",
    company: "comptech.gre (Computer Technology Society)",
    period: "Sep 2023 — May 2025",
    type: "Leadership",
    location: "Greenwich, London",
    description:
      "Directed the university's Computer Technology Society, managing club budgets, external sponsor relations, and event logistics. Led a team of 5 student executives to deliver programming that bridged technical learning with professional networking.",
    skills: ["Team Management", "Event Planning", "Content Strategy", "Notion", "Project Management", "Budgeting"],
    achievements: [
      "Increased active student membership by 15% through interactive workshops and targeted marketing.",
      "Partnered with Notion to run community building campaigns, introducing members to collaborative tools.",
      "Re-established and managed the Faculty End of Year Ball, organising a 300+ attendee event with live music and catering, receiving high praise from university staff."
    ],
    metric: "300+",
    metricLabel: "Ball Attendees Managed"
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
      "Supported curriculum delivery and facilitated group discussions for a Year 10 Business Studies class of 30+ students. Explained economic and business concepts to improve class performance and provided feedback on student progress.",
    skills: ["Teaching", "Mentoring", "Public Speaking", "Curriculum Development", "Classroom Operations"],
    achievements: [
      "Assisted in delivering business modules and mock assessments, improving performance metrics for targeted students.",
      "Boosted class participation and collaborative learning through structured group activities and one-on-one mentoring."
    ],
    metric: "30+",
    metricLabel: "Students Mentored"
  }
]

const typeColors: Record<Job["type"], string> = {
  "Full-time": "text-[#4effc8] border-[#4effc8]/30 bg-[#4effc8]/5",
  "Part Time": "text-[#a78bfa] border-[#a78bfa]/30 bg-[#a78bfa]/5",
  "Leadership": "text-[#f472b6] border-[#f472b6]/30 bg-[#f472b6]/5",
  "Contract": "text-[#60a5fa] border-[#60a5fa]/30 bg-[#60a5fa]/5",
  "Volunteering": "text-[#fb923c] border-[#fb923c]/30 bg-[#fb923c]/5",
}

export default function Jobs() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  return (
    <section className="py-24 bg-[#0a0b10]" id="jobs">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Professional Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-consolas font-bold text-white mt-4 mb-4">
            Some Positions I've Held
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my career milestones. Click on any card below to open the details console and view achievements and skill stacks.
          </p>
        </div>

        {/* Bento Grid layout for Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {jobs.map((job) => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="group bg-[#111219]/60 border border-white/5 hover:border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/5 flex flex-col justify-between"
            >
              {/* Card Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors duration-300" />
              
              <div>
                {/* Index & Type Label */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-gray-500 group-hover:text-indigo-400 transition-colors">
                    LOG_PART: #{job.index}
                  </span>
                  <span className={`font-mono text-[10px] px-2.5 py-0.5 rounded border ${typeColors[job.type]}`}>
                    {job.type}
                  </span>
                </div>

                {/* Role and Company */}
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                  {job.role}
                </h3>
                <p className="font-mono text-xs text-indigo-400 mt-1">
                  @{job.company}
                </p>

                {/* Big Metric Highlight */}
                <div className="my-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-extrabold text-white font-consolas tracking-tight block">
                      {job.metric}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 mt-0.5 block">
                      {job.metricLabel}
                    </span>
                  </div>
                  <TrendingUp className="text-emerald-500 w-5 h-5 shrink-0 opacity-70 group-hover:opacity-100 transition-all duration-300" />
                </div>

                {/* Summary teaser */}
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                  {job.description}
                </p>
              </div>

              {/* Card Footer action */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-gray-500 group-hover:text-gray-300 transition-colors">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-indigo-400" />
                  {job.period}
                </span>
                <span className="flex items-center gap-0.5 text-indigo-400 group-hover:underline">
                  details
                  <ArrowUpRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Sleek Popup Detail Modal/Drawer */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with Blur */}
            <div 
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
            />

            {/* Modal Card */}
            <div className="relative w-full max-w-2xl bg-[#111219] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto transform scale-100 transition-all duration-300">
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="border-b border-white/5 pb-5 mb-6">
                <div className="flex items-center gap-3.5 mb-2.5">
                  <span className="font-mono text-xs text-indigo-400">
                    CONSOLE_REPORT: #{selectedJob.index}
                  </span>
                  <span className={`font-mono text-[10px] px-2.5 py-0.5 rounded border ${typeColors[selectedJob.type]}`}>
                    {selectedJob.type}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  {selectedJob.role}
                </h3>
                
                <p className="font-mono text-sm text-indigo-300 mt-1 flex items-center gap-2">
                  <span>@{selectedJob.company}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-400 text-xs font-sans flex items-center gap-1">
                    <MapPin size={12} className="text-indigo-400" />
                    {selectedJob.location}
                  </span>
                </p>
              </div>

              {/* Modal Body */}
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h4 className="font-mono text-xs tracking-wider text-indigo-400 uppercase mb-2">
                    ./summary
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {selectedJob.description}
                  </p>
                </div>

                {/* Achievements / Highlights */}
                <div>
                  <h4 className="font-mono text-xs tracking-wider text-indigo-400 uppercase mb-3 flex items-center gap-1">
                    <Award size={13} />
                    ./highlights_and_impact
                  </h4>
                  <ul className="space-y-3">
                    {selectedJob.achievements.map((ach, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-sm text-gray-300 leading-relaxed">
                        <span className="font-mono text-indigo-400 text-xs mt-1 shrink-0 select-none">→</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills used */}
                <div className="pt-4 border-t border-white/5">
                  <h4 className="font-mono text-xs tracking-wider text-indigo-400 uppercase mb-3 flex items-center gap-1">
                    <Briefcase size={13} />
                    ./applied_skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="font-mono text-[11px] px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-indigo-400" />
                  {selectedJob.period}
                </span>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-4 py-1.5 rounded-full bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors font-sans cursor-pointer"
                >
                  Close Console
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  )
}
