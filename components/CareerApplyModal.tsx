"use client";

import { useEffect, useRef, useState } from "react";
import { X, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { getWeb3FormsAccessKey, submitToWeb3Forms } from "@/lib/utils/web3forms";

export type CareerRole = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
};

interface CareerApplyModalProps {
  role: CareerRole;
  onClose: () => void;
}

function readApplyFormValues(form: HTMLFormElement) {
  const data = new FormData(form);
  return {
    name: String(data.get("name") ?? "").trim(),
    email: String(data.get("email") ?? "").trim(),
    phone: String(data.get("phone") ?? "").trim(),
    resumeLink: String(data.get("resume_link") ?? "").trim(),
    experience: String(data.get("experience") ?? "").trim(),
    coverLetter: String(data.get("cover_letter") ?? "").trim(),
  };
}

function buildCareerPayload(
  accessKey: string,
  role: CareerRole,
  values: ReturnType<typeof readApplyFormValues>
) {
  const phone = values.phone || "Not provided";
  const coverLetter = values.coverLetter || "Not provided";

  const message = [
    `New career application for: ${role.title}`,
    "",
    "——— Applicant ———",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${phone}`,
    `Resume link: ${values.resumeLink}`,
    "",
    "——— Latest experience ———",
    values.experience,
    "",
    "——— Cover letter ———",
    coverLetter,
    "",
    "——— Role details ———",
    `Position: ${role.title}`,
    `Department: ${role.department}`,
    `Location: ${role.location}`,
    `Type: ${role.type}`,
  ].join("\n");

  return {
    access_key: accessKey,
    from_name: values.name,
    name: values.name,
    email: values.email,
    replyto: values.email,
    subject: `Career application: ${role.title} — ${values.name}`,
    message,
    "Role Applied": role.title,
    Department: role.department,
    Location: role.location,
    "Employment Type": role.type,
    "Phone Number": phone,
    "Resume Link": values.resumeLink,
    Experience: values.experience,
    "Cover Letter": coverLetter,
    botcheck: "",
  };
}

export function CareerApplyModal({ role, onClose }: CareerApplyModalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    const form = formRef.current ?? e.currentTarget;
    const values = readApplyFormValues(form);

    if (!values.name || !values.email || !values.resumeLink || !values.experience) {
      setSubmitError("Please fill in your name, email, resume link, and experience.");
      return;
    }

    const accessKey = getWeb3FormsAccessKey();
    if (!accessKey) {
      setSubmitError(
        "Application form is not configured. Please email hr@veloriatech.com with your resume."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await submitToWeb3Forms(buildCareerPayload(accessKey, role, values));
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="career-apply-title"
        className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto bg-background rounded-t-2xl sm:rounded-2xl shadow-xl border border-black/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-black/10 bg-background px-5 sm:px-6 py-4">
          <div className="min-w-0 pr-2">
            <p className="t-label text-muted-foreground mb-1">Apply for</p>
            <h2 id="career-apply-title" className="t-card-title leading-snug">
              {role.title}
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary">{role.department}</Badge>
              <Badge variant="outline">{role.location}</Badge>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Close application form"
          >
            <X className="w-5 h-5" strokeWidth={1.75} />
          </button>
        </div>

        <div className="px-5 sm:px-6 py-5 sm:py-6">
          {isSubmitted ? (
            <div className="text-center py-6 sm:py-8">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="t-card-title mb-2">Application sent!</h3>
              <p className="t-body-sm text-muted-foreground mb-6">
                Thanks for applying for {role.title}. We&apos;ll review your profile and get back to you soon.
              </p>
              <Button type="button" onClick={onClose} className="together-btn-primary px-8">
                Close
              </Button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="apply-name" className="block text-body-sm font-medium text-foreground mb-2 tracking-snug">
                    Full name *
                  </label>
                  <input
                    id="apply-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className="together-input"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="apply-email" className="block text-body-sm font-medium text-foreground mb-2 tracking-snug">
                    Email *
                  </label>
                  <input
                    id="apply-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="together-input"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="apply-phone" className="block text-body-sm font-medium text-foreground mb-2 tracking-snug">
                  Phone
                </label>
                <input
                  id="apply-phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  className="together-input"
                  placeholder="+91 ..."
                />
              </div>

              <div>
                <label htmlFor="apply-resume" className="block text-body-sm font-medium text-foreground mb-2 tracking-snug">
                  Resume link *
                </label>
                <input
                  id="apply-resume"
                  type="url"
                  name="resume_link"
                  required
                  className="together-input"
                  placeholder="https://drive.google.com/... or LinkedIn URL"
                />
                <p className="text-body-xs text-muted-foreground mt-1.5 tracking-snug">
                  Paste a public link to your resume (Google Drive, Dropbox, LinkedIn, or portfolio).
                </p>
              </div>

              <div>
                <label htmlFor="apply-experience" className="block text-body-sm font-medium text-foreground mb-2 tracking-snug">
                  Latest experience *
                </label>
                <textarea
                  id="apply-experience"
                  name="experience"
                  required
                  rows={4}
                  className="together-input resize-none"
                  placeholder="Your most recent role, key skills, and relevant projects..."
                />
              </div>

              <div>
                <label htmlFor="apply-cover" className="block text-body-sm font-medium text-foreground mb-2 tracking-snug">
                  Why Veloria Tech?
                </label>
                <textarea
                  id="apply-cover"
                  name="cover_letter"
                  rows={3}
                  className="together-input resize-none"
                  placeholder="Optional — what interests you about this role?"
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

              <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
                <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting} className="together-btn-primary px-8">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" strokeWidth={1.75} />
                      Submit application
                    </span>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
