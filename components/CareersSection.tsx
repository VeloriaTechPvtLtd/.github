"use client";

import { useState } from "react";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CareerApplyModal, type CareerRole } from "./CareerApplyModal";

const benefits = [
  "Fully remote junior roles",
  "Competitive salary & growth path",
  "Learning budget for courses & conferences",
  "Flexible hours & generous leave",
  "Latest tools and hardware",
  "Collaborative, low-ego culture",
];

const openRoles = [
  {
    id: 1,
    title: "Junior Flutter Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Help build and ship mobile apps for iOS and Android. You'll work alongside senior engineers on features from UI polish to App Store releases.",
  },
  {
    id: 2,
    title: "Junior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Contribute across React, Node.js, and cloud services to deliver web platforms for our clients. Ideal for early-career engineers eager to learn full-stack development.",
  },
  {
    id: 3,
    title: "Junior UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description:
      "Design intuitive interfaces and contribute to design systems for mobile and web products. Partner with engineering from wireframes to polished UI.",
  },
  {
    id: 4,
    title: "Junior AI/ML Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Support the design and deployment of LLM-powered features — RAG pipelines, model integration, and conversational AI for real-world products.",
  },
  {
    id: 5,
    title: "Junior Content Creator",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description:
      "Create engaging written and visual content for blogs, social media, and product launches. Help tell the Veloria Tech story across channels.",
  },
  {
    id: 6,
    title: "Junior Video Editor",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description:
      "Edit and produce video content for demos, tutorials, and marketing campaigns. Turn raw footage into polished stories that showcase our work.",
  },
  {
    id: 7,
    title: "Business Development Associate",
    department: "Growth",
    location: "Bengaluru",
    type: "Contract",
    description:
      "Contract-based role — identify partnership opportunities, support client discovery, and help grow Veloria Tech's presence in new markets.",
  },
];

export function CareersSection() {
  const [applyRole, setApplyRole] = useState<CareerRole | null>(null);

  return (
    <section id="careers">
      <div className="bg-brand-dark-blue text-white relative overflow-hidden -mt-nav-offset">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(202,174,245,0.12)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[calc(var(--nav-offset)+2rem)] pb-14 sm:pt-[calc(var(--nav-offset)+2.5rem)] sm:pb-20 relative">
          <div className="max-w-2xl">
            <h2 className="text-display-lg text-white mb-4">Start your career remotely</h2>
            <p className="text-body-lg text-white/65 leading-relaxed tracking-snug">
              We&apos;re hiring junior talent across engineering, design, and content
              — remote, full-time roles where you&apos;ll grow while building real
              products for real clients.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="careers-benefits-section mb-12 sm:mb-16 overflow-visible">
          <h3 className="t-section-title mb-4">Why Veloria Tech</h3>
          <div className="careers-benefits-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pt-6 pb-12 px-1 overflow-visible">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="together-card px-4 py-3 text-body-sm text-muted-foreground tracking-snug"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 sm:mb-10">
          <h3 className="t-section-title mb-2">Open positions</h3>
          <p className="t-section-desc">
            Don&apos;t see a perfect fit? Send your resume to{" "}
            <a
              href="mailto:hr@veloriatech.com"
              className="text-foreground font-medium hover:underline"
            >
              hr@veloriatech.com
            </a>
          </p>
        </div>

        <div className="space-y-4">
          {openRoles.map((role) => (
            <article
              key={role.id}
              className="together-card p-5 sm:p-6 group hover:border-black/20 transition-colors duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="secondary">{role.department}</Badge>
                    <Badge variant="outline">{role.type}</Badge>
                  </div>

                  <h4 className="text-body-lg font-medium text-foreground mb-2 tracking-snug">
                    {role.title}
                  </h4>

                  <p className="text-body-sm text-muted-foreground leading-relaxed tracking-snug mb-3 max-w-2xl">
                    {role.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-body-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {role.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      {role.department}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {role.type}
                    </span>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={() => setApplyRole(role)}
                  className="together-btn-primary w-full lg:w-auto flex-shrink-0"
                >
                  Apply now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
        </div>
      </div>

      {applyRole && (
        <CareerApplyModal role={applyRole} onClose={() => setApplyRole(null)} />
      )}
    </section>
  );
}
