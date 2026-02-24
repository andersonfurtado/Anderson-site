"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const credentials = [
  { org: "UN ECOSOC", role: "Board Member · GCRI" },
  { org: "Packt Publishing UK", role: "Author — AI Strategies" },
  { org: "ISACA", role: "CGEIT · Geographic Award" },
  { org: "Harvard Business Review", role: "Advisory Council" },
  { org: "OECD Paris", role: "PISA Governing Board" },
];

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "88px",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-inner" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: "5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            {/* Location tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.75rem",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-geist-mono)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-cyan)", display: "inline-block" }} />
              Global · AI & Education
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "1.25rem",
              }}
            >
              Anderson{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "var(--gradient-hero)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Furtado
              </em>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.3rem)",
                color: "var(--text-secondary)",
                marginBottom: "2rem",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              AI Governance & Intelligent Systems Architecture
            </p>

            {/* Statement */}
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                maxWidth: "560px",
                marginBottom: "2.5rem",
                paddingLeft: "1.25rem",
                borderLeft: "2px solid var(--accent)",
              }}
            >
              Teaching AI leaders to govern, manage and strategize with artificial intelligence —{" "}
              <em style={{ color: "var(--accent-cyan)", fontStyle: "normal" }}>
                not just implement tools
              </em>
              . Frameworks trusted by governments, enterprises and global institutions.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="#products"
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
                Explore My Books →
              </a>
              <a
                href="#advisory"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  background: "transparent",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
              >
                Advisory Inquiry
              </a>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <div
              className="glass-card"
              style={{
                background: "var(--bg-surface)",
                borderRadius: "16px",
                padding: "2rem",
                border: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--accent-cyan)",
                  fontFamily: "var(--font-geist-mono)",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ width: "18px", height: "1px", background: "var(--accent-cyan)", display: "inline-block" }} />
                Institutional Recognition
              </div>

              <blockquote
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                  marginBottom: "1.75rem",
                  fontStyle: "italic",
                }}
              >
                &ldquo;A global voice connecting AI governance, education policy, and enterprise strategy across institutions.&rdquo;
              </blockquote>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {credentials.map((c) => (
                  <div
                    key={c.org}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "var(--accent-cyan)",
                        marginTop: "6px",
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-primary)", fontWeight: 600 }}>{c.org}</div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{c.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
