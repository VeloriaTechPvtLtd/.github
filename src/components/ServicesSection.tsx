import { 
  Smartphone, 
  Globe, 
  Bot, 
  BarChart3, 
  Cloud, 
  Shield
} from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS and Android apps with cross-platform capabilities using React Native and Flutter.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Optimization'],
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Responsive web applications using modern frameworks like React, Next.js, and Vue.js.',
      features: ['Responsive Design', 'Progressive Web Apps', 'Modern Frameworks', 'SEO Optimized'],
      color: 'from-green-500 to-emerald-500',
      delay: 0.2
    },
    {
      icon: Bot,
      title: 'AI Chatbots & Automation',
      description: 'Intelligent chatbots and automation solutions powered by AI and machine learning.',
      features: ['AI-Powered', 'Natural Language Processing', 'Multi-Platform', 'Integration Ready'],
      color: 'from-purple-500 to-violet-500',
      delay: 0.3
    },
    {
      icon: BarChart3,
      title: 'Analytics & Dashboards',
      description: 'Data visualization and business intelligence dashboards for actionable insights.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Business Intelligence'],
      color: 'from-yellow-500 to-orange-500',
      delay: 0.4
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions using AWS, Azure, and GCP.',
      features: ['Cloud Migration', 'DevOps', 'Auto-scaling', 'Cost Optimization'],
      color: 'from-indigo-500 to-blue-500',
      delay: 0.5
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security audits and implementation of robust security measures.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Data Protection'],
      color: 'from-red-500 to-pink-500',
      delay: 0.6
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#161b22] to-[#0d1117]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div 
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-[#3ecf8e] to-[#4fb883] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            We provide comprehensive software solutions to help businesses thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-[#1c2128]/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8"
            >
              {/* Icon */}
              <div 
                className="mb-4 sm:mb-6"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-xs sm:text-sm text-gray-500"
                  >
                    <div className="w-2 h-2 bg-[#3ecf8e] rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className="text-center"
        >
          <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 px-4 max-w-2xl mx-auto">
            Don't see what you're looking for? We create custom solutions tailored to your specific needs.
          </p>
          <button 
            className="bg-[#3ecf8e] text-black hover:bg-[#2bb377] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg text-sm sm:text-base"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}