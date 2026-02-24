"use client";

import { useState } from "react";

const advisoryTags = [
  "AI Governance",
  "Board Advisory",
  "Executive Education",
  "Framework Licensing",
  "Keynote Speaking",
  "Institutional Partnership",
];

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", org: "", email: "", type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Partners / Advisory band */}
      <section
        id="advisory"
        style={{
          background: "var(--bg-surface)",
          position: "relative",
          overflow: "hidden",
          padding: "6rem 0",
          borderTop: "1px solid rgba(99,102,241,0.15)",
          borderBottom: "1px solid rgba(99,102,241,0.15)",
        }}
      >
        {/* Glow */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="cta-top-grid">
            {/* Left */}
            <div>
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent-cyan)",
                  fontFamily: "var(--font-geist-mono)",
                  marginBottom: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <span style={{ width: "20px", height: "1px", background: "var(--accent-cyan)", display: "inline-block" }} />
                Work Together
              </div>

              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                  marginBottom: "1.25rem",
                }}
              >
                Let&apos;s build something{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    background: "var(--gradient-hero)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  that lasts
                </em>
              </h2>

              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "480px" }}>
                I work with a small number of organizations each year on AI governance, board advisory, and executive education. If this sounds like the right fit, reach out.
              </p>

              {/* Advisory tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
                {advisoryTags.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "0.35rem 0.9rem",
                      borderRadius: "100px",
                      border: "1px solid var(--border)",
                      fontSize: "0.78rem",
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Email CTA */}
              <a
                href="mailto:anderson@andersonfurtado.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "8px",
                  background: "var(--text-primary)",
                  color: "var(--bg-primary)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "opacity 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                Send a Direct Email →
              </a>
            </div>

            {/* Right — placeholder stat card */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} className="cta-stats">
              {[
                { label: "Advisory Engagements / Year", value: "Limited" },
                { label: "Response Time", value: "< 48h" },
                { label: "Primary Format", value: "Retainer / Project" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="glass-card"
                  style={{ padding: "1.5rem", borderRadius: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}
                >
                  <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{s.label}</span>
                  <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--accent-cyan)", fontFamily: "var(--font-geist-mono)" }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        style={{ background: "var(--bg-primary)", padding: "6rem 0", borderBottom: "1px solid rgba(99,102,241,0.12)" }}
      >
        <div className="section-inner">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="form-grid">
            {/* Left */}
            <div>
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent-cyan)",
                  fontFamily: "var(--font-geist-mono)",
                  marginBottom: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <span style={{ width: "20px", height: "1px", background: "var(--accent-cyan)", display: "inline-block" }} />
                Advisory Inquiry
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                  marginBottom: "1.25rem",
                }}
              >
                Start the{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--accent-cyan)",
                  }}
                >
                  conversation
                </em>
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.75 }}>
                Use this form for advisory inquiries, partnership proposals, speaking engagements, or institutional collaborations. I review every message personally.
              </p>

              <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { icon: "→", text: "anderson@andersonfurtado.com" },
                  { icon: "→", text: "Global · AI & Education" },
                  { icon: "→", text: "linkedin.com/in/andersonfurtado" },
                ].map((item) => (
                  <div key={item.text} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <span style={{ color: "var(--accent)", fontSize: "0.85rem" }}>{item.icon}</span>
                    <span style={{ fontSize: "0.875rem", color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div
                  className="glass-card"
                  style={{ padding: "3rem", borderRadius: "12px", textAlign: "center" }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✓</div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>Message received</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>I&apos;ll get back to you within 48 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                >
                  {[
                    { field: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                    { field: "org", label: "Organization", type: "text", placeholder: "Company or institution" },
                    { field: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  ].map(({ field, label, type, placeholder }) => (
                    <div key={field}>
                      <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.5rem", fontFamily: "var(--font-geist-mono)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[field as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        style={{
                          width: "100%",
                          background: "transparent",
                          border: "none",
                          borderBottom: "1px solid rgba(99,102,241,0.25)",
                          padding: "0.75rem 0",
                          color: "var(--text-primary)",
                          fontSize: "0.95rem",
                          outline: "none",
                          transition: "border-color 0.2s",
                          fontFamily: "inherit",
                        }}
                        onFocus={(e) => (e.target.style.borderBottomColor = "var(--accent)")}
                        onBlur={(e) => (e.target.style.borderBottomColor = "rgba(99,102,241,0.25)")}
                        required
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.5rem", fontFamily: "var(--font-geist-mono)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      Inquiry Type
                    </label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      style={{
                        width: "100%",
                        background: "var(--bg-surface)",
                        border: "1px solid rgba(99,102,241,0.2)",
                        borderRadius: "6px",
                        padding: "0.75rem 1rem",
                        color: form.type ? "var(--text-primary)" : "var(--text-muted)",
                        fontSize: "0.9rem",
                        outline: "none",
                        fontFamily: "inherit",
                      }}
                      required
                    >
                      <option value="" disabled>Select inquiry type</option>
                      {advisoryTags.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.5rem", fontFamily: "var(--font-geist-mono)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      Message
                    </label>
                    <textarea
                      placeholder="Describe your project, challenge, or idea..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        borderBottom: "1px solid rgba(99,102,241,0.25)",
                        padding: "0.75rem 0",
                        color: "var(--text-primary)",
                        fontSize: "0.95rem",
                        outline: "none",
                        resize: "none",
                        fontFamily: "inherit",
                        lineHeight: 1.65,
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderBottomColor = "var(--accent)")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "rgba(99,102,241,0.25)")}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      padding: "0.875rem 2rem",
                      borderRadius: "8px",
                      background: "var(--accent)",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      border: "none",
                      cursor: "pointer",
                      width: "100%",
                      transition: "opacity 0.2s, transform 0.2s",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                  >
                    Send Inquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .cta-top-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .cta-stats { display: none !important; }
          .form-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </>
  );
}
