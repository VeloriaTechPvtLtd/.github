import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, HealthTech Solutions',
      company: 'HealthTech Solutions',
      content: 'Veloria Tech delivered our mobile healthcare app ahead of schedule. The quality of work and attention to detail was exceptional. Our user engagement increased by 300% after launch.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9dc9e7e?w=100&h=100&fit=crop&crop=face',
      project: 'Healthcare Mobile App'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO, EduLearn',
      company: 'EduLearn',
      content: 'The e-learning platform they built for us has revolutionized how we deliver education. The UI/UX is intuitive, and the performance is outstanding. Highly recommend!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      project: 'E-learning Platform'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, RetailPro',
      company: 'RetailPro',
      content: 'Our e-commerce platform has been a game-changer for our business. The team at Veloria Tech understood our vision and delivered exactly what we needed. Sales increased by 250%!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      project: 'E-commerce Platform'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Operations Manager, LogiFlow',
      company: 'LogiFlow',
      content: 'The analytics dashboard has given us insights we never had before. The real-time data visualization helps us make better decisions faster. Excellent work!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      project: 'Analytics Dashboard'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Product Manager, ConnectSpace',
      company: 'ConnectSpace',
      content: 'The team collaboration tool they built has transformed how our remote team works. The features are intuitive and the performance is flawless. Couldn\'t be happier!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
      project: 'Team Collaboration Tool'
    },
    {
      id: 6,
      name: 'James Mitchell',
      role: 'CEO, FinanceTracker',
      company: 'FinanceTracker',
      content: 'Our fintech mobile app has exceeded all expectations. The security features and user experience are top-notch. Veloria Tech is our go-to development partner.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      project: 'Fintech Mobile App'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#0d1117] to-[#161b22]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Happy <span className="bg-gradient-to-r from-[#3ecf8e] to-[#4fb883] bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
            Don't just take our word for it. Here's what our clients say about working with Veloria Tech.
          </p>
          
          {/* Client Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#3ecf8e] rounded-full mr-3 animate-pulse" />
              <span className="text-[#3ecf8e] font-bold text-sm sm:text-base">100% Client Satisfaction</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse" />
              <span className="text-yellow-400 font-bold text-sm sm:text-base">5.0 Average Rating</span>
            </div>
          </div>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative mb-10 sm:mb-12 md:mb-16">
          <motion.div 
            className="max-w-4xl mx-auto"
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#1c2128]/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 md:p-12 relative">
              {/* Quote Icon */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#3ecf8e]/10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#3ecf8e]" />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-4 sm:mb-6 pt-4 sm:pt-0">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-300 text-center mb-6 sm:mb-8 leading-relaxed px-2 sm:px-4">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#3ecf8e]"
                />
                <div className="text-center md:text-left">
                  <h4 className="text-white font-bold text-base sm:text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-400 text-sm sm:text-base">{testimonials[currentTestimonial].role}</p>
                  <p className="text-[#3ecf8e] font-semibold text-sm sm:text-base">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>

              {/* Project Tag */}
              <div className="flex justify-center mt-4 sm:mt-6">
                <span className="bg-[#3ecf8e]/10 text-[#3ecf8e] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  Project: {testimonials[currentTestimonial].project}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1c2128] border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-[#3ecf8e] hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>

            {/* Pagination Dots */}
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#3ecf8e]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1c2128] border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-[#3ecf8e] hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>

        {/* Client Logos */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-gray-500 mb-6 sm:mb-8 uppercase tracking-wider text-xs sm:text-sm">Trusted by amazing companies</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-60">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-white font-bold text-sm sm:text-lg hover:text-[#3ecf8e] transition-colors duration-300 cursor-pointer">
                {testimonial.company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}