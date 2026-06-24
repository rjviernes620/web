import { useState } from 'react'
import { 
  Folder, 
  FolderOpen, 
  File, 
  ChevronRight, 
  ChevronDown,
  Home,
  Github,
  ExternalLink,
  Calendar,
  Tag
} from 'lucide-react'

// Project data structure
interface ProjectFile {
  id: string
  name: string
  type: 'file'
  project: {
    title: string
    description: string
    technologies: string[]
    date: string
    github?: string
    demo?: string
    thumbnail?: string
  }
}

interface FolderItem {
  id: string
  name: string
  type: 'folder'
  children: (FolderItem | ProjectFile)[]
}

type FileSystemItem = FolderItem | ProjectFile

// Mock project data
const fileSystem: FolderItem = {
  id: 'root',
  name: 'Projects',
  type: 'folder',
  children: [
    {
      id: 'web',
      name: 'Year 1 Projects',
      type: 'folder',
      children: [
        {
          id: 'algo_y1',
          name: 'Algorithm Analysis Tool',
          type: 'file',
          project: {
            title: 'Algorithm Analysis tool',
            description: 'A full-stack tool for analyzing and visualizing algorithm performance on a given leetcode-style problem.',
            technologies: ['Python'],
            date: '2023-01',
            github: 'https://github.com/rjviernes620/COMP-1819---Coursework',
          }
        }
      ]
    },
    {
      id: 'mobile',
      name: 'Year 2 Projects',
      type: 'folder',
      children: [
        {
          id: 'london_underground',
          name: 'London Underground Wayfinder',
          type: 'file',
          project: {
            title: 'London Underground Wayfinder',
            description: 'Interactive wayfinding application for navigating the London Underground transit system.',
            technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
            date: '2024-03'
          }
        },
        {
          id: 'connect4_ai',
          name: 'Connect4: AI vs AI',
          type: 'file',
          project: {
            title: 'Connect4: AI vs AI',
            description: 'AI-powered Connect Four game where different algorithms compete against each other to determine optimal strategies.',
            technologies: ['Python', 'Minimax Algorithm', 'Alpha-Beta Pruning'],
            date: '2024-03'
          }
        }
      ]
    },
    {
      id: 'design',
      name: 'Year 3 Projects',
      type: 'folder',
      children: [
        {
          id: 'Dissertation: AI',
          name: 'Dissertation: AI: HandTyper',
          type: 'file',
          project: {
            title: 'Dissertation: AI: HandTyper',
            description: 'Comprehensive design system with 100+ components, dark mode support, and accessibility features.',
            technologies: ['Python', 'TensorFlow', 'OpenCV', 'Mediapipe'],
            date: '2025-05',
            demo: 'https://storybook.example.com'
          }
        },
        {
          id: 'AI_2',
          name: 'Algo Analysis: GameAI',
          type: 'file',
          project: {
            title: 'Algo Analysis: GameAI',
            description: 'This project involved me and my coursework group researching into different ML algorithms which are commonly used within the controlling of CPU players in video games and creating our own implementations of ML algorithms to onto the game "Super Mario Bros" to create a CPU player which would be able to complete levels in the fastest time possible. My own implementation included the use of the MCTS (Monte Carlo Tree Search) algorithm and pathfinding to create an AI agent which would be able to play through levels of Super Mario Bros.',
            technologies: ['Python', 'TensorFlow', 'matplotlib'],
            date: '2023-01',
          }
        },
      ]
    },
    {
      id: 'ai',
      name: 'Work Projects',
      type: 'folder',
      children: [
        {
          id: 'login_spreadsheet',
          name: 'login spreadsheet generator',
          type: 'file',
          project: {
            title: 'login spreadsheet generator',
            description: 'Automated tool for generating physical login slips for events.',
            technologies: ['Python', 'Pandas', 'OpenPyXL'],
            date: '2024-02'
          }
        },
        {
          id: 'NFC_OD',
          name: 'NFC-Based Event engagement system',
          type: 'file',
          project: {
            title: 'NFC-Based Event engagement system',
            description: 'An NFC-based event engagement framework which allows for users to access event information and interactive content with the use of NFC technology and mobile devices. Reducing the need for physical materials and enhancing user experience at events.',
            technologies: ['Python', 'NFC Technology'],
            date: '2024-04'
          }
        },
        {
          id: 'Robot_Painter',
          name: 'Robot Painter',
          type: 'file',
          project: {
            title: 'Robot Painter',
            description: 'A robotic system designed to autonomously create paintings based on user input and predefined styles.',
            technologies: ['Python', 'Robotics', 'Computer Vision'],
            date: '2024-05'
          }
        },
      ]
    },
        {
      id: 'prof',
      name: 'Professional Projects',
      type: 'folder',
      children: [
        {
          id: 'juicegels',
          name: 'juicegels.com',
          type: 'file',
          project: {
            title: 'juicegels.com',
            description: 'A mobile first e-commerce website for a startup company selling juice gels. Built on React, Python and a DB on Sanity, it features a custom CMS for managing products, orders and customer data.',
            technologies: ['Python', 'React', 'Sanity', 'HTML', 'CSS', 'Typescript'],
            date: '2024-02'
          }
        },
        {
          id: 'SM_Dashboard',
          name: 'Social Media Dashboard',
          type: 'file',
          project: {
            title: 'Social Media Dashboard',
            description: 'A comprehensive web-based social media management dashboard for monitoring and analyzing social media performance.',
            technologies: ['Python', 'React', 'Node.js'],
            date: '2024-04'
          }
        },
      ]
    }
  ]
}

