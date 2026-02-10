import { useState } from 'react';
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
} from 'lucide-react';

// Project data structure
interface ProjectFile {
  id: string;
  name: string;
  type: 'file';
  project: {
    title: string;
    description: string;
    technologies: string[];
    date: string;
    github?: string;
    demo?: string;
    thumbnail?: string;
  };
}

interface FolderItem {
  id: string;
  name: string;
  type: 'folder';
  children: (FolderItem | ProjectFile)[];
}

type FileSystemItem = FolderItem | ProjectFile;

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
          id: 'ecommerce',
          name: 'E-Commerce Platform',
          type: 'file',
          project: {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard.',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
            date: '2024-01',
            github: 'https://github.com/username/ecommerce',
            demo: 'https://demo.example.com'
          }
        },
        {
          id: 'blog',
          name: 'Personal Blog Engine',
          type: 'file',
          project: {
            title: 'Personal Blog Engine',
            description: 'A lightweight, SEO-optimized blog engine with markdown support and custom theming.',
            technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
            date: '2023-11'
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
          id: 'fitness',
          name: 'Fitness Tracker',
          type: 'file',
          project: {
            title: 'Fitness Tracker',
            description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.',
            technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
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
          id: 'ui-kit',
          name: 'Modern UI Kit',
          type: 'file',
          project: {
            title: 'Modern UI Kit',
            description: 'Comprehensive design system with 100+ components, dark mode support, and accessibility features.',
            technologies: ['React', 'TypeScript', 'Storybook', 'Figma'],
            date: '2023-09',
            demo: 'https://storybook.example.com'
          }
        }
      ]
    },
    {
      id: 'ai',
      name: 'Work Projects',
      type: 'folder',
      children: [
        {
          id: 'chatbot',
          name: 'AI Chatbot',
          type: 'file',
          project: {
            title: 'AI Chatbot',
            description: 'Intelligent chatbot using natural language processing for customer support automation.',
            technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
            date: '2024-02'
          }
        }
      ]
    }
  ]
};

export function FileExplorer() {
  const [currentPath, setCurrentPath] = useState<string[]>(['Projects']);
  const [selectedProject, setSelectedProject] = useState<ProjectFile | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['root']));

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  const navigateToFolder = (item: FolderItem, pathSegments: string[]) => {
    setCurrentPath(pathSegments);
    setSelectedProject(null);
    if (!expandedFolders.has(item.id)) {
      toggleFolder(item.id);
    }
  };

  const openProject = (project: ProjectFile, pathSegments: string[]) => {
    setCurrentPath(pathSegments);
    setSelectedProject(project);
  };

  const getCurrentFolder = (): FolderItem => {
    let current: FileSystemItem = fileSystem;
    for (let i = 1; i < currentPath.length; i++) {
      if (current.type === 'folder') {
        const found = current.children.find(child => child.name === currentPath[i]);
        if (found) {
          current = found;
        }
      }
    }
    return current as FolderItem;
  };

  const TreeNode = ({ item, depth = 0, parentPath = ['Projects'] }: { 
    item: FileSystemItem; 
    depth?: number; 
    parentPath?: string[];
  }) => {
    const isExpanded = expandedFolders.has(item.id);
    const itemPath = [...parentPath, item.name];

    if (item.type === 'folder') {
      return (
        <div>
          <button
            onClick={() => toggleFolder(item.id)}
            onDoubleClick={() => navigateToFolder(item, itemPath)}
            className="flex items-center gap-2 w-full px-2 py-1.5 rounded hover:bg-white/40 transition-colors text-sm"
            style={{ paddingLeft: `${depth * 12 + 8}px` }}
          >
            <ChevronRight 
              className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} 
            />
            {isExpanded ? (
              <FolderOpen className="w-4 h-4 text-yellow-600" />
            ) : (
              <Folder className="w-4 h-4 text-yellow-600" />
            )}
            <span className="text-gray-800">{item.name}</span>
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
      );
    } else {
      return (
        <button
          onClick={() => openProject(item, itemPath)}
          className="flex items-center gap-2 w-full px-2 py-1.5 rounded hover:bg-white/40 transition-colors text-sm"
          style={{ paddingLeft: `${depth * 12 + 8 + 15}px` }}
        >
          <File className="w-4 h-4 text-blue-600" />
          <span className="text-gray-800">{item.name}</span>
        </button>
      );
    }
  };

  const currentFolder = getCurrentFolder();

  return (
    <div className="min-h-screen bg-transparent p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl mb-8 text-black">My Projects - INCOMPLETE</h1>
        
        <div className="bg-white rounded-xl border border-gray-200/50 shadow-2xl overflow-hidden">
          {/* Top Navigation Bar */}
          <div className="bg-white border-b border-gray-200/50 p-3">
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4 text-gray-600" />
              {currentPath.map((segment, index) => (
                <div key={index} className="flex items-center gap-2">
                  {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
                  <button
                    onClick={() => {
                      if (index < currentPath.length - 1) {
                        setCurrentPath(currentPath.slice(0, index + 1));
                        setSelectedProject(null);
                      }
                    }}
                    className={`px-2 py-1 rounded text-sm ${
                      index === currentPath.length - 1
                        ? 'bg-blue-100 text-blue-700'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {segment}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex" style={{ height: '600px' }}>
            {/* Sidebar Tree View */}
            <div className="w-64 border-r border-gray-200/50 bg-gray-50 p-3 overflow-y-auto">
              <TreeNode item={fileSystem} />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 overflow-y-auto">
              {selectedProject ? (
                // Project Details View
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl text-gray-900">{selectedProject.project.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(selectedProject.project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    {selectedProject.project.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Tag className="w-4 h-4" />
                      <span className="text-sm font-medium">Technologies:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    {selectedProject.project.github && (
                      <a
                        href={selectedProject.project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
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
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                // Folder Contents View
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {currentFolder.type === 'folder' && currentFolder.children.map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (item.type === 'folder') {
                          navigateToFolder(item, [...currentPath, item.name]);
                        } else {
                          openProject(item, [...currentPath, item.name]);
                        }
                      }}
                      className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white/60 transition-all group"
                    >
                      {item.type === 'folder' ? (
                        <Folder className="w-16 h-16 text-yellow-500 group-hover:text-yellow-600" />
                      ) : (
                        <File className="w-16 h-16 text-blue-500 group-hover:text-blue-600" />
                      )}
                      <span className="text-sm text-center text-gray-800">{item.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
