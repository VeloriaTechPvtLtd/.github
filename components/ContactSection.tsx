"use client";

import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, AlertCircle } from "lucide-react";
import { getWeb3FormsAccessKey, submitToWeb3Forms } from "@/lib/utils/web3forms";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  project: string;
  message: string;
};

function readFormValues(form: HTMLFormElement): FormValues {
  const data = new FormData(form);
  return {
    name: String(data.get("name") ?? "").trim(),
    email: String(data.get("email") ?? "").trim(),
    phone: String(data.get("phone") ?? "").trim(),
    company: String(data.get("company") ?? "").trim(),
    project: String(data.get("project") ?? "").trim(),
    message: String(data.get("message") ?? "").trim(),
  };
}

/** Web3Forms uses field names as email labels; include extras in message body too. */
function buildWeb3FormsPayload(accessKey: string, values: FormValues) {
  const phone = values.phone || "Not provided";
  const company = values.company || "Not provided";
  const project = values.project || "Not selected";

  const message = [
    values.message,
    "",
    "——— Contact details ———",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${phone}`,
    `Company: ${company}`,
    `Project type: ${project}`,
  ].join("\n");

  return {
    access_key: accessKey,
    from_name: values.name,
    name: values.name,
    email: values.email,
    replyto: values.email,
    subject: `New inquiry from ${values.name} — Veloria Tech`,
    message,
    // Human-readable keys — Web3Forms shows these as separate rows in the email
    "Phone Number": phone,
    Company: company,
    "Project Type": project,
    botcheck: "",
  };
}

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    const form = formRef.current ?? e.currentTarget;
    const values = readFormValues(form);

    if (!values.name || !values.email || !values.message) {
      setSubmitError("Please fill in your name, email, and message.");
      return;
    }

    const accessKey = getWeb3FormsAccessKey();
    if (!accessKey) {
      setSubmitError(
        "Contact form is not configured. Restart the dev server after adding .env, or rebuild before deploy. You can also email hr@veloriatech.com."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await submitToWeb3Forms(buildWeb3FormsPayload(accessKey, values));
      setIsSubmitted(true);
      form.reset();
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email hr@veloriatech.com.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "hr@veloriatech.com", link: "mailto:hr@veloriatech.com" },
    { icon: Phone, title: "Phone", value: "+91 63615 62262", link: "tel:+916361562262" },
    { icon: MapPin, title: "Location", value: "Bengaluru, India", link: "#" },
  ];

  const projectTypes = [
    "Mobile App Development", "Web Application", "AI/ML Solutions",
    "E-commerce Platform", "Analytics Dashboard", "Custom Software", "Other",
  ];

  if (isSubmitted) {
    return (
      <section className="bg-background home-scroll-section" id="contact">
        <div className="max-w-4xl mx-auto px-4 py-24 text-center together-fade-in">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" strokeWidth={1.75} />
          </div>
          <h2 className="t-section-title mb-3">Thank you!</h2>
          <p className="t-body mb-8">We&apos;ve received your message and will get back to you within 24 hours.</p>
          <Button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setSubmitError(null);
            }}
            className="together-btn-primary px-8"
          >
            Send another message
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background home-scroll-section" id="contact">
      <div className="bg-brand-dark-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(202,174,245,0.12)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative">
          <div className="max-w-2xl">
            <h2 className="text-display-lg text-white mb-4">Start building with Veloria Tech</h2>
            <p className="text-body-lg text-white/65 leading-relaxed mb-10 tracking-snug">
              From mobile apps to AI-powered platforms — ship production software with a team that delivers.
            </p>
            <a
              href="mailto:hr@veloriatech.com"
              className="inline-flex items-center bg-white text-brand-dark-blue hover:bg-white/90 font-medium px-7 py-3 rounded-lg text-body-sm transition-all duration-300 tracking-snug hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get started now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <h3 className="t-card-title mb-3">Contact us</h3>
            <p className="t-body-sm mb-10">Tell us about your project. We typically respond within 24 hours.</p>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-3.5 group">
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-brand-purple/15 transition-colors duration-300">
                    <info.icon className="w-4 h-4 text-foreground" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="t-label mb-1">{info.title}</p>
                    <a href={info.link} className="text-body-sm text-foreground hover:text-brand-orange transition-colors tracking-snug">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <form
              ref={formRef}
              id="contact-form"
              onSubmit={handleSubmit}
              noValidate
              className="together-card relative p-7 sm:p-9 space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-body-sm font-medium text-foreground mb-2 tracking-snug">Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className="together-input"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-body-sm font-medium text-foreground mb-2 tracking-snug">Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="together-input"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-phone" className="block text-body-sm font-medium text-foreground mb-2 tracking-snug">Phone</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className="together-input"
                    placeholder="+91 ..."
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-body-sm font-medium text-foreground mb-2 tracking-snug">Company</label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    autoComplete="organization"
                    className="together-input"
                    placeholder="Company name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-project" className="block text-body-sm font-medium text-foreground mb-2 tracking-snug">Project type</label>
                <select id="contact-project" name="project" className="together-input" defaultValue="">
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-body-sm font-medium text-foreground mb-2 tracking-snug">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className="together-input resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {submitError && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-body-sm text-red-800"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={1.75} />
                  <p>{submitError}</p>
                </div>
              )}

              <Button type="submit" disabled={isSubmitting} className="together-btn-primary px-8 py-3 disabled:opacity-50">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" strokeWidth={1.75} />
                    Send message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
