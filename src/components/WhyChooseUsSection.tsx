import {
  Clock,
  Shield,
  Users,
  Award,
  Zap,
  HeartHandshake,
  CheckCircle,
  Star,
} from "lucide-react";

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "We pride ourselves on delivering projects on schedule without compromising quality.",
      stat: "95%",
      statLabel: "On-time delivery rate",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "We implement industry-leading security practices to protect your data and users.",
      stat: "100%",
      statLabel: "Security compliance",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our team consists of experienced developers, designers, and project managers.",
      stat: "50+",
      statLabel: "Team members",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality assurance processes ensure bug-free applications.",
      stat: "99.9%",
      statLabel: "Bug-free delivery",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Zap,
      title: "Fast Development",
      description:
        "Agile development methodology ensures rapid prototyping and quick iterations.",
      stat: "40%",
      statLabel: "Faster than average",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: HeartHandshake,
      title: "Client-Focused",
      description:
        "We work closely with clients to understand their needs and exceed expectations.",
      stat: "100%",
      statLabel: "Client satisfaction",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const achievements = [
    {
      icon: CheckCircle,
      number: "50+",
      label: "Projects Completed",
    },
    { icon: Users, number: "50+", label: "Happy Clients" },
    { icon: Star, number: "5.0", label: "Average Rating" },
    { icon: Award, number: "3+", label: "Years Experience" },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#161b22]"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#3ecf8e] to-[#4fb883] bg-clip-text text-transparent">
              Veloria Tech?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed">
            We combine technical expertise with business acumen
            to deliver solutions that drive real results.
          </p>
        </div>

        {/* Achievements */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-4 transform-none transition-none"
              style={{ transform: 'none', transition: 'none' }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#3ecf8e] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transform-none" style={{ transform: 'none' }}>
                <achievement.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative bg-[#1c2128]/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 transform-none transition-none"
              style={{ transform: 'none', transition: 'none' }}
            >
              {/* Icon */}
              <div
                className="mb-4 sm:mb-6 transform-none"
                style={{ transform: 'none' }}
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center transform-none`}
                  style={{ transform: 'none' }}
                >
                  <reason.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                {reason.title}
              </h3>

              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {reason.description}
              </p>

              {/* Stat */}
              <div className="border-t border-gray-700 pt-3 sm:pt-4">
                <div className="text-xl sm:text-2xl font-bold text-[#3ecf8e] mb-1">
                  {reason.stat}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  {reason.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Our Development Process
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your requirements and goals",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Creating detailed project roadmap and timeline",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Building your solution with regular updates",
              },
              {
                step: "04",
                title: "Testing",
                description:
                  "Rigorous testing for quality assurance",
              },
              {
                step: "05",
                title: "Deployment",
                description: "Launch and ongoing support",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="text-center p-4 transform-none transition-none"
                style={{ transform: 'none', transition: 'none' }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#3ecf8e] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transform-none" style={{ transform: 'none' }}>
                  <span className="text-black font-bold text-sm sm:text-base md:text-lg">
                    {process.step}
                  </span>
                </div>
                <h4 className="text-white font-bold mb-2 text-sm sm:text-base">
                  {process.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}