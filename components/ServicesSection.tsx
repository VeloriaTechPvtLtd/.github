"use client";

import { useState } from "react";
import {
  Smartphone,
  Globe,
  Bot,
  BarChart3,
  Cloud,
  Shield,
  ArrowRight,
  Brain,
  Search,
  Sparkles,
  Workflow,
  Link2,
  Zap,
  PenTool,
  FileText,
  Layout,
  BookOpen,
  Calendar,
  Users,
  Megaphone,
  Video,
  Film,
  Clapperboard,
  Scissors,
  Target,
  Mail,
  TrendingUp,
  MousePointerClick,
  LineChart,
  PieChart,
  Activity,
} from "lucide-react";

type TabId =
  | "mobile"
  | "web"
  | "ai"
  | "automation"
  | "cloud"
  | "content"
  | "social"
  | "video"
  | "marketing"
  | "analytics";

const tabs: { id: TabId; label: string }[] = [
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
  { id: "ai", label: "AI" },
  { id: "automation", label: "Automation" },
  { id: "cloud", label: "Cloud & Security" },
  { id: "content", label: "Content Creation" },
  { id: "social", label: "Social Media" },
  { id: "video", label: "Video Editing" },
  { id: "marketing", label: "Digital Marketing" },
  { id: "analytics", label: "Analytics" },
];

const tabContent: Record<
  TabId,
  {
    title: string;
    description: string;
    items: { icon: typeof Smartphone; name: string; desc: string }[];
  }
