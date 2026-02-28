"use client";

const items = [
  "AI Governance",
  "G³ AI Framework",
  "Packt Publishing UK",
  "Certified in the Governance of Enterprise IT (CGEIT) · ISACA (Information Systems Audit and Control Association)",
  "United Nations Economic and Social Council (UN ECOSOC) Board",
  "Programme for International Student Assessment (PISA) — OECD Governing Board",
  "AI4XP Certification",
  "Olyven · California",
];

export default function ProblemSection() {
  const doubled = [...items, ...items];

  return (
    <section
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid rgba(99,102,241,0.12)",
        borderBottom: "1px solid rgba(99,102,241,0.12)",
        overflow: "hidden",
        padding: "1.5rem 0",
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.25rem",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent-cyan)",
                fontFamily: "var(--font-geist-mono)",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "rgba(99,102,241,0.45)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
