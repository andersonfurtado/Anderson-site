"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ventures = [
  {
    domain: "olyven.co",
    name: "Olyven",
    desc: "Organization focused on educational technologies, AI and institutional governance in education.",
    href: "https://olyven.co",
  },
  {
    domain: "aixp.com",
    name: "AIxp",
    desc: "AI Xcelence Professional — structured programs, practical assessments and career-ready training focused on AI-powered skills, employability and professional credentials across industries.",
    href: "#",
  },
  {
    domain: "g3ai.global",
    name: "G3 AI",
    desc: "Global framework for AI governance and strategy — helping organizations govern, manage and strategize with artificial intelligence at institutional scale.",
    href: "https://g3ai.global",
  },
  {
    domain: "empowerfull.venture",
    name: "Empowerfull",
    desc: "Social impact venture builder in education, health, sustainability and technology.",
    href: "#",
  },
  {
    domain: "heximind.com",
    name: "HexisMind",
    desc: "Preventive intelligence for critical human systems.",
    href: "#",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="ventures"
      ref={ref}
      style={{ background: "var(--bg-secondary)", position: "relative" }}
      className="section"
    >
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "500px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.25), transparent)" }} />

      <div className="section-inner">
        {/* Header */}
        <motion.div
          style={{ marginBottom: "3.5rem" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
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
            Ventures
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "0.75rem",
            }}
          >
            Building the companies{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "var(--gradient-hero)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              I wished existed
            </em>
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", maxWidth: "520px" }}>
            Six active ventures across AI, education, food, and technology — each solving a real problem I lived before I built the solution.
          </p>
        </motion.div>

        {/* Venture rows */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {ventures.map((v, i) => (
            <motion.a
              key={v.name}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr auto",
                alignItems: "center",
                gap: "2rem",
                padding: "1.5rem 0",
                borderBottom: "1px solid var(--border-subtle)",
                textDecoration: "none",
                transition: "opacity 0.2s",
                cursor: "pointer",
              }}
              className="venture-row"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              {/* Domain */}
              <div
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-geist-mono)",
                  color: "var(--accent-cyan)",
                  letterSpacing: "0.04em",
                }}
              >
                {v.domain}
              </div>

              {/* Name + desc */}
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }} className="venture-inner">
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", whiteSpace: "nowrap" }}>
                  {v.name}
                </div>
                <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                  {v.desc}
                </div>
              </div>

              {/* Arrow */}
              <div style={{ fontSize: "1.1rem", color: "var(--text-muted)", flexShrink: 0 }}>→</div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .venture-row { grid-template-columns: 1fr auto !important; gap: 1rem !important; }
          .venture-row > div:first-child { display: none; }
          .venture-inner { flex-direction: column !important; align-items: flex-start !important; gap: 0.4rem !important; }
        }
      `}</style>
    </section>
  );
}
