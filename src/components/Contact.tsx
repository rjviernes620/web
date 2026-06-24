import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const contactLinks = [
    {
      name: 'GitHub',
      username: '@rjviernes620',
      href: 'https://github.com/rjviernes620',
      icon: <Github className="w-8 h-8 text-white" />,
      color: 'hover:shadow-neutral-500/10 hover:border-neutral-500/30',
      accent: 'bg-neutral-500/10 text-neutral-400'
    },
    {
      name: 'LinkedIn',
      username: 'roel-junior-alejo-viernes',
      href: 'https://www.linkedin.com/in/roel-junior-alejo-viernes-bab8a7253/',
      icon: <Linkedin className="w-8 h-8 text-[#0077B5]" />,
      color: 'hover:shadow-[#0077B5]/10 hover:border-[#0077B5]/30',
      accent: 'bg-[#0077B5]/10 text-[#0077B5]'
    },
    {
      name: 'Email',
      username: 'roel@rjviernes.tech',
      href: 'mailto:rjviernes620@gmail.com',
      icon: <Mail className="w-8 h-8 text-indigo-400" />,
      color: 'hover:shadow-indigo-500/10 hover:border-indigo-500/30',
      accent: 'bg-indigo-500/10 text-indigo-400'
    }
  ]

  return (
    <section className="py-24 bg-[#0a0b10] relative" id="contact_info">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-4">
            How you can reach me
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Feel free to connect with me on social platforms or send an email. I'm always open to new opportunities!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col justify-between items-start gap-8 transition-all hover:-translate-y-1 hover:bg-white/[0.04] shadow-xl ${link.color} group`}
            >
              <div className="flex justify-between items-start w-full">
                <div className={`p-4 rounded-xl ${link.accent}`}>
                  {link.icon}
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-mono mb-1">{link.name}</h3>
                <p className="text-sm text-gray-400 break-all">{link.username}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
