"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
  {
    org: "UN ECOSOC",
    subtitle: "United Nations",
    role: "Board Member — Global Centre for Risk & Innovation (GCRI)",
    tag: "International",
  },
  {
    org: "Harvard Business Review",
    subtitle: "HBR Advisory",
    role: "Advisory Council Member — AI & Governance Practice",
    tag: "Advisory",
  },
  {
    org: "OECD Paris",
    subtitle: "OECD",
    role: "PISA Governing Board Representative — AI in Education",
    tag: "Policy",
  },
  {
    org: "ISACA",
    subtitle: "Editorial Reviewer · IT & AI Governance",
    role: "Editorial Reviewer · IT & AI Governance",
    tag: "Certification",
  },
  {
    org: "Packt Publishing UK",
    subtitle: "Packt",
    role: "Author — AI Strategies for Web Development",
    tag: "Publishing",
  },
  {
    org: "Olympic Games · Rio 2016",
    subtitle: "Ministry of Justice – Brazil",
    role: "Portfolio & Project Manager · Olympic & Paralympic Games",
    tag: "Government",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="credentials"
      ref={ref}
      style={{ background: "var(--bg-primary)", position: "relative" }}
      className="section"
    >
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "500px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)" }} />

      <div className="section-inner">
        {/* Header */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "4rem" }}
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
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <span style={{ width: "20px", height: "1px", background: "var(--accent-cyan)", display: "inline-block" }} />
            Institutional Authority
            <span style={{ width: "20px", height: "1px", background: "var(--accent-cyan)", display: "inline-block" }} />
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Trusted by the{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "var(--gradient-hero)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              world&apos;s leading institutions
            </em>
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", maxWidth: "500px", margin: "0 auto" }}>
            Board memberships, advisory roles and published authority across governments, publishers and global standards bodies.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
          className="cred-grid"
        >
          {credentials.map((c, i) => (
            <motion.div
              key={c.org}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.07 }}
            >
              <div
                className="glass-card"
                style={{
                  padding: "1.75rem",
                  borderRadius: "12px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.35)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.15)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Tag */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    width: "fit-content",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "100px",
                    background: "rgba(99,102,241,0.12)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    fontSize: "0.7rem",
                    fontFamily: "var(--font-geist-mono)",
                    color: "var(--accent)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {c.tag}
                </div>

                {/* Org */}
                <div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.2rem" }}>
                    {c.org}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>
                    {c.subtitle}
                  </div>
                </div>

                {/* Role */}
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, marginTop: "auto" }}>
                  {c.role}
                </p>
              </div>
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
