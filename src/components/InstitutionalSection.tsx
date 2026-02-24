"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
  {
    org: "UN ECOSOC",
    role: "Board Member · GCRI",
    tag: "International",
    desc: "Board Member at the Global Center for Risk and Innovation (GCRI), engaged with the United Nations Economic and Social Council on global AI governance policy and digital equity frameworks.",
  },
  {
    org: "Packt Publishing UK",
    role: "Author — AI Strategies",
    tag: "Publishing",
    desc: "Published internationally by Packt, one of the world's leading technical publishers, on enterprise AI strategy and governance.",
  },
  {
    org: "ISACA",
    role: "Editorial Reviewer · IT & AI Governance",
    tag: "Certification",
    desc: "ISACA peer-reviewed editorial reviewer for international publications on IT Governance, Risk, and AI Governance — contributing to global digital trust standards.",
  },
  {
    org: "Harvard Business Review",
    role: "Advisory Council",
    tag: "Advisory",
    desc: "Contributor and advisory council member, bridging academic research and executive practice in AI leadership.",
  },
  {
    org: "OECD Paris",
    role: "PISA Governing Board",
    tag: "Policy",
    desc: "Member of the OECD PISA Governing Board in Paris, shaping international education assessment and AI integration policy.",
  },
  {
    org: "Olympic Games · Rio 2016",
    role: "Portfolio & Project Manager · Ministry of Justice",
    tag: "Government",
    desc: "$200M+ portfolio · 30+ strategic initiatives · 88,000 security personnel. Awarded by the CGU for innovation in security governance.",
  },
];

const tagColors: Record<string, string> = {
  International: "rgba(99,102,241,0.15)",
  Publishing: "rgba(6,182,212,0.12)",
  Certification: "rgba(139,92,246,0.12)",
  Advisory: "rgba(99,102,241,0.15)",
  Policy: "rgba(6,182,212,0.12)",
  Government: "rgba(16,185,129,0.12)",
};

const tagTextColors: Record<string, string> = {
  International: "var(--accent-glow)",
  Publishing: "var(--accent-cyan)",
  Certification: "#a78bfa",
  Advisory: "var(--accent-glow)",
  Policy: "var(--accent-cyan)",
  Government: "#34d399",
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
            Institutional Recognition
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
              Trusted by governments,{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent-cyan)" }}>
                global institutions
              </em>{" "}
              and publishers
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", maxWidth: "360px", lineHeight: 1.7 }}>
              A track record built across policy, publishing, certification and government — not just conference stages.
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
