"use client";

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ExternalLink, Smartphone, Globe, Bot, BarChart3, ShoppingCart, MessageSquare } from 'lucide-react';
import { finalProjectsData, getProjectPath, type Project } from '@/lib/data/projects';
import {
  getProjectCardAspectClass,
  getProjectCardImageClass,
  getProjectImageSrc,
} from '@/lib/utils/projectImage';

export function ProjectsPage() {
  const router = useRouter();

  const onProjectSelect = (project: Project) => {
    router.push(getProjectPath(project));
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
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
    const filtered = finalProjectsData.filter(project => {
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
      className="min-h-screen bg-background text-foreground"
    >
      {/* Header */}
      <div 
        className="-mt-nav-offset bg-gradient-to-r from-secondary to-background border-b border-border pt-nav-offset"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 sm:pt-5 sm:pb-8">
          <div className="text-center mb-8">
            <h1 className="t-display mb-4">
              Our <span className="together-gradient-text">portfolio</span>
            </h1>
            <p className="t-section-desc max-w-3xl mx-auto mb-6">
              Explore our complete collection of {finalProjectsData.length} successful projects across various industries and technologies.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto"
            >
              {/* Search Bar */}
              <div className="relative flex-1" data-search>
                <Search className="absolute left-4 top-1/4 transform -translate-y-1/2 text-muted-foreground w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search projects, technologies, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => {
                    e.preventDefault();
                    setSearchTerm(e.target.value);
                  }}
                  onFocus={(e) => e.stopPropagation()}
                  className="together-input pl-12"
                  data-search
                />
              </div>

              {/* Sort Dropdown */}
              <div className="w-full sm:w-52">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="together-input appearance-none cursor-pointer"
                  style={{
                    paddingRight: '2.5rem'
                  }}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-card text-foreground">
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
                className={`together-tab flex items-center ${
                  selectedCategory === category.id
                    ? 'together-tab-active'
                    : 'together-tab-inactive bg-white'
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

      {/* Projects Grid */}
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
      >
        <div 
          className="mb-6"
        >
          <p className="text-muted-foreground">
            Showing {filteredAndSortedProjects.length} of {finalProjectsData.length} projects
          </p>
        </div>

        {filteredAndSortedProjects.length === 0 && (
          <div 
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAndSortedProjects.map((project) => (
            <div
              key={project.id}
              className="together-card overflow-hidden cursor-pointer hover:-translate-y-0.5 transition-transform duration-300"
              style={{ transform: 'none', transition: 'none' }}
              onClick={() => onProjectSelect(project)}
            >
              <div className={`relative overflow-hidden ${getProjectCardAspectClass()}`}>
                <img 
                  src={getProjectImageSrc(project.image)} 
                  alt={project.title}
                  className={getProjectCardImageClass()}
                  style={{ transform: 'none', transition: 'none' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <div 
                    className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
                    style={{ transform: 'none', transition: 'none' }}
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4">
                  <span className="together-tag bg-white/95 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="t-card-title mb-1">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-body-sm text-muted-foreground mb-2 tracking-snug">{project.subtitle}</p>
                )}
                
                <p className="t-body-sm line-clamp-3 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-body-xs t-mono bg-secondary text-foreground px-2 py-1 rounded-lg border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-body-xs text-muted-foreground px-2 py-1">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-body-xs text-muted-foreground pt-4 border-t border-border">
                  <span>{project.role || project.client}</span>
                  <span className="t-mono">{project.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}