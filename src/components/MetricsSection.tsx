"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  { letter: "G", title: "Governance", desc: "Accountability, risk and compliance frameworks that keep AI aligned with institutional mandates." },
  { letter: "G", title: "Management", desc: "Operational models for deploying, monitoring, and scaling AI systems across complex organizations." },
  { letter: "G", title: "Strategy", desc: "Long-term positioning of AI capabilities to create competitive advantage and measurable outcomes." },
];

export default function MetricsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="framework"
      ref={ref}
      style={{ background: "var(--bg-primary)", position: "relative" }}
      className="section"
    >
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.25), transparent)" }} />

      <div className="section-inner">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 480px", gap: "5rem", alignItems: "center" }}
          className="framework-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
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
              The G3 AI Framework
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "1.75rem",
              }}
            >
              AI without structure is just{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "var(--gradient-hero)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                expensive chaos
              </em>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text-secondary)" }}>
                The G3 AI Framework is the first governance methodology designed specifically for organizations scaling AI beyond proof-of-concept — where real accountability, risk, and strategy decisions happen.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text-secondary)" }}>
                Adopted by executives, board members and national institutions, G3 provides a structured operating model that transforms AI from a cost center into a strategic capability.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text-secondary)" }}>
                Built from real deployments across healthcare, finance, and public sector — not academic theory.
              </p>
            </div>

            <a
              href="https://g3ai.global"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 1.75rem",
                borderRadius: "8px",
                background: "var(--accent)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              Explore G3AI.global →
            </a>
          </motion.div>

          {/* Right — pillars card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div
              className="glass-card"
              style={{
                borderRadius: "16px",
                padding: "2.5rem",
                background: "var(--bg-surface)",
                border: "1px solid rgba(99,102,241,0.25)",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent-glow)",
                  fontFamily: "var(--font-geist-mono)",
                  marginBottom: "1.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ width: "16px", height: "1px", background: "var(--accent-glow)", display: "inline-block" }} />
                Three Pillars
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {pillars.map((p, i) => (
                  <div
                    key={`${p.title}-${i}`}
                    style={{
                      display: "flex",
                      gap: "1.25rem",
                      alignItems: "flex-start",
                      padding: "1.5rem 0",
                      borderBottom: i < pillars.length - 1 ? "1px solid rgba(99,102,241,0.15)" : "none",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "8px",
                        background: "rgba(99,102,241,0.15)",
                        border: "1px solid rgba(99,102,241,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--accent-glow)",
                        fontFamily: "var(--font-geist-mono)",
                        flexShrink: 0,
                      }}
                    >
                      {p.letter}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.3rem" }}>
                        {p.title}
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                        {p.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--border-subtle)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                G3 AI is the governance methodology behind AIxp Certification and the G3 AI Full Program — taught globally to executives and policy architects.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .framework-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
