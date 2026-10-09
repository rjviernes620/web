export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0b10] border-t border-white/5 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 font-mono text-center md:text-left">
          Copyright © {currentYear} Roel-Junior Alejo Viernes
        </p>
        <div className="flex gap-6">
          <a href="#home_area" className="text-xs font-mono text-gray-600 hover:text-indigo-400 transition-colors">
            ./Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
