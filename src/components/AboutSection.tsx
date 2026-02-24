"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "15+", label: "Years in AI & Tech" },
  { value: "10M+", label: "Students Reached" },
  { value: "98%", label: "Model Accuracy" },
  { value: "$1B+", label: "Portfolio Managed" },
  { value: "2", label: "Published Books" },
  { value: "6", label: "Active Ventures" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{ background: "var(--bg-secondary)", position: "relative" }}
      className="section"
    >
      {/* Subtle top glow */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "600px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)" }} />

      <div className="section-inner">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}
          className="about-grid"
        >
          {/* Left — photo + text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Portrait photo */}
            <div
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                marginBottom: "2.5rem",
                border: "1px solid rgba(99,102,241,0.18)",
              }}
            >
              <img
                src="/fotos/anderson2-pb.jpg"
                alt="Anderson Furtado"
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  display: "block",
                  filter: "brightness(0.82) contrast(1.06)",
                }}
              />
              {/* Subtle bottom gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, transparent 55%, rgba(17,17,24,0.65) 100%)",
                  pointerEvents: "none",
                }}
              />
              {/* Accent line */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "var(--gradient-hero)",
                }}
              />
            </div>

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
              Who I Am
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "2rem",
              }}
            >
              15 years building AI systems that actually{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent-cyan)" }}>
                work at scale
              </em>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(148,163,184,0.85)" }}>
                I&apos;m not just a theorist. Before writing frameworks, I deployed AI systems at production scale — managing billion-dollar portfolios, directing national education assessments, and advising global governance bodies.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(148,163,184,0.85)" }}>
                Operating globally, I bridge the gap between technical implementation and institutional governance — translating complex AI realities into actionable strategy for executives, policymakers, and practitioners worldwide.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(148,163,184,0.85)" }}>
                My work sits at the intersection of engineering rigor and leadership clarity. Whether through books, certifications, or board-level advisory, I help organizations build AI that is governed, measurable, and sustainable.
              </p>
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                borderTop: "1px solid rgba(99,102,241,0.2)",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.value}
                  style={{
                    padding: "2rem 1.5rem",
                    borderBottom: "1px solid rgba(99,102,241,0.12)",
                    borderRight: i % 2 === 0 ? "1px solid rgba(99,102,241,0.12)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.04em",
                      background: "var(--gradient-hero)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginBottom: "0.35rem",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
