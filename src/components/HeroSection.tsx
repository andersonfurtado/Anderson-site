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

          {/* Right — portrait photo + credentials overlay */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{ position: "relative", borderRadius: "16px", overflow: "hidden", minHeight: "540px" }}
          >
            {/* Portrait */}
            <img
              src="/fotos/anderson-pb.jpg"
              alt="Anderson Furtado"
              style={{
                width: "100%",
                height: "540px",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                borderRadius: "16px",
                filter: "brightness(0.78) contrast(1.05)",
              }}
            />

            {/* Gradient vignette at bottom */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "16px",
                background: "linear-gradient(to bottom, rgba(10,10,15,0.08) 0%, rgba(10,10,15,0.0) 40%, rgba(10,10,15,0.82) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Credentials overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1.5rem",
                backdropFilter: "blur(14px)",
                borderTop: "1px solid rgba(99,102,241,0.25)",
                background: "rgba(10,10,15,0.65)",
                borderRadius: "0 0 16px 16px",
              }}
            >
              <div
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent-cyan)",
                  fontFamily: "var(--font-geist-mono)",
                  marginBottom: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ width: "16px", height: "1px", background: "var(--accent-cyan)", display: "inline-block" }} />
                Institutional Recognition
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {credentials.map((c) => (
                  <div key={c.org} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--accent-cyan)",
                        marginTop: "5px",
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-primary)", fontWeight: 600 }}>{c.org}</div>
                      <div style={{ fontSize: "0.72rem", color: "rgba(148,163,184,0.7)" }}>{c.role}</div>
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
