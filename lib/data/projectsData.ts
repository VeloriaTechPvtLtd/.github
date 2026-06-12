export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  tech: string[];
  image: string;
  heroImage?: string;
  screenshots: string[];
  keyFeatures: string[];
  demoUrl: string;
  githubUrl: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  client: string;
  role?: string;
  country?: string;
  duration: string;
  teamSize: number;
  impact?: string;
  projectGrowth: {
    userGrowth: string;
    performanceImprovement: string;
    businessImpact: string;
    metrics: { label: string; value: string; }[];
  };
  challenges: string[];
  solutions: string[];
  testimonial?: { text: string; author: string; position: string; };
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: 'richie',
    title: 'Richie',
    subtitle: 'AI-Powered Financial Learning & Advisory Platform',
    description: 'Richie Solution is an AI-driven mobile platform designed to simplify financial learning and investment decision-making for retail investors. The platform combines AI-powered assistance with structured educational content such as courses, live mentorship sessions, and expert advisory programs. Many beginner and intermediate investors struggle to understand financial markets, trading strategies, and risk management. Educational content is often scattered across different platforms, and users have difficulty finding reliable, structured guidance. To address this, Richie Solution integrates an intelligent AI assistant that answers frequently asked questions, provides contextual explanations about financial concepts, and guides users toward relevant courses, live mentorship sessions, and advisory services. The goal of the platform is to create a centralized ecosystem where users can learn, ask questions, receive expert guidance, and continuously improve their investment knowledge.',
    category: 'ai',
    tech: ['Flutter', 'Node.js', 'React.js', 'MongoDB', 'AI', 'Mobile: Flutter, Dart', 'Backend: Supabase', 'AI Integration: LLM-based FAQ assistant with structured knowledge base', 'Database: PostgreSQL (Supabase)', 'Architecture: Clean Architecture with modular feature structure', 'State Management: BLoC'],
    image: '/assets/icons/richie/feature.png',
    screenshots: [
      '/assets/icons/richie/1.png',
      '/assets/icons/richie/2.png',
      '/assets/icons/richie/3.png',
      '/assets/icons/richie/4.png',
      '/assets/icons/richie/5.png',
      '/assets/icons/richie/6.png',
    ],
    keyFeatures: ['AI-powered FAQ assistant for financial queries.', 'Intelligent recommendation of courses based on user questions.', 'Live mentorship sessions with financial experts.', 'Advisory programs for guided learning and strategy discussions.', 'Structured financial learning modules for beginners and intermediate investors.', 'Interactive mobile-first learning experience.', 'Secure backend infrastructure for managing educational content and user data.'],
    demoUrl: 'https://play.google.com/store/apps/details?id=com.chasealpha.richie',
    githubUrl: 'https://apps.apple.com/in/app/richie-stocks-options-app/id1659006578',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.chasealpha.richie',
    appStoreUrl: 'https://apps.apple.com/in/app/richie-stocks-options-app/id1659006578',
    client: 'Chase Alpha Private Limited',
    role: 'Tech Lead · End-to-End Ownership',
    country: 'India / Global Users',
    duration: 'Production',
    teamSize: 1,
    impact: 'The platform significantly improved accessibility to financial education by combining AI assistance with structured learning resources. Key outcomes include: faster access to financial knowledge through AI-powered query responses, reduced dependency on manual support for common user questions, increased user engagement through guided learning pathways, and improved accessibility to mentorship and advisory services. The AI assistant successfully handles a majority of user queries related to financial education topics, allowing users to quickly find relevant learning materials and expert guidance.',
    projectGrowth: {
      userGrowth: 'The platform significantly improved accessibility to financial education by combining AI assistance with structured learning resources',
      performanceImprovement: 'Scalable architecture supporting future expansion of learning modules.',
      businessImpact: 'The platform significantly improved accessibility to financial education by combining AI assistance with structured learning resources. Key outcomes include: faster access to financial knowledge through AI-powered query responses, reduced dependency on manual support for common user questions, increased user engagement through guided learning pathways, and improved accessibility to mentorship and advisory services. The AI assistant successfully handles a majority of user queries related to financial education topics, allowing users to quickly find relevant learning materials and expert guidance.',
      metrics: [
        { label: 'Market', value: 'India / Global Users' },
        { label: 'Category', value: 'AI-Powered Fintech Mobile Application' },
        { label: 'Role', value: 'Tech Lead' },
      ]
    },
    challenges: ['Retail investors often face multiple barriers when entering financial markets: difficulty understanding complex financial terminology and strategies, lack of structured and reliable learning resources, limited access to professional mentorship and advisory services, and information overload from fragmented sources across the internet.', 'The key challenge was building a system that could combine AI-powered assistance with structured financial education while maintaining a clean and intuitive user experience.', 'Another technical challenge involved designing an AI system capable of answering frequently asked questions, guiding users through financial concepts, and recommending appropriate courses or mentorship programs based on user queries.'],
    solutions: ['AI-powered FAQ assistant for financial queries.', 'Intelligent recommendation of courses based on user questions.', 'Live mentorship sessions with financial experts.', 'Advisory programs for guided learning and strategy discussions.', 'Structured financial learning modules for beginners and intermediate investors.', 'Interactive mobile-first learning experience.', 'Secure backend infrastructure for managing educational content and user data.'],
    testimonial: { text: 'The platform combines AI assistance with structured learning resources for retail investors.', author: 'Chase Alpha Private Limited', position: 'Client' },
  },
  {
    id: 2,
    slug: 'guidel',
    title: 'Guidel',
    subtitle: 'AI City & Travel Audio Guide',
    description: 'Guidel is an AI-powered mobile application that delivers personalized audio stories for cities, monuments, and cultural sites. Using GPT-4 and location services, it gives travelers context-aware historical and cultural content on demand, with offline support and multi-language options for a seamless experience worldwide.',
    category: 'ai',
    tech: ['Flutter', 'GPT-4', 'Google Maps', 'Firebase'],
    image: '/assets/icons/guidel/feature.png',
    screenshots: [
      '/assets/icons/guidel/1.png',
      '/assets/icons/guidel/2.png',
      '/assets/icons/guidel/3.png',
      '/assets/icons/guidel/4.png',
      '/assets/icons/guidel/5.png',
      '/assets/icons/guidel/6.png',
    ],
    keyFeatures: ['Context-aware GPT-4 audio generation.', 'Precision location-based monument detection.', 'Multi-language support (15+ languages).', 'Offline map and audio caching capabilities.', 'Personalized itinerary planning based on interests.', 'User-friendly audio interface for walking tours.'],
    demoUrl: 'https://play.google.com/store/apps/details?id=com.cityguide.guidel',
    githubUrl: 'https://apps.apple.com/us/app/guidel-ai-audio-city-guide/id6479697130',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.cityguide.guidel',
    appStoreUrl: 'https://apps.apple.com/us/app/guidel-ai-audio-city-guide/id6479697130',
    client: 'Guidel Travel',
    role: 'Lead Developer · AI Personalization',
    country: 'Global',
    duration: 'Production',
    teamSize: 1,
    impact: 'Guidel was featured in several travel publications and achieved over 50k downloads in its first month. User surveys indicated an 85% satisfaction rate with the AI\'s ability to provide niche historical facts that typical guides omit.',
    projectGrowth: {
      userGrowth: 'Guidel was featured in several travel publications and achieved over 50k downloads in its first month',
      performanceImprovement: 'Context-aware GPT-4 audio generation.',
      businessImpact: 'Guidel was featured in several travel publications and achieved over 50k downloads in its first month. User surveys indicated an 85% satisfaction rate with the AI\'s ability to provide niche historical facts that typical guides omit.',
      metrics: [
        { label: 'Market', value: 'Global' },
        { label: 'Category', value: 'Mobile/AI Development' },
        { label: 'Role', value: 'Lead Developer' },
      ]
    },
    challenges: ['Travelers often miss out on the rich history and cultural context of the places they visit because traditional audio guides are static, expensive, or boring.', 'The challenge was to create a dynamic, AI-powered guide that translates any monument into a personalized audio story.'],
    solutions: ['Context-aware GPT-4 audio generation.', 'Precision location-based monument detection.', 'Multi-language support (15+ languages).', 'Offline map and audio caching capabilities.', 'Personalized itinerary planning based on interests.', 'User-friendly audio interface for walking tours.'],
    testimonial: { text: 'Guidel makes me feel like I have a personal historian in my pocket. The AI stories are remarkably accurate and engaging.', author: 'Sarah Jenkins', position: 'Travel Blogger' },
  },
  {
    id: 3,
    slug: 'shiftbookd',
    title: 'ShiftBOOKD',
    subtitle: 'Native iOS Appointment Booking App',
    description: 'Appointment scheduling platform for beauty and hair professionals with service management and payments.',
    category: 'mobile',
    tech: ['Swift', 'UIKit', 'Core Data', 'REST APIs'],
    image: '/assets/icons/shiftbookd/feature.png',
    screenshots: [
      '/assets/icons/shiftbookd/1.png',
      '/assets/icons/shiftbookd/2.png',
      '/assets/icons/shiftbookd/3.png',
      '/assets/icons/shiftbookd/4.png',
      '/assets/icons/shiftbookd/5.png',
      '/assets/icons/shiftbookd/6.png',
      '/assets/icons/shiftbookd/7.png',
    ],
    keyFeatures: ['Native Swift/UIKit performance optimization.', 'Real-time booking and calendar management.', 'Integrated secure payment processing.', 'Personalized professional profile galleries.', 'Push notifications for appointment reminders.', 'Core Data for responsive offline access.'],
    demoUrl: 'https://apps.apple.com/us/app/shiftbookd/id1507908655',
    githubUrl: '',
    appStoreUrl: 'https://apps.apple.com/us/app/shiftbookd/id1507908655',
    client: 'ShiftBOOKD Platform',
    role: 'iOS Front-End Developer',
    country: 'United States',
    duration: 'Production',
    teamSize: 1,
    impact: 'ShiftBOOKD helped professionals reduce administrative time by 60% and increased repeat bookings by 30%. The platform became a top choice for independent barbers and stylists in major US cities.',
    projectGrowth: {
      userGrowth: 'ShiftBOOKD helped professionals reduce administrative time by 60% and increased repeat bookings by 30%',
      performanceImprovement: 'Native Swift/UIKit performance optimization.',
      businessImpact: 'ShiftBOOKD helped professionals reduce administrative time by 60% and increased repeat bookings by 30%. The platform became a top choice for independent barbers and stylists in major US cities.',
      metrics: [
        { label: 'Market', value: 'United States' },
        { label: 'Category', value: 'iOS Development' },
        { label: 'Role', value: 'iOS Front-End Developer' },
      ]
    },
    challenges: ['Professionals in the beauty and barber industry often lose time managing appointments manually via phone or social media.', 'They needed a robust, native iOS platform to handle bookings, service listings, payments, and client communications efficiently.'],
    solutions: ['Native Swift/UIKit performance optimization.', 'Real-time booking and calendar management.', 'Integrated secure payment processing.', 'Personalized professional profile galleries.', 'Push notifications for appointment reminders.', 'Core Data for responsive offline access.'],
    testimonial: { text: 'This app changed my business. I no longer spend hours on DMs trying to schedule clients. It\'s seamless and fast.', author: 'Marcus Thorne', position: 'Master Barber' },
  },
  {
    id: 4,
    slug: 'evexia',
    title: 'Evexia',
    subtitle: 'Health Monitoring & Subscription App',
    description: 'Health and wellness application with activity tracking, analytics dashboards, and auto-renewable subscriptions.',
    category: 'mobile',
    tech: ['Flutter', 'Charts', 'In-App Purchases', 'Notifications'],
    image: '/assets/icons/evexia/feature.png',
    screenshots: [
      '/assets/icons/evexia/1.png',
      '/assets/icons/evexia/2.png',
      '/assets/icons/evexia/3.png',
      '/assets/icons/evexia/4.png',
      '/assets/icons/evexia/5.png',
      '/assets/icons/evexia/6.png',
    ],
    keyFeatures: ['Deep health sensor data normalization.', 'Interactive health trend charting.', 'Auto-renewable subscription implementation.', 'Automated personalized health alerts.', 'Secure encrypted health data storage.', 'Doctor-shareable PDF health reports.'],
    demoUrl: '',
    githubUrl: '',
    client: 'Evexia Health',
    role: 'Lead Developer · Architecture & Subscriptions',
    country: 'Europe',
    duration: 'Production',
    teamSize: 1,
    impact: 'Evexia successfully tracked over 1M health events within its first year. The subscription model achieved a 20% conversion rate from free trial to paid user, demonstrating the value of high-quality health monitoring.',
    projectGrowth: {
      userGrowth: 'Evexia successfully tracked over 1M health events within its first year',
      performanceImprovement: 'Deep health sensor data normalization.',
      businessImpact: 'Evexia successfully tracked over 1M health events within its first year. The subscription model achieved a 20% conversion rate from free trial to paid user, demonstrating the value of high-quality health monitoring.',
      metrics: [
        { label: 'Market', value: 'Europe' },
        { label: 'Category', value: 'Flutter Engineering' },
        { label: 'Role', value: 'Lead Developer' },
      ]
    },
    challenges: ['Chronic health conditions require constant monitoring, but existing apps are often either too clinical or too geared toward fitness.', 'Evexia needed a balanced platform that provides medical-grade monitoring with a consumer-friendly feel and a sustainable subscription model.'],
    solutions: ['Deep health sensor data normalization.', 'Interactive health trend charting.', 'Auto-renewable subscription implementation.', 'Automated personalized health alerts.', 'Secure encrypted health data storage.', 'Doctor-shareable PDF health reports.'],
    testimonial: { text: 'The architecture of Evexia is incredibly solid. Managing subscriptions and health data is complex, but the delivery was flawless.', author: 'Dr. Elena Rossi', position: 'Medical Consultant' },
  },
  {
    id: 5,
    slug: 'sit-back-and-relax',
    title: 'Sit Back & Relax',
    subtitle: 'Service Booking Platform (Ongoing)',
    description: 'Marketplace application connecting users with household service providers, featuring real-time chat and notifications.',
    category: 'mobile',
    tech: ['Flutter', 'Firebase', 'Real-Time Chat', 'APIs'],
    image: '/assets/icons/sitback/feature.png',
    screenshots: ['/assets/icons/sitback/feature.png'],
    keyFeatures: ['Real-time service provider matching.', 'In-app chat and negotiation engine.', 'High-trust vetting and review system.', 'Dynamic pricing based on service complexity.', 'Automated provider schedule management.', 'Secure escrow-like payment handling.'],
    demoUrl: '',
    githubUrl: '',
    
    
    client: 'SBR Marketplace',
    role: 'Front-End Lead · Booking & Messaging',
    country: 'India',
    duration: 'Ongoing',
    teamSize: 1,
    impact: 'Currently in beta, Sit Back & Relax has onboarded over 500 verified service providers and processed 2,000+ bookings with a 4.8 user rating on service quality.',
    projectGrowth: {
      userGrowth: 'Currently in beta, Sit Back & Relax has onboarded over 500 verified service providers and processed 2,000+ bookings with a 4',
      performanceImprovement: 'Real-time service provider matching.',
      businessImpact: 'Currently in beta, Sit Back & Relax has onboarded over 500 verified service providers and processed 2,000+ bookings with a 4.8 user rating on service quality.',
      metrics: [
        { label: 'Market', value: 'India' },
        { label: 'Category', value: 'Full-Stack Development' },
        { label: 'Role', value: 'Front-End Lead' },
      ]
    },
    challenges: ['Finding reliable household service providers (cleaners, plumbers, etc.) is a trust-heavy process prone to delays.', 'The goal was to build a real-time marketplace that handles discovery, chat, booking, and high-trust vetting in one app.'],
    solutions: ['Real-time service provider matching.', 'In-app chat and negotiation engine.', 'High-trust vetting and review system.', 'Dynamic pricing based on service complexity.', 'Automated provider schedule management.', 'Secure escrow-like payment handling.'],
    testimonial: { text: 'The real-time chat and booking flow are incredibly smooth. It\'s the most polished marketplace app I\'ve used in this sector.', author: 'Anil Kapoor', position: 'Operations Lead' },
  },
  {
    id: 6,
    slug: 'easy-chef-admin',
    title: 'Easy Chef Admin',
    subtitle: 'AI-Powered Content Automation (Web)',
    description: 'Internal admin platform that automates recipe extraction, AI content refinement, and image generation.',
    category: 'web',
    tech: ['React.js', 'Flutter Web', 'OpenAI', 'Automation'],
    image: '/assets/icons/easychef/feature.png',
    screenshots: ['/assets/icons/easychef/feature.png'],
    keyFeatures: ['AI recipe data extraction engine.', 'Automated SEO meta-data generation.', 'Image prompt engineering for DALL-E.', 'Collaborative editor for content teams.', 'Batch processing for legacy content.', 'Direct CMS sync (WordPress/Custom).'],
    demoUrl: '',
    githubUrl: '',
    
    
    client: 'Easy Chef Media',
    role: 'Lead Developer · AI Workflows',
    country: 'United Kingdom',
    duration: 'Production',
    teamSize: 1,
    impact: 'Content publishing time was reduced from 2 hours per recipe to just 15 minutes. The team achieved a 400% increase in output with the same headcount while staying within high SEO standards.',
    projectGrowth: {
      userGrowth: 'Content publishing time was reduced from 2 hours per recipe to just 15 minutes',
      performanceImprovement: 'AI recipe data extraction engine.',
      businessImpact: 'Content publishing time was reduced from 2 hours per recipe to just 15 minutes. The team achieved a 400% increase in output with the same headcount while staying within high SEO standards.',
      metrics: [
        { label: 'Market', value: 'United Kingdom' },
        { label: 'Category', value: 'Web & AI Engineering' },
        { label: 'Role', value: 'Lead Developer' },
      ]
    },
    challenges: ['Content teams tasked with publishing hundreds of recipes monthly were bogged down by manual data entry, tagging, and SEO refinement.', 'They needed an automated dashboard to extract and refine culinary data using AI.'],
    solutions: ['AI recipe data extraction engine.', 'Automated SEO meta-data generation.', 'Image prompt engineering for DALL-E.', 'Collaborative editor for content teams.', 'Batch processing for legacy content.', 'Direct CMS sync (WordPress/Custom).'],
    testimonial: { text: 'The automation we\'ve achieved with Easy Chef Admin is mind-blowing. Our productivity has skyrocketed.', author: 'James Wilson', position: 'Chief Content Officer' },
  },
  {
    id: 7,
    slug: 'sparks-dating-app',
    title: 'Sparks Dating App',
    subtitle: 'Dating & Connection Platform for Single Parents',
    description: 'Sparks is a dedicated dating and connection platform for single parents, built with Flutter and a Node.js backend. It offers secure profiles, intelligent match browsing, real-time chat, and ChatGPT-powered conversation starters to help users find meaningful relationships and friendships in a safe, inclusive environment.',
    category: 'communication',
    tech: ['Flutter', 'Node.js', 'ChatGPT', 'AWS', 'Real-Time Chat'],
    image: '/assets/icons/sparks/feature.png',
    screenshots: ['/assets/icons/sparks/feature.png'],
    keyFeatures: ['Flutter cross-platform app with smooth onboarding and profile creation.', 'Node.js REST API and real-time chat with WebSockets.', 'ChatGPT integration for icebreakers and compatibility suggestions.', 'AWS infrastructure: Lambda, S3, and recommendation algorithms.', 'Secure authentication and privacy controls for single-parent users.', 'Match browsing, filters, and in-app messaging.'],
    demoUrl: '',
    githubUrl: '',
    
    
    client: 'Sparks Dating',
    role: 'Full-Stack Lead · Mobile & Backend',
    country: 'United States',
    duration: 'Production',
    teamSize: 1,
    impact: 'Sparks Dating App provided single parents a dedicated space to connect, with strong engagement on profile completion and conversation rates. The AI-enhanced experience helped users find like-minded matches more efficiently.',
    projectGrowth: {
      userGrowth: 'Sparks Dating App provided single parents a dedicated space to connect, with strong engagement on profile completion and conversation rates',
      performanceImprovement: 'Flutter cross-platform app with smooth onboarding and profile creation.',
      businessImpact: 'Sparks Dating App provided single parents a dedicated space to connect, with strong engagement on profile completion and conversation rates. The AI-enhanced experience helped users find like-minded matches more efficiently.',
      metrics: [
        { label: 'Market', value: 'United States' },
        { label: 'Category', value: 'Mobile App Development' },
        { label: 'Role', value: 'Full-Stack Lead' },
      ]
    },
    challenges: ['Single parents often struggle to find dating platforms that understand their unique needs and schedules.', 'The goal was to build a secure, inclusive app where single parents could connect for relationships, friendships, and meaningful connections without the friction of generic dating apps.'],
    solutions: ['Flutter cross-platform app with smooth onboarding and profile creation.', 'Node.js REST API and real-time chat with WebSockets.', 'ChatGPT integration for icebreakers and compatibility suggestions.', 'AWS infrastructure: Lambda, S3, and recommendation algorithms.', 'Secure authentication and privacy controls for single-parent users.', 'Match browsing, filters, and in-app messaging.'],
    testimonial: { text: 'Building Sparks was about more than tech—it was about creating a safe, welcoming place for single parents to find connection. The team delivered exactly that.', author: 'Sparks Product Lead', position: 'Sparks Dating' },
  },
  {
    id: 8,
    slug: 'ai-crix',
    title: 'AI Crix',
    subtitle: 'AI Cricket Match Prediction Application',
    description: 'AI Crix is an ML-powered cricket application that analyzes match and historical data to deliver predictions and statistics in real time. The Flutter app is backed by Supabase and a Python/NumPy-based prediction model, giving cricket fans and analysts data-driven insights and a clear, responsive mobile experience.',
    category: 'ai',
    tech: ['Flutter', 'Supabase', 'Python', 'NumPy', 'ML'],
    image: '/assets/icons/aicrix/feature.png',
    screenshots: [
      '/assets/icons/aicrix/1.png',
      '/assets/icons/aicrix/2.png',
      '/assets/icons/aicrix/3.png',
      '/assets/icons/aicrix/4.png',
      '/assets/icons/aicrix/5.png',
      '/assets/icons/aicrix/6.png',
    ],
    keyFeatures: ['Flutter mobile app with scalable architecture and optimized UI for live results.', 'Supabase integration for authentication, database, and real-time sync.', 'Machine learning prediction model using Python and NumPy for cricket statistics.', 'APIs connecting the AI model outputs to the Flutter application.', 'Match statistics visualization and prediction history for users.', 'Optimized data fetching and UI updates for real-time prediction delivery.'],
    demoUrl: 'https://play.google.com/store/apps/details?id=com.veloria.aicrix',
    githubUrl: 'https://apps.apple.com/pk/app/aicrix-ai-cricket-predictions/id6759485224',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.veloria.aicrix',
    appStoreUrl: 'https://apps.apple.com/pk/app/aicrix-ai-cricket-predictions/id6759485224',
    client: 'AI Crix',
    role: 'Full-Stack · Mobile, Backend & AI Model',
    country: 'India',
    duration: 'Production',
    teamSize: 1,
    impact: 'AI Crix delivered ML-driven cricket predictions in a user-friendly mobile experience, with real-time synchronization and clear statistics visualization, enabling users to access data-backed match insights on the go.',
    projectGrowth: {
      userGrowth: 'AI Crix delivered ML-driven cricket predictions in a user-friendly mobile experience, with real-time synchronization and clear statistics visualization, enabling users to access data-backed match insights on the go',
      performanceImprovement: 'Flutter mobile app with scalable architecture and optimized UI for live results.',
      businessImpact: 'AI Crix delivered ML-driven cricket predictions in a user-friendly mobile experience, with real-time synchronization and clear statistics visualization, enabling users to access data-backed match insights on the go.',
      metrics: [
        { label: 'Market', value: 'India' },
        { label: 'Category', value: 'Mobile & ML Engineering' },
        { label: 'Role', value: 'Full-Stack' },
      ]
    },
    challenges: ['Cricket fans and analysts needed a reliable way to get data-driven match predictions.', 'The challenge was to build an ML-powered system that processes historical cricket statistics and surfaces predictions in a fast, real-time mobile experience.'],
    solutions: ['Flutter mobile app with scalable architecture and optimized UI for live results.', 'Supabase integration for authentication, database, and real-time sync.', 'Machine learning prediction model using Python and NumPy for cricket statistics.', 'APIs connecting the AI model outputs to the Flutter application.', 'Match statistics visualization and prediction history for users.', 'Optimized data fetching and UI updates for real-time prediction delivery.'],
    testimonial: { text: 'The combination of Flutter, Supabase, and the custom ML model made AI Crix both powerful and easy to use. Predictions feel grounded in real data.', author: 'AI Crix Team', position: 'Product' },
  }
];

export const finalProjectsData: Project[] = projectsData;
