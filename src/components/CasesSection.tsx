"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    type: "Book",
    badge: "Packt Publishing UK",
    title: "AI Strategies for Web Development",
    meta: "Packt Publishing · 2024 · English",
    desc: "The definitive guide to integrating AI into modern web development — from architecture decisions to governance frameworks used by Fortune 500 teams.",
    link: "#",
    linkLabel: "Get the Book →",
    featured: true,
  },
  {
    type: "Book",
    badge: "Brasport",
    title: "PGM Canvas",
    meta: "Brasport · Brazil · Portuguese",
    desc: "A strategic methodology for managing programs with complexity — adopted by national education and public sector institutions across Brazil.",
    link: "#",
    linkLabel: "Get the Book →",
    featured: false,
  },
  {
    type: "Certification",
    badge: "Coming in 30 days",
    title: "AIxp Certification",
    meta: "AIxp Platform · Online · Self-paced",
    desc: "Professional certification in applied AI governance and implementation — bridging the gap between technical AI skills and enterprise management.",
    link: "#",
    linkLabel: "Join Waitlist →",
    featured: false,
  },
  {
    type: "Program",
    badge: "Coming Soon",
    title: "G3 AI Full Program",
    meta: "G3AI.global · Cohort-based",
    desc: "The complete G3 AI Framework program for executives, architects, and governance professionals ready to lead AI transformation at organizational scale.",
    link: "#",
    linkLabel: "Register Interest →",
    featured: false,
  },
];

export default function CasesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="products"
      ref={ref}
      style={{ background: "var(--bg-secondary)", position: "relative" }}
      className="section"
    >
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "500px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)" }} />

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
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <span style={{ width: "20px", height: "1px", background: "var(--accent-cyan)", display: "inline-block" }} />
            Books & Certifications
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1rem",
              maxWidth: "600px",
            }}
          >
            Knowledge built for{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "var(--gradient-hero)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              practitioners
            </em>
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: "520px" }}>
            Books, certifications and programs that deliver real frameworks — not theory. Built from 15 years of hands-on AI implementation and governance work.
          </p>
        </motion.div>

        {/* Products grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}
          className="products-grid"
        >
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <div
                className="glass-card"
                style={{
                  padding: "2rem",
                  borderRadius: "12px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  border: p.featured ? "1px solid rgba(99,102,241,0.35)" : "1px solid rgba(99,102,241,0.15)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = p.featured ? "rgba(99,102,241,0.35)" : "rgba(99,102,241,0.15)";
                }}
              >
                {/* Badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      padding: "0.2rem 0.7rem",
                      borderRadius: "100px",
                      background: "var(--accent)",
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-geist-mono)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {p.badge}
                  </span>
                  <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>
                    {p.type}
                  </span>
                </div>

                {/* Title + meta */}
                <div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.3rem", lineHeight: 1.3 }}>
                    {p.title}
                  </h3>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>
                    {p.meta}
                  </div>
                </div>

                {/* Desc */}
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.65, flexGrow: 1 }}>
                  {p.desc}
                </p>

                {/* CTA */}
                <a
                  href={p.link}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.6rem 1.25rem",
                    borderRadius: "8px",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    width: "fit-content",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  }}
                >
                  {p.linkLabel}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
