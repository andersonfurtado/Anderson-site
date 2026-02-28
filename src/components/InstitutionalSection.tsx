"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
  {
    org: "Brazilian Ministry of Education (INEP)",
    role: "Director of National Assessments & Commission Member",
    tag: "National Education Policy",
  desc: "Led structural review and redesign of national assessment parameters (ENEM, SAEB, ENCCEJA), impacting 10M+ participants annually. Developed AI-powered adaptive systems (ENEM Digital 2.0) and predictive models for IDEB (~98% precision).",
  },
  {
    org: "Brazilian Bar Association (OAB/DF)",
    role: "Chair — AI Regulation Commission",
    tag: "AI Regulation & Governance",
    desc: "Led regulatory discussions and structured frameworks for AI governance and legal innovation in Brazil. Coordinated working groups integrating legal, technological, and institutional perspectives on AI oversight.",
  },
  {
    org: "POSEAD / Universidade Gama Filho",
    role: "Founder — Postgraduate Program in Digital Law",
    tag: "Academic Development",
    desc: "Designed and implemented postgraduate programs in Digital Law and Technology Governance, bridging academia, regulation, and innovation.",
  },
  {
    org: "ABPMP — BPM CBOK Review",
    role: "Contributor — Portfolio, Program & Project Management",
    tag: "Global Standards",
    desc: "Contributed to the ABPMP BPM CBOK — the international standard for Business Process Management — coordinating revision of governance models for portfolio, program, and project management methodologies.",
  },
  {
    org: "Brazilian Office of the Comptroller General (CGU)",
    role: "4th National Best Practices Prize",
    tag: "Public Innovation Award",
    desc: "Awarded for innovative project governance methodology implemented during the Rio 2016 Olympic and Paralympic Games — recognized as national benchmark.",
  },
  {
    org: "Federal Data Processing Service (SERPRO)",
    role: "Digital Transformation Lead",
    tag: "National Digital Transformation",
    desc: "Led creation of Brazil's first fully digital public contracting system with certified digital signatures (2009), eliminating physical processes and transforming procurement governance.",
  },
];

const tagColors: Record<string, string> = {
  "National Education Policy": "rgba(6,182,212,0.12)",
  "AI Regulation & Governance": "rgba(99,102,241,0.15)",
  "Academic Development": "rgba(139,92,246,0.12)",
  "Global Standards": "rgba(6,182,212,0.12)",
  "Public Innovation Award": "rgba(251,191,36,0.12)",
  "National Digital Transformation": "rgba(16,185,129,0.12)",
};

const tagTextColors: Record<string, string> = {
  "National Education Policy": "var(--accent-cyan)",
  "AI Regulation & Governance": "var(--accent-glow)",
  "Academic Development": "#a78bfa",
  "Global Standards": "var(--accent-cyan)",
  "Public Innovation Award": "#fbbf24",
  "National Digital Transformation": "#34d399",
};

export default function InstitutionalSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="institutional"
      ref={ref}
      style={{ background: "var(--bg-primary)", position: "relative" }}
      className="section"
    >
      {/* Top separator line */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)" }} />

      <div className="section-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "4rem" }}
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
            National Impact & Institutional Innovation
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                maxWidth: "600px",
              }}
            >
              Trusted Through{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent-cyan)" }}>
                National Impact
              </em>{" "}
              & Institutional Innovation
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", maxWidth: "380px", lineHeight: 1.7 }}>
              Large-scale governance, AI systems design, regulatory leadership, and digital transformation across public institutions.
            </p>
          </div>
        </motion.div>

        {/* Credentials grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(99,102,241,0.12)",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(99,102,241,0.12)",
          }}
          className="cred-grid"
        >
          {credentials.map((c, i) => (
            <motion.div
              key={c.org}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "var(--bg-primary)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-surface)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-primary)"; }}
            >
              {/* Tag */}
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "0.25rem 0.7rem",
                  borderRadius: "100px",
                  fontSize: "0.65rem",
                  fontFamily: "var(--font-geist-mono)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: tagColors[c.tag],
                  color: tagTextColors[c.tag],
                }}
              >
                {c.tag}
              </span>

              {/* Org & role */}
              <div>
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.2rem" }}>
                  {c.org}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--accent-cyan)", fontFamily: "var(--font-geist-mono)" }}>
                  {c.role}
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text-muted)", marginTop: "auto" }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cred-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .cred-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
