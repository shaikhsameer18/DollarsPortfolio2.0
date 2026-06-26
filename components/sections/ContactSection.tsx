"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { m } from "framer-motion";
import {
  Mail,
  MapPin,
  Briefcase,
  Send,
  CheckCircle2,
  Linkedin,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { fadeUp, stagger } from "@/lib/animations";
import { useReveal } from "@/lib/hooks/useReveal";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  _trap: string;
};
type FormStatus = "idle" | "loading" | "success" | "error";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "sameer.shaikh0425@gmail.com",
    href: "mailto:sameer.shaikh0425@gmail.com",
    color: "#00D4FF",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, Maharashtra, India",
    href: null,
    color: "#00FF88",
  },
  {
    icon: Briefcase,
    label: "Role",
    value: "Cybersecurity Engineer & GRC Analyst",
    href: null,
    color: "#8B5CF6",
  },
];

export default function ContactSection() {
  const { ref, inView } = useReveal();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    _trap: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const validate = (): boolean => {
    const e: typeof errors = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Name must be at least 2 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.subject.trim() || form.subject.trim().length < 3)
      e.subject = "Subject must be at least 3 characters";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="section-main relative overflow-hidden"
    >
      <div
        className="absolute inset-0 cyber-grid-bg pointer-events-none opacity-30"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(0,212,255,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="section-inner relative z-10">
        <m.div
          ref={ref}
          variants={stagger()}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <m.p variants={fadeUp} className="section-label mb-3">
            Get in Touch
          </m.p>
          <m.h2 variants={fadeUp} className="section-title mb-2">
            Initiate <span className="text-cyber-gradient">Contact</span>
          </m.h2>
          <div className="cyber-divider mb-4" />
          <m.p variants={fadeUp} className="section-subtitle mb-10">
            Open to cybersecurity roles, GRC consulting, and full-stack
            development opportunities.
          </m.p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Info column */}
            <m.div variants={fadeUp} className="lg:col-span-2 space-y-6">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${color}0D`,
                      borderColor: `${color}25`,
                    }}
                    aria-hidden="true"
                  >
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <div>
                    <p className="font-mono-jet text-[10px] uppercase tracking-wider text-[#2E4560] mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-inter-var text-sm text-[#C4DCF0] hover:text-[#00D4FF] transition-colors break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-inter-var text-sm text-[#C4DCF0]">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-[#162030]">
                <p className="font-mono-jet text-[10px] uppercase tracking-wider text-[#2E4560] mb-3">
                  // Profiles
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/shaikhsameer18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg font-mono-jet text-xs font-medium border border-[#1E3050] text-[#6B8EAD] bg-[#0A1628] hover:border-[#00D4FF]/40 hover:text-[#C4DCF0] transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/sameerahmed08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg font-mono-jet text-xs font-medium border border-[#1E3050] text-[#6B8EAD] bg-[#0A1628] hover:border-[#0A66C2]/60 hover:text-[#C4DCF0] transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[#00FF88]/20 bg-[#00FF88]/04">
                <span
                  className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="font-mono-jet text-xs text-[#00FF88]">
                  Available for new opportunities
                </span>
              </div>
            </m.div>

            {/* Form */}
            <m.div variants={fadeUp} className="lg:col-span-3">
              <div
                className="rounded-xl border p-6 sm:p-8 relative"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-2)",
                }}
              >
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#162030]">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B5C]/60 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFB800]/60 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00FF88]/60 inline-block" />
                  </div>
                  <span className="font-mono-jet text-xs text-[#2E4560]">
                    $ send_message.sh
                  </span>
                </div>

                {status === "success" ? (
                  <m.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center gap-4 py-10 text-center"
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/30 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-[#00FF88]" />
                    </div>
                    <div>
                      <p className="font-pliant text-xl font-bold text-[#00FF88] mb-2">
                        Message Sent!
                      </p>
                      <p className="font-inter-var text-sm text-[#6B8EAD]">
                        I&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setForm({
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                          _trap: "",
                        });
                      }}
                      className="btn-cyber-outline text-xs py-2 px-4 mt-2"
                    >
                      Send Another
                    </button>
                  </m.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Contact form"
                  >
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="_trap"
                      value={form._trap}
                      onChange={handleChange}
                      tabIndex={-1}
                      aria-hidden="true"
                      autoComplete="off"
                      className="absolute -z-10 opacity-0 pointer-events-none w-0 h-0"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="contact-name" className="form-label">
                          Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Sameer Ahmed"
                          className={`form-input ${errors.name ? "!border-[#FF3B5C]" : ""}`}
                          aria-invalid={!!errors.name}
                          aria-describedby={
                            errors.name ? "err-name" : undefined
                          }
                          autoComplete="name"
                        />
                        {errors.name && (
                          <p
                            id="err-name"
                            className="mt-1 font-mono-jet text-xs text-[#FF3B5C]"
                            role="alert"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="form-label">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="sameer@example.com"
                          className={`form-input ${errors.email ? "!border-[#FF3B5C]" : ""}`}
                          aria-invalid={!!errors.email}
                          aria-describedby={
                            errors.email ? "err-email" : undefined
                          }
                          autoComplete="email"
                        />
                        {errors.email && (
                          <p
                            id="err-email"
                            className="mt-1 font-mono-jet text-xs text-[#FF3B5C]"
                            role="alert"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="contact-subject" className="form-label">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Regarding cybersecurity consultation..."
                        className={`form-input ${errors.subject ? "!border-[#FF3B5C]" : ""}`}
                        aria-invalid={!!errors.subject}
                        aria-describedby={
                          errors.subject ? "err-subject" : undefined
                        }
                      />
                      {errors.subject && (
                        <p
                          id="err-subject"
                          className="mt-1 font-mono-jet text-xs text-[#FF3B5C]"
                          role="alert"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className="mb-5">
                      <label htmlFor="contact-message" className="form-label">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        className={`form-input resize-none ${errors.message ? "!border-[#FF3B5C]" : ""}`}
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message ? "err-message" : undefined
                        }
                      />
                      {errors.message && (
                        <p
                          id="err-message"
                          className="mt-1 font-mono-jet text-xs text-[#FF3B5C]"
                          role="alert"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {status === "error" && (
                      <p
                        className="mb-4 font-mono-jet text-xs text-[#FF3B5C] text-center p-3 rounded-lg border border-[#FF3B5C]/20 bg-[#FF3B5C]/05"
                        role="alert"
                      >
                        Transmission failed. Check your connection and try
                        again.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-mono-jet text-sm font-semibold text-[#050C14] bg-[#00D4FF] hover:bg-[#22E0FF] shadow-[0_0_16px_rgba(0,212,255,0.25)] hover:shadow-[0_0_28px_rgba(0,212,255,0.5)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                      aria-busy={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <span className="animate-spin inline-block">
                            &#8635;
                          </span>{" "}
                          Transmitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