export function FileExplorer() {
  const [currentPath, setCurrentPath] = useState<string[]>(['Projects'])
  const [selectedProject, setSelectedProject] = useState<ProjectFile | null>(null)
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['root']))

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId)
    } else {
      newExpanded.add(folderId)
    }
    setExpandedFolders(newExpanded)
  }

  const navigateToFolder = (item: FolderItem, pathSegments: string[]) => {
    setCurrentPath(pathSegments)
    setSelectedProject(null)
    if (!expandedFolders.has(item.id)) {
      toggleFolder(item.id)
    }
  }

  const openProject = (project: ProjectFile, pathSegments: string[]) => {
    setCurrentPath(pathSegments)
    setSelectedProject(project)
  }

  const getCurrentFolder = (): FolderItem => {
    let current: FileSystemItem = fileSystem
    for (let i = 1; i < currentPath.length; i++) {
      if (current.type === 'folder') {
        const found: FileSystemItem | undefined = current.children.find((child: FileSystemItem) => child.name === currentPath[i])
        if (found) {
          current = found
        }
      }
    }
    return current as FolderItem
  }

  const TreeNode = ({ item, depth = 0, parentPath = ['Projects'] }: { 
    item: FileSystemItem
    depth?: number
    parentPath?: string[]
  }) => {
    const isExpanded = expandedFolders.has(item.id)
    const itemPath = [...parentPath, item.name]
    const isSelected = selectedProject?.id === item.id

    if (item.type === 'folder') {
      return (
        <div>
          <button
            onClick={() => {
              toggleFolder(item.id)
              navigateToFolder(item, itemPath)
            }}
            className="flex items-center gap-2 w-full px-2 py-1.5 rounded hover:bg-white/5 transition-colors text-sm text-left focus:outline-none"
            style={{ paddingLeft: `${depth * 12 + 8}px` }}
          >
            <ChevronRight 
              className={`w-3.5 h-3.5 text-gray-500 transition-transform ${isExpanded ? 'rotate-90' : ''}`} 
            />
            {isExpanded ? (
              <FolderOpen className="w-4 h-4 text-yellow-500/80" />
            ) : (
              <Folder className="w-4 h-4 text-yellow-500/80" />
            )}
            <span className="text-gray-300 font-medium truncate">{item.name}</span>
          </button>
          {isExpanded && (
            <div>
              {item.children.map(child => (
                <TreeNode 
                  key={child.id} 
                  item={child} 
                  depth={depth + 1} 
                  parentPath={itemPath}
                />
              ))}
            </div>
          )}
        </div>
      )
    } else {
      return (
        <button
          onClick={() => openProject(item, parentPath)}
          className={`flex items-center gap-2 w-full px-2 py-1.5 rounded transition-colors text-sm text-left focus:outline-none ${
            isSelected ? 'bg-indigo-600/20 border-l-2 border-indigo-500 text-indigo-300' : 'hover:bg-white/5 text-gray-400'
          }`}
          style={{ paddingLeft: `${depth * 12 + 8 + 15}px` }}
        >
          <File className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-indigo-400' : 'text-indigo-500/80'}`} />
          <span className="truncate">{item.name}</span>
        </button>
      )
    }
  }

  const currentFolder = getCurrentFolder()

  return (
    <div className="bg-[#111219] rounded-2xl border border-white/5 shadow-2xl overflow-hidden flex flex-col h-[550px]">
      {/* Code Window Header / OS Title Bar */}
      <div className="bg-[#181923] border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* OS Window buttons */}
          <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
        </div>
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
          <Home className="w-3.5 h-3.5" />
          {currentPath.map((segment, index) => {
            const isLastFolder = index === currentPath.length - 1
            const isCurrentActive = isLastFolder && !selectedProject
            return (
              <div key={index} className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-gray-600" />
                <button
                  onClick={() => {
                    setCurrentPath(currentPath.slice(0, index + 1))
                    setSelectedProject(null)
                  }}
                  className={`hover:text-white transition-colors focus:outline-none ${
                    isCurrentActive ? 'text-indigo-400 font-semibold' : ''
                  }`}
                  disabled={isCurrentActive}
                >
                  {segment}
                </button>
              </div>
            )
          })}
          {selectedProject && (
            <div className="flex items-center gap-1">
              <ChevronRight className="w-3 h-3 text-gray-600" />
              <span className="text-indigo-400 font-semibold">{selectedProject.name}</span>
            </div>
          )}
        </div>

        <div className="w-16" /> {/* Spacer */}
      </div>

      {/* Main Workspace split panel */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar File Tree */}
        <div className="w-64 border-r border-white/5 bg-[#14151e] p-3 overflow-y-auto hidden md:block">
          <TreeNode item={fileSystem} />
        </div>

        {/* Content Pane */}
        <div 
          className="flex-1 p-6 md:p-8 overflow-y-auto bg-[#0c0d13]"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProject(null)
            }
          }}
        >
          {selectedProject ? (
            /* Project Details View */
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2 border-b border-white/5 pb-4">
                <h2 className="text-2xl md:text-3xl font-consolas font-bold text-white">{selectedProject.project.title}</h2>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>{new Date(selectedProject.project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                </div>
              </div>

              <p className="text-gray-300 text-base leading-relaxed">
                {selectedProject.project.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400 font-mono text-xs">
                  <Tag className="w-4 h-4 text-emerald-400" />
                  <span>Technologies:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-white/5">
                {selectedProject.project.github && (
                  <a
                    href={selectedProject.project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white transition-all transform hover:-translate-y-0.5"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
                {selectedProject.project.demo && (
                  <a
                    href={selectedProject.project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/10 transition-all transform hover:-translate-y-0.5"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ) : (
            /* Folder Contents Grid View */
            <div 
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setSelectedProject(null)
                }
              }}
            >
              {currentFolder.type === 'folder' && currentFolder.children.map(item => (
                <button
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    if (item.type === 'folder') {
                      navigateToFolder(item, [...currentPath, item.name])
                    } else {
                      openProject(item, currentPath)
                    }
                  }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all group focus:outline-none"
                >
                  {item.type === 'folder' ? (
                    <Folder className="w-14 h-14 text-yellow-500/80 group-hover:text-yellow-500 filter drop-shadow-[0_4px_8px_rgba(234,179,8,0.15)] transition-all transform group-hover:scale-105" />
                  ) : (
                    <File className="w-14 h-14 text-indigo-500/80 group-hover:text-indigo-500 filter drop-shadow-[0_4px_8px_rgba(99,102,241,0.15)] transition-all transform group-hover:scale-105" />
                  )}
                  <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors truncate max-w-full px-1">{item.name}</span>
                </button>
              ))}
              
              {/* Back Folder navigation link if deep */}
              {currentPath.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentPath(currentPath.slice(0, -1))
                    setSelectedProject(null)
                  }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all group focus:outline-none"
                >
                  <Folder className="w-14 h-14 text-gray-600 group-hover:text-gray-500 transition-all transform group-hover:scale-105" />
                  <span className="text-xs font-mono text-gray-500 group-hover:text-gray-400 transition-colors">.. (Go Back)</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
