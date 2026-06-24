import { FileExplorer } from './FileExplorer'

export default function Projects() {
  return (
    <section className="py-20 bg-[#0a0b10]" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Portfolio Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-consolas font-bold text-white mt-4 mb-4">
            Some of the Projects I've worked on
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my work through the interactive file explorer below. Select a project folder and double click or select a project file to inspect the project details.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <FileExplorer />
        </div>
      </div>
    </section>
  )
}
