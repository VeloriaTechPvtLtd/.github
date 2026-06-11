import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Bot, BarChart3, ShoppingCart, MessageSquare } from 'lucide-react';
import { finalProjectsData, Project } from '../data/projectsData';

interface ProjectsSectionProps {
  onViewAllProjects: () => void;
  onProjectSelect: (project: Project) => void;
}

export function ProjectsSection({ onViewAllProjects, onProjectSelect }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: null },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'web', name: 'Web Apps', icon: Globe },
    { id: 'ai', name: 'AI Solutions', icon: Bot },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'communication', name: 'Communication', icon: MessageSquare }
  ];

  // Use first 6 projects from the main data
  const featuredProjects = finalProjectsData.slice(0, 6);
  
  const filteredProjects = activeCategory === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === activeCategory);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0d1117]" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-[#3ecf8e] to-[#4fb883] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            Explore our portfolio of 50+ successful projects across various industries and technologies.
          </p>
          
          {/* Project Counter */}
          <motion.div 
            className="inline-flex items-center bg-[#1c2128] border border-gray-700 rounded-full px-4 sm:px-6 py-2 sm:py-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-3 h-3 bg-[#3ecf8e] rounded-full mr-3 animate-pulse" />
            <span className="text-[#3ecf8e] font-bold text-sm sm:text-base">50+ Projects Completed</span>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 md:mb-16 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
                activeCategory === category.id
                  ? 'bg-[#3ecf8e] text-black'
                  : 'bg-[#1c2128] text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon && (
                <category.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              )}
              <span className="whitespace-nowrap">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-[#1c2128]/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-[#3ecf8e]/50 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => onProjectSelect(project)}
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Hover Links */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      window.open(project.demoUrl, '_blank');
                    }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-[#3ecf8e] rounded-full flex items-center justify-center text-black hover:bg-[#2bb377] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                  <motion.button
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, '_blank');
                    }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-[#3ecf8e]/20 text-[#3ecf8e] px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#3ecf8e] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#3ecf8e]/10 text-[#3ecf8e] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Meta */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 pt-2 border-t border-gray-700">
                  <span>{project.client}</span>
                  <span>{project.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button 
            onClick={onViewAllProjects}
            className="bg-[#1c2128] text-white hover:bg-[#3ecf8e] hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 border border-gray-700 hover:border-[#3ecf8e] text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All 50+ Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}