> = {
  mobile: {
    title: "Mobile App Development",
    description:
      "Native iOS and Android apps with cross-platform capabilities using Flutter and React Native.",
    items: [
      { icon: Smartphone, name: "iOS Development", desc: "Swift & SwiftUI apps optimized for App Store." },
      { icon: Smartphone, name: "Android Development", desc: "Kotlin & Jetpack Compose for Play Store." },
      { icon: Smartphone, name: "Cross-Platform", desc: "Single codebase with Flutter or React Native." },
      { icon: Smartphone, name: "App Store Optimization", desc: "Launch, iterate, and grow your user base." },
    ],
  },
  web: {
    title: "Web Applications",
    description:
      "Responsive web apps using modern frameworks — React, Next.js, and Vue.js.",
    items: [
      { icon: Globe, name: "Responsive Design", desc: "Pixel-perfect layouts across all devices." },
      { icon: Globe, name: "Progressive Web Apps", desc: "Offline-capable, installable web experiences." },
      { icon: Globe, name: "Modern Frameworks", desc: "React, Next.js, Vue — production-grade stacks." },
      { icon: Globe, name: "SEO Optimized", desc: "Server-side rendering and performance tuning." },
    ],
  },
  ai: {
    title: "AI & Machine Learning",
    description:
      "Custom AI solutions — from conversational agents and NLP to RAG pipelines, fine-tuning, and production ML.",
    items: [
      { icon: Bot, name: "Rasa Chatbots", desc: "Open-source conversational AI with NLU and dialogue management." },
      { icon: Brain, name: "Natural Language Processing", desc: "Text analysis, summarization, and entity extraction." },
      { icon: Search, name: "RAG Systems", desc: "Retrieval-augmented generation for domain-specific knowledge." },
      { icon: Sparkles, name: "Model Fine-Tuning", desc: "Customize LLMs on your data for higher accuracy." },
    ],
  },
  automation: {
    title: "Automation",
    description:
      "Streamline operations with workflow automation, system integrations, and event-driven pipelines.",
    items: [
      { icon: Workflow, name: "Workflow Automation", desc: "Orchestrate multi-step processes across teams and tools." },
      { icon: Workflow, name: "n8n Workflow Automation", desc: "Self-hosted, node-based pipelines for APIs, webhooks, and AI steps." },
      { icon: Zap, name: "Zapier Integrations", desc: "No-code Zaps that sync CRMs, billing, support, and 5,000+ SaaS apps." },
      { icon: Link2, name: "API Integrations", desc: "Connect CRMs, ERPs, and SaaS into unified workflows." },
    ],
  },
  cloud: {
    title: "Cloud & Security",
    description:
      "Scalable infrastructure on AWS, Azure, and GCP with enterprise-grade security.",
    items: [
      { icon: Cloud, name: "Cloud Migration", desc: "Move workloads to the cloud with zero downtime." },
      { icon: Cloud, name: "DevOps & CI/CD", desc: "Automated pipelines for faster releases." },
      { icon: Shield, name: "Security Audits", desc: "Penetration testing and compliance reviews." },
      { icon: Shield, name: "Data Protection", desc: "Encryption, access control, and monitoring." },
    ],
  },
  content: {
    title: "Content Creation",
    description:
      "Compelling copy and content that drives engagement — from blogs and UI microcopy to product storytelling and SEO.",
    items: [
      { icon: PenTool, name: "Blog & Copywriting", desc: "Thought-leadership articles, landing pages, and conversion-focused copy." },
      { icon: Layout, name: "UI & Product Content", desc: "In-app labels, onboarding flows, and microcopy for Flutter and web products." },
      { icon: BookOpen, name: "Product Storytelling", desc: "Case studies, release notes, and narratives that showcase your product value." },
      { icon: FileText, name: "SEO Content", desc: "Keyword-driven pages and content clusters that rank and convert." },
    ],
  },
  social: {
    title: "Social Media Management",
    description:
      "End-to-end social presence — strategy, scheduling, community engagement, and paid campaigns across platforms.",
    items: [
      { icon: Target, name: "Social Strategy", desc: "Platform selection, content pillars, and audience growth roadmaps." },
      { icon: Calendar, name: "Content Scheduling", desc: "Editorial calendars and automated publishing across LinkedIn, X, and Instagram." },
      { icon: Users, name: "Community Management", desc: "Real-time engagement, moderation, and brand voice consistency." },
      { icon: Megaphone, name: "Paid Social Campaigns", desc: "Targeted ads on Meta, LinkedIn, and TikTok with ROI tracking." },
    ],
  },
  video: {
    title: "Video Editing",
    description:
      "Professional video production for product demos, social reels, motion graphics, and polished post-production.",
    items: [
      { icon: Video, name: "Product Demos", desc: "Screen recordings and walkthroughs that showcase features and onboarding." },
      { icon: Film, name: "Social Reels & Shorts", desc: "Vertical video optimized for Instagram, TikTok, and YouTube Shorts." },
      { icon: Clapperboard, name: "Motion Graphics", desc: "Animated intros, lower thirds, and branded overlays for polished content." },
      { icon: Scissors, name: "Post-Production", desc: "Color grading, audio mixing, subtitles, and export for every platform." },
    ],
  },
  marketing: {
    title: "Digital Marketing",
    description:
      "Full-funnel marketing — SEO, paid search, email campaigns, and conversion optimization to grow your user base.",
    items: [
      { icon: Search, name: "Search Engine Optimization", desc: "Technical SEO, on-page optimization, and link-building strategies." },
      { icon: MousePointerClick, name: "PPC & Paid Search", desc: "Google Ads and display campaigns with continuous bid optimization." },
      { icon: Mail, name: "Email Campaigns", desc: "Drip sequences, newsletters, and lifecycle emails that nurture leads." },
      { icon: TrendingUp, name: "Conversion Optimization", desc: "A/B testing, funnel analysis, and landing page improvements." },
    ],
  },
  analytics: {
    title: "Analytics & Insights",
    description:
      "Data-driven decisions with analytics setup, custom dashboards, product metrics, and multi-touch attribution.",
    items: [
      { icon: BarChart3, name: "Google Analytics Setup", desc: "GA4 implementation, event tracking, and conversion goal configuration." },
      { icon: LineChart, name: "Custom Dashboards", desc: "Real-time KPI dashboards in Looker, Metabase, or Grafana." },
      { icon: PieChart, name: "Product Analytics", desc: "User behavior, retention cohorts, and feature adoption with Mixpanel or Amplitude." },
      { icon: Activity, name: "Attribution Tracking", desc: "Multi-touch attribution across channels to measure true campaign ROI." },
    ],
  },
};

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<TabId>("mobile");
  const content = tabContent[activeTab];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-24 bg-secondary home-scroll-section" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="t-section-title mb-4">Full-stack development</h2>
          <p className="t-section-desc">
            Powering every step of your product journey — from idea to App Store
            launch and beyond.
          </p>
        </div>

        <div className="flex gap-2 mb-10 pb-4 border-b border-border/80 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`together-tab shrink-0 ${activeTab === tab.id ? "together-tab-active" : "together-tab-inactive"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="transition-opacity duration-300">
            <h3 className="t-card-title mb-4">{content.title}</h3>
            <p className="t-body text-body-lg mb-8">{content.description}</p>
            <button onClick={scrollToContact} className="t-link">
              Learn more
              <ArrowRight className="t-link-arrow h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {content.items.map((item) => (
              <div key={item.name} className="together-card p-5 group cursor-default">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center mb-3 group-hover:bg-brand-purple/15 transition-colors duration-300">
                  <item.icon className="w-4 h-4 text-foreground" strokeWidth={1.75} />
                </div>
                <h4 className="text-body-sm font-medium text-foreground mb-1 tracking-snug">
                  {item.name}
                </h4>
                <p className="text-body-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
