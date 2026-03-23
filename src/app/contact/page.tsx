"use client";

import { useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function IconSend() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

// ─── Constants ────────────────────────────────────────────────────────────────

const CONTACT_EMAIL = "mrsteve.bang@gmail.com";
const GITHUB_URL = "https://github.com/steve-bang";
const LINKEDIN_URL = "https://linkedin.com/in/steve-bang-924ab6284";

// ─── Sub-components ───────────────────────────────────────────────────────────

function AvailableBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      Available for hire
    </span>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

function Input({ label, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <input
        id={id}
        className="w-full px-4 py-2.5 rounded-lg text-sm
          bg-white border border-slate-200 text-slate-900 placeholder-slate-400
          focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500
          transition-colors
          dark:bg-slate-800/60 dark:border-slate-700 dark:text-slate-100 dark:placeholder-slate-500
          dark:focus:ring-blue-500/30 dark:focus:border-blue-500"
        {...props}
      />
    </div>
  );
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

function Textarea({ label, id, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>
      <textarea
        id={id}
        className="w-full px-4 py-2.5 rounded-lg text-sm resize-none
          bg-white border border-slate-200 text-slate-900 placeholder-slate-400
          focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500
          transition-colors
          dark:bg-slate-800/60 dark:border-slate-700 dark:text-slate-100 dark:placeholder-slate-500
          dark:focus:ring-blue-500/30 dark:focus:border-blue-500"
        {...props}
      />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

type FormState = "idle" | "submitting" | "success";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // TODO: replace this stub with your actual submit logic (API route, email service, etc.)
  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;

    setFormState("submitting");

    // Simulate async — remove this when wiring up a real endpoint
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setFormState("success");
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setFormState("idle");
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 dark:bg-slate-950 dark:text-slate-300">
      {/* ── Hero ── */}
      <div className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 sm:pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 mb-5">
            <a
              href="/"
              className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              Home
            </a>
            <span>/</span>
            <span className="text-slate-600 dark:text-slate-400">Contact</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Get in Touch
              </h1>
              <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                Have a project in mind, a question, or just want to say hello?
                Fill out the form below or reach me directly — I typically
                respond within 24 hours.
              </p>
            </div>
            <div className="flex-shrink-0">
              <AvailableBadge />
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* ── Left sidebar: info ── */}
          <aside className="lg:col-span-2 space-y-8">
            {/* Quick info cards */}
            <div className="space-y-3">
              {/* Email */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-center gap-4 p-4 rounded-xl
                  bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50
                  dark:bg-slate-900/60 dark:border-slate-800 dark:hover:border-blue-700/60 dark:hover:bg-blue-950/30
                  transition-all duration-200"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400 group-hover:scale-105 transition-transform">
                  <IconMail />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">
                    Email
                  </p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">
                    {CONTACT_EMAIL}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-900/60 dark:border-slate-800">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                  <IconMapPin />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">
                    Location
                  </p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Ho Chi Minh City, Vietnam
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                    Remote — working in your timezone
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                Connect on Social
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 rounded-lg
                    border border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50
                    dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-700 dark:hover:bg-slate-800/50
                    transition-all duration-200"
                >
                  <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    <IconGitHub />
                  </span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    github.com/steve-bang
                  </span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3.5 h-3.5 ml-auto text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 rounded-lg
                    border border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/30
                    dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-blue-700/50 dark:hover:bg-blue-950/30
                    transition-all duration-200"
                >
                  <span className="text-blue-600 dark:text-blue-500 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    <IconLinkedIn />
                  </span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    linkedin.com/in/steve-bang
                  </span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3.5 h-3.5 ml-auto text-slate-300 dark:text-slate-600 group-hover:text-blue-400 dark:group-hover:text-blue-500 transition-colors"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Response time note */}
            <div className="px-4 py-3 rounded-lg bg-amber-50 border border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/20">
              <p className="text-xs text-amber-700 dark:text-amber-400">
                ⏱ Average response time:{" "}
                <strong className="font-semibold">within 24 hours</strong>
              </p>
            </div>
          </aside>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
              {formState === "success" ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <IconCheck />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      Message Sent!
                    </h2>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-xs">
                      Thanks for reaching out. I&apos;ll get back to you within
                      24 hours.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <div className="space-y-5">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      Send a Message
                    </h2>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      All fields marked with{" "}
                      <span className="text-red-500">*</span> are required.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Name *"
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                    <Input
                      label="Email *"
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                  </div>

                  <Input
                    label="Subject"
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                  />

                  <Textarea
                    label="Message *"
                    id="message"
                    rows={6}
                    placeholder="Tell me about your project, question, or just say hi..."
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <button
                    onClick={handleSubmit}
                    disabled={
                      formState === "submitting" ||
                      !formData.name ||
                      !formData.email ||
                      !formData.message
                    }
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                      text-sm font-semibold text-white
                      bg-blue-600 hover:bg-blue-500 active:bg-blue-700
                      disabled:opacity-50 disabled:cursor-not-allowed
                      transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                      dark:focus:ring-offset-slate-900"
                  >
                    {formState === "submitting" ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <IconSend />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-slate-400 dark:text-slate-600">
                    By submitting, you agree to our{" "}
                    <a
                      href="/privacy-policy"
                      className="underline underline-offset-2 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}