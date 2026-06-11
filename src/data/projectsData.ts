export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tech: string[];
  image: string;
  screenshots: string[];
  keyFeatures: string[];
  demoUrl: string;
  githubUrl: string;
  client: string;
  duration: string;
  teamSize: number;
  projectGrowth: {
    userGrowth: string;
    performanceImprovement: string;
    businessImpact: string;
    metrics: {
      label: string;
      value: string;
    }[];
  };
  challenges: string[];
  solutions: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
}

// Create diverse image collections for each category
const mobileAppImages = [
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&h=600&fit=crop'
];

const webAppImages = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop'
];

const aiImages = [
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop'
];

const analyticsImages = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1537884944318-390069bb8665?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop'
];

const ecommerceImages = [
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1515378791036-0648a814c963?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1555868931-5255d5de5b9f?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1556742400-b6803c8d3075?w=800&h=600&fit=crop'
];

const communicationImages = [
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop'
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'HealthCare Mobile App',
    description: 'A comprehensive healthcare management app with appointment scheduling, medical records, and telemedicine features. Built for iOS and Android with real-time synchronization.',
    category: 'mobile',
    tech: ['React Native', 'Firebase', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS S3'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop'
    ],
    keyFeatures: [
      'Real-time appointment scheduling',
      'Secure medical records storage',
      'Video consultation integration',
      'Push notifications for reminders',
      'Multi-language support',
      'Offline data synchronization'
    ],
    demoUrl: 'https://demo.healthcare-app.com',
    githubUrl: 'https://github.com/veloriatech/healthcare-app',
    client: 'HealthTech Solutions',
    duration: '8 months',
    teamSize: 6,
    projectGrowth: {
      userGrowth: '300% increase in user engagement',
      performanceImprovement: '40% faster load times',
      businessImpact: '$2M revenue increase in first year',
      metrics: [
        { label: 'Active Users', value: '50K+' },
        { label: 'App Store Rating', value: '4.8/5' },
        { label: 'Consultation Completion Rate', value: '95%' },
        { label: 'User Retention', value: '85%' }
      ]
    },
    challenges: [
      'HIPAA compliance requirements',
      'Real-time video quality optimization',
      'Cross-platform synchronization'
    ],
    solutions: [
      'Implemented end-to-end encryption',
      'Used adaptive bitrate streaming',
      'Built robust offline-first architecture'
    ],
    testimonial: {
      text: 'Veloria Tech delivered our mobile healthcare app ahead of schedule. The quality of work and attention to detail was exceptional.',
      author: 'Sarah Johnson',
      position: 'CEO, HealthTech Solutions'
    }
  },
  {
    id: 2,
    title: 'E-learning Platform',
    description: 'Interactive online learning platform with video streaming, quizzes, progress tracking, and gamification elements for enhanced student engagement.',
    category: 'web',
    tech: ['React', 'Next.js', 'PostgreSQL', 'Redis', 'AWS CloudFront', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1513475382063-d5b67e7ef9d0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop'
    ],
    keyFeatures: [
      'HD video streaming with adaptive quality',
      'Interactive quizzes and assessments',
      'Progress tracking and analytics',
      'Discussion forums and collaboration',
      'Certificate generation',
      'Mobile-responsive design'
    ],
    demoUrl: 'https://demo.edulearn-platform.com',
    githubUrl: 'https://github.com/veloriatech/edulearn-platform',
    client: 'EduLearn',
    duration: '10 months',
    teamSize: 8,
    projectGrowth: {
      userGrowth: '500% increase in course completions',
      performanceImprovement: '60% reduction in page load times',
      businessImpact: '$5M in course sales within 6 months',
      metrics: [
        { label: 'Registered Students', value: '100K+' },
        { label: 'Course Completion Rate', value: '92%' },
        { label: 'Instructor Satisfaction', value: '4.9/5' },
        { label: 'Platform Uptime', value: '99.9%' }
      ]
    },
    challenges: [
      'Scalable video delivery',
      'Real-time collaboration features',
      'Complex assessment engine'
    ],
    solutions: [
      'Implemented CDN with edge caching',
      'Built WebSocket-based real-time features',
      'Created flexible assessment framework'
    ]
  },
  {
    id: 3,
    title: 'AI Customer Support Bot',
    description: 'Intelligent chatbot with natural language processing for automated customer support, featuring sentiment analysis and multi-language support.',
    category: 'ai',
    tech: ['Python', 'TensorFlow', 'OpenAI API', 'FastAPI', 'MongoDB', 'Docker'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?w=800&h=600&fit=crop'
    ],
    keyFeatures: [
      'Natural language understanding',
      'Sentiment analysis and mood detection',
      'Multi-language support (15+ languages)',
      'Integration with CRM systems',
      'Escalation to human agents',
      'Analytics and reporting dashboard'
    ],
    demoUrl: 'https://demo.ai-support-bot.com',
    githubUrl: 'https://github.com/veloriatech/ai-support-bot',
    client: 'TechSupport Inc',
    duration: '6 months',
    teamSize: 5,
    projectGrowth: {
      userGrowth: '200% increase in customer satisfaction',
      performanceImprovement: '80% reduction in response time',
      businessImpact: '70% reduction in support costs',
      metrics: [
        { label: 'Queries Resolved', value: '1M+' },
        { label: 'Accuracy Rate', value: '94%' },
        { label: 'Cost Savings', value: '$500K/year' },
        { label: 'Response Time', value: '<2 seconds' }
      ]
    },
    challenges: [
      'Understanding context and intent',
      'Handling complex queries',
      'Multi-language accuracy'
    ],
    solutions: [
      'Implemented advanced NLP models',
      'Created intelligent query routing',
      'Built custom language models'
    ]
  },
  {
    id: 4,
    title: 'Sales Analytics Dashboard',
    description: 'Real-time sales analytics dashboard with advanced reporting, data visualization, and predictive analytics for business intelligence.',
    category: 'analytics',
    tech: ['React', 'D3.js', 'MongoDB', 'Apache Kafka', 'Python', 'Tableau'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&h=600&fit=crop'
    ],
    keyFeatures: [
      'Real-time data visualization',
      'Predictive analytics and forecasting',
      'Custom report generation',
      'Interactive charts and graphs',
      'Team performance tracking',
      'Export capabilities (PDF, Excel)'
    ],
    demoUrl: 'https://demo.sales-analytics.com',
    githubUrl: 'https://github.com/veloriatech/sales-analytics',
    client: 'SalesForce Pro',
    duration: '5 months',
    teamSize: 4,
    projectGrowth: {
      userGrowth: '150% improvement in decision making speed',
      performanceImprovement: '90% faster report generation',
      businessImpact: '25% increase in sales efficiency',
      metrics: [
        { label: 'Data Points Processed', value: '10M+' },
        { label: 'Reports Generated', value: '50K+' },
        { label: 'User Adoption Rate', value: '98%' },
        { label: 'Data Accuracy', value: '99.5%' }
      ]
    },
    challenges: [
      'Real-time data processing',
      'Complex visualization requirements',
      'Performance optimization'
    ],
    solutions: [
      'Implemented streaming data pipeline',
      'Used optimized D3.js visualizations',
      'Built efficient caching layer'
    ]
  },
  {
    id: 5,
    title: 'Fashion E-commerce Store',
    description: 'Modern e-commerce platform with AR try-on features, integrated payment gateway, inventory management, and social commerce capabilities.',
    category: 'ecommerce',
    tech: ['Vue.js', 'Stripe', 'AWS', 'Redis', 'Elasticsearch', 'AR.js'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=600&fit=crop'
    ],
    keyFeatures: [
      'AR virtual try-on experience',
      'AI-powered product recommendations',
      'Social commerce integration',
      'Multi-vendor marketplace',
      'Advanced search and filtering',
      'Wishlist and comparison tools'
    ],
    demoUrl: 'https://demo.fashion-store.com',
    githubUrl: 'https://github.com/veloriatech/fashion-store',
    client: 'Fashion Forward',
    duration: '12 months',
    teamSize: 10,
    projectGrowth: {
      userGrowth: '400% increase in conversion rate',
      performanceImprovement: '50% reduction in return rate',
      businessImpact: '$10M in sales within 8 months',
      metrics: [
        { label: 'Monthly Orders', value: '25K+' },
        { label: 'Conversion Rate', value: '8.5%' },
        { label: 'AR Feature Usage', value: '65%' },
        { label: 'Customer Satisfaction', value: '4.7/5' }
      ]
    },
    challenges: [
      'AR integration complexity',
      'Scalable payment processing',
      'Inventory synchronization'
    ],
    solutions: [
      'Built custom AR framework',
      'Implemented distributed payment system',
      'Created real-time inventory updates'
    ]
  },
  {
    id: 6,
    title: 'Team Collaboration Tool',
    description: 'Real-time team collaboration platform with video conferencing, file sharing, project management, and integrated communication tools.',
    category: 'communication',
    tech: ['React', 'Socket.io', 'WebRTC', 'MongoDB', 'AWS S3', 'Electron'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop'
    ],
    keyFeatures: [
      'HD video conferencing for up to 100 participants',
      'Real-time document collaboration',
      'Project management with Kanban boards',
      'Screen sharing and remote control',
      'Integrated chat and messaging',
      'Calendar and scheduling integration'
    ],
    demoUrl: 'https://demo.team-collab.com',
    githubUrl: 'https://github.com/veloriatech/team-collab',
    client: 'ConnectSpace',
    duration: '9 months',
    teamSize: 7,
    projectGrowth: {
      userGrowth: '600% increase in team productivity',
      performanceImprovement: '30% faster project completion',
      businessImpact: 'Enabled remote work for 10K+ employees',
      metrics: [
        { label: 'Active Teams', value: '5K+' },
        { label: 'Video Calls/Day', value: '15K+' },
        { label: 'File Shares/Month', value: '500K+' },
        { label: 'Uptime', value: '99.95%' }
      ]
    },
    challenges: [
      'Real-time synchronization at scale',
      'Cross-platform compatibility',
      'Video quality optimization'
    ],
    solutions: [
      'Implemented operational transformation',
      'Used Electron for desktop apps',
      'Built adaptive video streaming'
    ]
  }
];

