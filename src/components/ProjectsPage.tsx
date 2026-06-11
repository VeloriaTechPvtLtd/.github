import { useState, useMemo } from 'react';
import { Search, Grid, List, ExternalLink, Smartphone, Globe, Bot, BarChart3, ShoppingCart, MessageSquare } from 'lucide-react';
import { finalProjectsData, Project } from '../data/projectsData';

interface ProjectsPageProps {
  onBack: () => void;
  onProjectSelect: (project: Project) => void;
}

export function ProjectsPage({ onProjectSelect }: ProjectsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recent');

  const categories = [
    { id: 'all', name: 'All Projects', icon: null },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'web', name: 'Web Apps', icon: Globe },
    { id: 'ai', name: 'AI Solutions', icon: Bot },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'communication', name: 'Communication', icon: MessageSquare }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'alphabetical', label: 'Alphabetical' },
    { value: 'duration', label: 'Duration' }
  ];

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = finalProjectsData.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return b.id - a.id;
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        case 'duration':
          return parseInt(b.duration) - parseInt(a.duration);
        default:
          return b.id - a.id;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div 
      className="min-h-screen bg-[#0d1117] text-white"
    >
      {/* Header */}
      <div 
        className="bg-gradient-to-r from-[#161b22] to-[#0d1117] border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div 
            className="flex items-center justify-end mb-6"
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className={`p-2 rounded-lg ${
                  viewMode === 'grid' ? 'bg-[#3ecf8e] text-black' : 'bg-[#1c2128] text-gray-400 hover:text-white'
                }`}
                style={{ transform: 'none', transition: 'none' }}
              >
                {viewMode === 'grid' ? <Grid className="w-5 h-5" /> : <List className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div 
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-[#3ecf8e] to-[#4fb883] bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6">
              Explore our complete collection of {finalProjectsData.length} successful projects across various industries and technologies.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto"
            >
              {/* Search Bar */}
              <div className="relative flex-1" data-search>
                <Search className="absolute left-4 top-1/4 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search projects, technologies, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => {
                    e.preventDefault();
                    setSearchTerm(e.target.value);
                  }}
                  onFocus={(e) => e.stopPropagation()}
                  className="w-full bg-[#1c2128] border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-[#3ecf8e] hover:border-[#3ecf8e]/50 focus:outline-none transition-colors duration-200 text-sm sm:text-base"
                  data-search
                />
              </div>

              {/* Sort Dropdown */}
              <div className="w-full sm:w-52">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-[#1c2128] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#3ecf8e] hover:border-[#3ecf8e]/50 focus:outline-none transition-colors duration-200 text-sm sm:text-base appearance-none cursor-pointer"
                  style={{
                    paddingRight: '2.5rem'
                  }}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-[#1c2128] text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div 
            className="flex flex-wrap justify-center gap-2 sm:gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm ${
                  selectedCategory === category.id
                    ? 'bg-[#3ecf8e] text-black'
                    : 'bg-[#1c2128] text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
                style={{ transform: 'none', transition: 'none' }}
              >
                {category.icon && (
                  <category.icon className="w-4 h-4 mr-2" />
                )}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid/List */}
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
      >
        <div 
          className="mb-6"
        >
          <p className="text-gray-400">
            Showing {filteredAndSortedProjects.length} of {finalProjectsData.length} projects
          </p>
        </div>

        {filteredAndSortedProjects.length === 0 && (
          <div 
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-[#1c2128] rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your search terms or filters</p>
          </div>
        )}

        {viewMode === 'grid' ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredAndSortedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1c2128]/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden cursor-pointer"
                style={{ transform: 'none', transition: 'none' }}
                onClick={() => onProjectSelect(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{ transform: 'none', transition: 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div 
                      className="w-8 h-8 bg-[#3ecf8e] rounded-full flex items-center justify-center"
                      style={{ transform: 'none', transition: 'none' }}
                    >
                      <ExternalLink className="w-4 h-4 text-black" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span 
                      className="bg-[#3ecf8e]/20 text-[#3ecf8e] px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                      style={{ transform: 'none', transition: 'none' }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2" style={{ transform: 'none', transition: 'none' }}>
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#3ecf8e]/10 text-[#3ecf8e] px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{project.client}</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="space-y-4"
          >
            {filteredAndSortedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1c2128]/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 cursor-pointer"
                style={{ transform: 'none', transition: 'none' }}
                onClick={() => onProjectSelect(project)}
              >
                <div className="flex gap-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white" style={{ transform: 'none', transition: 'none' }}>
                        {project.title}
                      </h3>
                      <span className="bg-[#3ecf8e]/20 text-[#3ecf8e] px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.slice(0, 5).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-[#3ecf8e]/10 text-[#3ecf8e] px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Client: {project.client}</span>
                      <span>Duration: {project.duration}</span>
                      <span>Team: {project.teamSize} members</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}