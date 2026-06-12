"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Globe,
  Quote,
  Smartphone,
  Users,
} from 'lucide-react';
import { Project } from '@/lib/data/projectsData';
import {
  getProjectHeroImageClass,
  getProjectImageSrc,
  getScreenshotImageClass,
} from '@/lib/utils/projectImage';

interface ProjectDetailProps {
  project: Project;
}

type ContentTab = 'overview' | 'features' | 'impact';

const tabs: { id: ContentTab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'impact', label: 'Impact' },
];

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [activeTab, setActiveTab] = useState<ContentTab>('overview');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(project.screenshots.length > 1);
  const screenshotScrollRef = useRef<HTMLDivElement>(null);
  const screenshotScrollAnimationRef = useRef<number | null>(null);
  const heroSrc = getProjectImageSrc(project.image);

  const getSlideScrollPositions = useCallback((container: HTMLDivElement) => {
    const slides = Array.from(
      container.querySelectorAll<HTMLElement>('[data-screenshot-slide]')
    );
    const containerLeft = container.getBoundingClientRect().left;

    return slides.map(
      (slide) => slide.getBoundingClientRect().left - containerLeft + container.scrollLeft
    );
  }, []);

  const updateScreenshotScrollState = useCallback(() => {
    const container = screenshotScrollRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const scrollLeft = container.scrollLeft;

    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    const container = screenshotScrollRef.current;
    if (!container || project.screenshots.length < 2) return;

    const scheduleUpdate = () => {
      requestAnimationFrame(() => updateScreenshotScrollState());
    };

    scheduleUpdate();

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(container);
    const track = container.querySelector('.project-screenshot-track');
    if (track) resizeObserver.observe(track);

    container.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      resizeObserver.disconnect();
      container.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (screenshotScrollAnimationRef.current !== null) {
        cancelAnimationFrame(screenshotScrollAnimationRef.current);
      }
    };
  }, [project.screenshots.length, updateScreenshotScrollState]);

  const smoothScrollTo = useCallback(
    (container: HTMLDivElement, targetLeft: number) => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const clampedTarget = Math.max(0, Math.min(targetLeft, maxScroll));

      if (screenshotScrollAnimationRef.current !== null) {
        cancelAnimationFrame(screenshotScrollAnimationRef.current);
        screenshotScrollAnimationRef.current = null;
      }

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion || Math.abs(container.scrollLeft - clampedTarget) < 1) {
        container.scrollLeft = clampedTarget;
        updateScreenshotScrollState();
        return;
      }

      const startLeft = container.scrollLeft;
      const distance = clampedTarget - startLeft;
      const duration = 480;
      const startTime = performance.now();
      const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        container.scrollLeft = startLeft + distance * easeOutCubic(progress);
        updateScreenshotScrollState();

        if (progress < 1) {
          screenshotScrollAnimationRef.current = requestAnimationFrame(animate);
        } else {
          container.scrollLeft = clampedTarget;
          screenshotScrollAnimationRef.current = null;
          updateScreenshotScrollState();
        }
      };

      screenshotScrollAnimationRef.current = requestAnimationFrame(animate);
    },
    [updateScreenshotScrollState]
  );

  const scrollScreenshots = (direction: 'left' | 'right') => {
    const container = screenshotScrollRef.current;
    if (!container) return;

    const positions = getSlideScrollPositions(container);
    if (positions.length < 2) return;

    const { scrollLeft } = container;
    const threshold = 8;

    let currentIndex = 0;
    for (let i = 0; i < positions.length; i += 1) {
      if (positions[i] <= scrollLeft + threshold) {
        currentIndex = i;
      }
    }

    const targetIndex =
      direction === 'right'
        ? Math.min(currentIndex + 1, positions.length - 1)
        : Math.max(currentIndex - 1, 0);

    if (targetIndex === currentIndex) return;

    smoothScrollTo(container, positions[targetIndex]);
  };

  const formatHeroStatValue = (value: string) => {
    if (value.length > 20) return 'text-sm sm:text-base leading-snug';
    if (value.length > 12) return 'text-base sm:text-lg leading-snug';
    return 'text-xl sm:text-2xl lg:text-3xl leading-none';
  };

  const heroStats = [
    { label: 'Timeline', value: project.duration },
    {
      label: 'Market',
      value: (project.country || 'Global').replace(/\s*\/\s*global\s*users/i, ' / Global').trim(),
    },
    { label: 'Team size', value: String(project.teamSize) },
    { label: 'Technologies', value: `${project.tech.length}+` },
  ];

  return (
    <article className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <header className="-mt-nav-offset bg-gradient-to-r from-secondary to-background pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-nav-offset page-top">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="together-tag">{project.category}</span>
              <span className="t-label normal-case tracking-snug text-muted-foreground">
                {project.client}
              </span>
              {project.role && (
                <>
                  <span className="text-border">·</span>
                  <span className="text-body-xs text-muted-foreground t-mono">
                    {project.role}
                  </span>
                </>
              )}
            </div>

            <h1 className="t-display mb-3 tracking-snug">{project.title}</h1>

            {project.subtitle && (
              <p className="t-display-sub mb-6">{project.subtitle}</p>
            )}

            <p className="t-section-desc max-w-xl mb-8">{project.description}</p>

            {(project.playStoreUrl || project.appStoreUrl) && (
              <div className="flex flex-wrap gap-3">
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="together-btn-primary inline-flex items-center px-5 py-2.5 text-body-sm"
                  >
                    <Smartphone className="w-4 h-4 mr-2" />
                    Play Store
                  </a>
                )}
                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="together-btn-secondary inline-flex items-center px-5 py-2.5 text-body-sm"
                  >
                    <Smartphone className="w-4 h-4 mr-2" />
                    App Store
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="lg:col-span-6 xl:col-span-7">
            <div className="together-card overflow-hidden p-2 sm:p-3">
              <img
                src={heroSrc}
                alt={project.title}
                className={getProjectHeroImageClass()}
              />
            </div>
          </div>
          </div>

          <dl className="mt-12 sm:mt-14 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-xl sm:rounded-2xl overflow-hidden shadow-card">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col bg-white min-w-0 p-5 sm:p-6 lg:p-8 text-center md:text-left items-center md:items-start"
              >
                <dd
                  className={`t-mono font-medium break-words max-w-full mb-2 ${formatHeroStatValue(stat.value)}`}
                >
                  {stat.value}
                </dd>
                <dt className="t-label normal-case tracking-snug text-[0.65rem]">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* Screenshots */}
      {project.screenshots.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20 together-section-alt border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="t-label mb-3">Product gallery</p>
                <h2 className="t-section-title">In the app</h2>
                <p className="t-section-desc mt-3 max-w-2xl">
                  Key screens from {project.title} showing the core user experience.
                </p>
              </div>
              {project.screenshots.length > 1 && (
                <div className="flex gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => scrollScreenshots('left')}
                    disabled={!canScrollLeft}
                    aria-label="Scroll screenshots left"
                    className="w-10 h-10 rounded-lg border border-border bg-white hover:border-black/20 flex items-center justify-center transition-colors duration-300 disabled:opacity-40 disabled:pointer-events-none disabled:hover:border-border"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollScreenshots('right')}
                    disabled={!canScrollRight}
                    aria-label="Scroll screenshots right"
                    className="w-10 h-10 rounded-lg border border-border bg-white hover:border-black/20 flex items-center justify-center transition-colors duration-300 disabled:opacity-40 disabled:pointer-events-none disabled:hover:border-border"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div
            ref={screenshotScrollRef}
            className="project-screenshot-scroller [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label={`${project.title} app screenshots`}
          >
            <div className="project-screenshot-track flex gap-0 w-max px-4 sm:px-6 lg:px-8">
              {project.screenshots.map((src, index) => (
                <div
                  key={index}
                  data-screenshot-slide
                  className="flex-shrink-0 snap-start w-[42vw] min-w-[140px] max-w-[220px] sm:w-[200px] md:w-[220px]"
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className={getScreenshotImageClass()}
                    loading="lazy"
                    draggable={false}
                    onLoad={updateScreenshotScrollState}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tabbed content */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-8 sm:mb-12 lg:mb-14 p-1 sm:p-1.5 bg-secondary rounded-xl w-full sm:w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id ? 'together-tab together-tab-active' : 'together-tab together-tab-inactive'
                } text-center text-body-xs sm:text-body-sm px-2 sm:px-4`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16">
            <div className="lg:col-span-8 space-y-8 sm:space-y-12">
              {activeTab === 'overview' && (
                <>
                  <div>
                    <p className="t-label mb-3">The challenge</p>
                    <h2 className="t-section-title mb-6">What we set out to solve</h2>
                    <div className="space-y-4">
                      {project.challenges.map((challenge, index) => (
                        <p key={index} className="t-body">
                          {challenge}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="t-label mb-3">Our approach</p>
                    <h2 className="t-section-title mb-6">How we delivered</h2>
                    <ul className="space-y-4">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                          <span className="t-body">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.impact && (
                    <div className="together-card p-7 sm:p-9">
                      <p className="t-label mb-3">Summary</p>
                      <p className="t-body text-foreground/90 leading-relaxed">{project.impact}</p>
                    </div>
                  )}
                </>
              )}

              {activeTab === 'features' && (
                <div>
                  <p className="t-label mb-3">Capabilities</p>
                  <h2 className="t-section-title mb-8">Key features</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {project.keyFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="together-card p-6 sm:p-7 group hover:border-brand-orange/20"
                      >
                        <span className="t-mono text-body-xs text-brand-orange mb-3 block">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <p className="text-body-sm sm:text-body text-foreground leading-relaxed tracking-snug">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'impact' && (
                <div className="space-y-10">
                  <div>
                    <p className="t-label mb-3">Results</p>
                    <h2 className="t-section-title mb-8">Project impact & growth</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border rounded-xl sm:rounded-2xl overflow-hidden shadow-card mb-6 sm:mb-8">
                      {project.projectGrowth.metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="together-stat-card bg-white"
                        >
                          <p className="t-stat t-mono mb-2 group-hover:text-brand-orange transition-colors duration-500">
                            {metric.value}
                          </p>
                          <p className="t-label normal-case tracking-snug text-[0.65rem]">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="together-card p-6 sm:p-7">
                        <div className="flex items-center gap-2 mb-3">
                          <Users className="w-4 h-4 text-brand-orange" />
                          <p className="t-label normal-case">User growth</p>
                        </div>
                        <p className="t-body">{project.projectGrowth.userGrowth}</p>
                      </div>
                      <div className="together-card p-6 sm:p-7">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4 text-brand-orange" />
                          <p className="t-label normal-case">Performance</p>
                        </div>
                        <p className="t-body">{project.projectGrowth.performanceImprovement}</p>
                      </div>
                    </div>

                    <div className="together-card p-7 sm:p-9 mt-5">
                      <p className="t-label mb-3">Business impact</p>
                      <p className="t-body leading-relaxed">{project.projectGrowth.businessImpact}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-4 sm:space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="together-card p-6 sm:p-7">
                <p className="t-label mb-5">Project details</p>
                <dl className="space-y-5">
                  {[
                    { icon: Users, label: 'Client', value: project.client },
                    { icon: Globe, label: 'Market', value: project.country || 'Global' },
                    { icon: Calendar, label: 'Status', value: project.duration },
                    ...(project.role
                      ? [{ icon: CheckCircle, label: 'Role', value: project.role }]
                      : []),
                  ].map((item) => (
                    <div key={item.label}>
                      <dt className="flex items-center gap-2 t-label normal-case mb-1.5 text-[0.65rem]">
                        <item.icon className="w-3.5 h-3.5" />
                        {item.label}
                      </dt>
                      <dd className="text-body-sm text-foreground font-medium capitalize tracking-snug pl-5">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="together-card p-6 sm:p-7">
                <p className="t-label mb-5">Tech stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-body-xs t-mono bg-secondary text-foreground px-3 py-1.5 rounded-lg border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(project.playStoreUrl || project.appStoreUrl) && (
                <div className="together-card p-6 sm:p-7">
                  <p className="t-label mb-4">Live product</p>
                  <div className="space-y-3">
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="t-link flex items-center"
                      >
                        <Smartphone className="w-4 h-4 mr-2" />
                        Google Play
                        <ArrowRight className="t-link-arrow h-4 w-4" />
                      </a>
                    )}
                    {project.appStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="t-link flex items-center"
                      >
                        <Smartphone className="w-4 h-4 mr-2" />
                        App Store
                        <ArrowRight className="t-link-arrow h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 sm:py-20 together-section-alt border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Quote className="w-10 h-10 text-brand-orange/40 mx-auto mb-6" />
            <blockquote className="text-heading-md sm:text-heading-lg text-foreground leading-snug mb-8 tracking-snug">
              &ldquo;{project.testimonial.text}&rdquo;
            </blockquote>
            <footer>
              <p className="text-body-sm font-medium text-foreground">
                {project.testimonial.author}
              </p>
              <p className="t-label normal-case mt-1">{project.testimonial.position}</p>
            </footer>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="together-card together-pastel-bg p-10 sm:p-14 lg:p-16 text-center">
            <p className="t-label mb-4">Work with us</p>
            <h2 className="t-section-title mb-4 max-w-2xl mx-auto">
              Ready to build your next product?
            </h2>
            <p className="t-section-desc max-w-xl mx-auto mb-8">
              From concept to App Store — Veloria Tech ships production-grade mobile and web
              applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="together-btn-primary inline-flex items-center px-6 py-3 text-body-sm">
                Start a project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/projects" className="together-btn-secondary inline-flex items-center px-6 py-3 text-body-sm">
                View all projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