// Generate additional projects with diverse images
const generateAdditionalProjects = (): Project[] => {
  const categories = ['web', 'mobile', 'ai', 'analytics', 'ecommerce', 'communication'];
  const techStacks = [
    ['React', 'Node.js', 'MongoDB'],
    ['Vue.js', 'Express', 'PostgreSQL'],
    ['Angular', 'NestJS', 'MySQL'],
    ['React Native', 'Firebase', 'AWS'],
    ['Flutter', 'Django', 'Redis'],
    ['Python', 'FastAPI', 'TensorFlow']
  ];

  const imageCollections: { [key: string]: string[] } = {
    web: webAppImages,
    mobile: mobileAppImages,
    ai: aiImages,
    analytics: analyticsImages,
    ecommerce: ecommerceImages,
    communication: communicationImages
  };
  
  const projects: Project[] = [];
  
  for (let i = 7; i <= 50; i++) {
    const category = categories[i % categories.length];
    const tech = techStacks[i % techStacks.length];
    const images = imageCollections[category];
    const imageIndex = (i - 7) % images.length; // Ensure we cycle through all images
    
    projects.push({
      id: i,
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Solution ${i}`,
      description: `Advanced ${category} solution with cutting-edge technology and innovative features designed for modern business needs. This project demonstrates our expertise in delivering scalable, user-friendly applications.`,
      category,
      tech,
      image: images[imageIndex],
      screenshots: [
        images[imageIndex],
        images[(imageIndex + 1) % images.length],
        images[(imageIndex + 2) % images.length]
      ],
      keyFeatures: [
        'Advanced functionality and user experience',
        'Scalable architecture for growth',
        'User-friendly interface design',
        'Real-time updates and notifications',
        'Security and data protection',
        'Cross-platform compatibility'
      ],
      demoUrl: `https://demo.project-${i}.com`,
      githubUrl: `https://github.com/veloriatech/project-${i}`,
      client: `Client ${i}`,
      duration: `${Math.floor(Math.random() * 12) + 3} months`,
      teamSize: Math.floor(Math.random() * 8) + 3,
      projectGrowth: {
        userGrowth: `${100 + Math.floor(Math.random() * 400)}% increase in user engagement`,
        performanceImprovement: `${20 + Math.floor(Math.random() * 60)}% performance improvement`,
        businessImpact: `$${Math.floor(Math.random() * 10) + 1}M business impact`,
        metrics: [
          { label: 'Users', value: `${Math.floor(Math.random() * 100) + 10}K+` },
          { label: 'Success Rate', value: `${85 + Math.floor(Math.random() * 15)}%` },
          { label: 'Satisfaction', value: `${(4.0 + Math.random() * 1.0).toFixed(1)}/5` },
          { label: 'ROI', value: `${200 + Math.floor(Math.random() * 300)}%` }
        ]
      },
      challenges: [
        'Technical complexity and scalability',
        'User experience optimization',
        'Performance and security requirements'
      ],
      solutions: [
        'Innovative architecture design and implementation',
        'User-centered design approach',
        'Comprehensive testing and optimization'
      ]
    });
  }
  
  return projects;
};

// Final projects array with 50 projects
export const finalProjectsData = [...projectsData, ...generateAdditionalProjects()];