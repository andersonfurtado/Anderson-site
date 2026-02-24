"use client";

const footerLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/andersonfurtado" },
  { label: "G3AI.global", href: "https://g3ai.global" },
  { label: "Olyven", href: "https://olyven.co" },
  { label: "AIxp", href: "https://aixp.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid rgba(99,102,241,0.12)",
        padding: "3rem clamp(1.25rem, 5vw, 4rem)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "0.35rem",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "var(--accent)" }}>AF</span>
            {" "}Anderson Furtado
          </div>
          <div
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            AI Governance & Intelligent Systems Architecture · Global · AI & Education
          </div>
        </div>

        {/* Links */}
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {footerLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  transition: "color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--accent-cyan)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <div
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.06em",
            color: "rgba(148,163,184,0.3)",
          }}
        >
          © {year} Anderson Furtado
        </div>
      </div>
    </footer>
  );
}
