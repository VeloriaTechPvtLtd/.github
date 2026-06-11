import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, TrendingUp, CheckCircle, Quote, Play, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../data/projectsData';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  return (
    <motion.div 
      className="min-h-screen bg-[#0d1117] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-[#161b22] to-[#0d1117] border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="bg-[#3ecf8e]/20 text-[#3ecf8e] px-4 py-2 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">{project.client}</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {project.title}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-400 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {project.description}
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#3ecf8e] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#2bb377] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Live Demo
                </motion.a>
                
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#1c2128] text-white px-6 py-3 rounded-lg font-semibold border border-gray-600 hover:border-[#3ecf8e] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </motion.a>
              </motion.div>

              <motion.div 
                className="grid grid-cols-3 gap-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[
                  { icon: Calendar, label: 'Duration', value: project.duration },
                  { icon: Users, label: 'Team Size', value: project.teamSize.toString() },
                  { icon: TrendingUp, label: 'Category', value: project.category }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-[#1c2128]/50 rounded-lg p-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <item.icon className="w-6 h-6 text-[#3ecf8e] mx-auto mb-2" />
                    <div className="text-sm text-gray-400">{item.label}</div>
                    <div className="font-bold capitalize">{item.value}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-cover rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Screenshots */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <ImageIcon className="w-8 h-8 text-[#3ecf8e] mr-3" />
                Screenshots
              </h2>
              
              <div className="relative">
                <motion.div 
                  className="aspect-video bg-[#1c2128] rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentScreenshot}
                      src={project.screenshots[currentScreenshot]} 
                      alt={`Screenshot ${currentScreenshot + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>
                </motion.div>
                
                {project.screenshots.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevScreenshot}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </motion.button>
                    
                    <motion.button
                      onClick={nextScreenshot}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>

                    <div className="flex justify-center mt-4 gap-2">
                      {project.screenshots.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentScreenshot(index)}
                          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            index === currentScreenshot ? 'bg-[#3ecf8e]' : 'bg-gray-600'
                          }`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.8 }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center bg-[#1c2128]/50 rounded-lg p-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <CheckCircle className="w-6 h-6 text-[#3ecf8e] mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Challenges & Solutions */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Challenges & Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">Challenges</h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-[#3ecf8e] mb-4">Solutions</h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-[#3ecf8e] mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{solution}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Project Growth */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Project Impact & Growth</h2>
              <motion.div 
                className="bg-gradient-to-r from-[#1c2128]/50 to-[#3ecf8e]/10 rounded-2xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {[
                    { label: 'User Growth', value: project.projectGrowth.userGrowth },
                    { label: 'Performance', value: project.projectGrowth.performanceImprovement }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    >
                      <h3 className="text-lg font-bold text-[#3ecf8e] mb-2">{item.label}</h3>
                      <p className="text-gray-300">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                >
                  <h3 className="text-lg font-bold text-[#3ecf8e] mb-2">Business Impact</h3>
                  <p className="text-gray-300">{project.projectGrowth.businessImpact}</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.projectGrowth.metrics.map((metric, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.section>

            {/* Testimonial */}
            {project.testimonial && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Client Testimonial</h2>
                <motion.div 
                  className="bg-[#1c2128]/50 rounded-2xl p-8 relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Quote className="w-12 h-12 text-[#3ecf8e]/20 absolute top-4 left-4" />
                  <blockquote className="text-xl text-gray-300 mb-6 pl-8">
                    "{project.testimonial.text}"
                  </blockquote>
                  <div className="flex items-center pl-8">
                    <div>
                      <div className="font-bold text-white">{project.testimonial.author}</div>
                      <div className="text-gray-400">{project.testimonial.position}</div>
                    </div>
                  </div>
                </motion.div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Tech Stack */}
            <motion.div 
              className="bg-[#1c2128]/50 rounded-2xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="bg-[#3ecf8e]/10 text-[#3ecf8e] px-3 py-2 rounded-lg text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div 
              className="bg-[#1c2128]/50 rounded-2xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
              <div className="space-y-4">
                {[
                  { label: 'Client', value: project.client },
                  { label: 'Duration', value: project.duration },
                  { label: 'Team Size', value: `${project.teamSize} members` },
                  { label: 'Category', value: project.category }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                    <div className="font-semibold capitalize">{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="bg-[#1c2128]/50 rounded-2xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                {[
                  { icon: ExternalLink, label: 'Live Demo', url: project.demoUrl },
                  { icon: Github, label: 'Source Code', url: project.githubUrl }
                ].map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-[#3ecf8e] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    <link.icon className="w-5 h-5 mr-3" />
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}