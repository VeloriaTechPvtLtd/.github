import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  Globe,
  Bot,
  BarChart3,
  Zap,
  CheckCircle,
  Play,
} from "lucide-react";

export function VeloriaHero() {
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      icon: Smartphone,
      name: "Mobile Apps",
      color: "text-blue-400",
    },
    {
      icon: Globe,
      name: "Web Applications",
      color: "text-green-400",
    },
    {
      icon: Bot,
      name: "AI Chatbots",
      color: "text-purple-400",
    },
    {
      icon: BarChart3,
      name: "Analytics Dashboard",
      color: "text-yellow-400",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentServiceData = services[currentService];

  const stats = [
    {
      icon: CheckCircle,
      number: "50+",
      label: "Projects Completed",
    },
    {
      icon: Zap,
      number: "100%",
      label: "Happy Clients",
    },
    {
      icon: Globe,
      number: "Global",
      label: "Reach",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#0d1117] via-[#0d1117] to-[#161b22] py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-[#3ecf8e]/5 rounded-full blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transform: "translateX(-50%)" }}
        />
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-[#3ecf8e]/10 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-purple-500/10 rounded-full"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(62,207,142,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(62,207,142,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10 w-full">
        <div className="text-center w-full">
          {/* Success Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-gradient-to-r from-[#3ecf8e]/20 to-purple-500/20 text-[#3ecf8e] border border-[#3ecf8e]/30 px-6 py-3 text-sm font-semibold rounded-full backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              50+ Projects Delivered Successfully
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
              We Build Software
              <br />
              <span className="bg-gradient-to-r from-[#3ecf8e] via-[#4fb883] to-[#3ecf8e] bg-clip-text text-transparent">
                End to End
              </span>
            </h1>

            {/* Animated Service Display */}
            <div className="flex flex-col sm:flex-row justify-center items-center mb-8 gap-4">
              <span className="text-xl sm:text-2xl text-gray-400">
                Specializing in
              </span>
              <motion.div
                key={currentService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center bg-[#1c2128]/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-3"
              >
                <currentServiceData.icon
                  className={`w-6 h-6 mr-3 ${currentServiceData.color}`}
                />
                <span
                  className={`text-xl sm:text-2xl font-bold ${currentServiceData.color}`}
                >
                  {currentServiceData.name}
                </span>
              </motion.div>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              From mobile applications to web platforms,
              AI-powered chatbots to analytics dashboards - we
              transform your ideas into powerful digital
              solutions that drive business growth.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-[#3ecf8e] to-[#2bb377] hover:from-[#2bb377] hover:to-[#238a62] text-black font-bold px-10 py-4 text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#3ecf8e]/25 border-0 overflow-hidden"
                onClick={scrollToContact}
              >
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="group bg-transparent border-2 border-gray-600 hover:border-[#3ecf8e] text-white hover:text-[#3ecf8e] px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-[#3ecf8e]/5 backdrop-blur-sm"
                onClick={scrollToProjects}
              >
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats - Improved Mobile Layout */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left p-4 rounded-2xl"
              >
                <div className="w-16 h-16 sm:w-12 sm:h-12 bg-[#3ecf8e]/10 rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <stat.icon className="h-8 w-8 sm:h-6 sm:w-6 text-[#3ecf8e]" />
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="text-2xl sm:text-xl lg:text-2xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Icons Animation */}
          <div className="relative h-40 sm:h-48 lg:h-56 hidden lg:block overflow-hidden mb-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${Math.max(8, Math.min(85, 15 + index * 18))}%`,
                    top: `${Math.max(15, Math.min(85, 25 + Math.sin(index) * 25))}%`,
                  }}
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1c2128]/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 flex items-center justify-center hover:border-[#3ecf8e]/50 transition-all duration-300 cursor-pointer group">
                    <IconComponent
                      className={`w-6 h-6 sm:w-7 sm:h-7 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-8 sm:mt-12 pb-6"
          >
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider text-center">
              Trusted by innovative companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4 opacity-60 max-w-2xl mx-auto">
              {[
                "TechCorp",
                "InnovateLab",
                "DigitalFlow",
                "FutureVision",
                "CloudTech",
              ].map((company, index) => (
                <div
                  key={index}
                  className="text-gray-400 font-semibold text-xs sm:text-sm lg:text-base px-2 py-1"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}