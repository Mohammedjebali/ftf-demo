"use client";
import { useState } from "react";

const RED = "#c8102e";
const DARK = "#050505";
const BORDER = "#1a1a1a";
const TEXT = "#f0ece4";
const MUTED = "#7a7a7a";

const TICKER_ITEMS = [
  "Espérance ST 2–1 Club Africain · FT",
  "Club Sfaxien 0–0 Étoile Sahel · FT",
  "US Monastir 2–2 AS Gabès · FT",
  "CS Hammam-Lif 1–3 AS Marsa · FT",
  "Prochain: 29 Mar — CA Bizertin vs US Tataouine 17:00",
];

const NAV_LINKS = [
  { label: "Ligue 1", href: "/ligue1" },
  { label: "Sélection", href: "/selection" },
  { label: "Compétitions", href: "/competitions" },
  { label: "Clubs", href: "/clubs" },
  { label: "Actualités", href: "/actualites" },
  { label: "Arbitrage", href: "/arbitrage" },
  { label: "À propos", href: "/a-propos" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Ticker */}
      <div style={{ background: RED, padding: "7px 0", overflow: "hidden" }}>
        <div className="ticker">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} style={{ whiteSpace: "nowrap", fontSize: "12px", fontWeight: 600, marginRight: "60px", color: "#fff", letterSpacing: "0.03em" }}>
              ⚽ {item}
            </span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav style={{ background: "rgba(5,5,5,0.97)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${BORDER}`, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/ftf-logo.jpg" alt="FTF Logo" style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover", border: "1.5px solid rgba(200,16,46,0.4)" }} />
            <div className="hide-mobile">
              <div style={{ fontSize: "14px", fontWeight: 800, color: TEXT, letterSpacing: "-0.01em" }}>Fédération Tunisienne</div>
              <div style={{ fontSize: "10px", color: MUTED, letterSpacing: "0.1em", textTransform: "uppercase" }}>de Football</div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            {NAV_LINKS.map(item => (
              <a key={item.href} href={item.href}
                style={{ color: MUTED, fontSize: "13px", fontWeight: 500, padding: "8px 12px", borderRadius: "8px", transition: "color 0.15s" }}
                onMouseOver={e => (e.currentTarget.style.color = TEXT)}
                onMouseOut={e => (e.currentTarget.style.color = MUTED)}>
                {item.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: RED, fontWeight: 700, background: "rgba(200,16,46,0.1)", padding: "5px 10px", borderRadius: "6px", border: `1px solid rgba(200,16,46,0.2)` }}>
              <span className="live-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: RED, display: "inline-block" }} />
              <span className="hide-mobile">EN DIRECT</span>
            </span>
            <a href="/appels-offres" className="btn btn-primary hide-mobile" style={{ fontSize: "12px", padding: "8px 16px" }}>Appels d'offres</a>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: "none", border: `1px solid ${BORDER}`, color: TEXT, borderRadius: "8px", padding: "8px 10px", cursor: "pointer", display: "none" }}
              className="mobile-menu-btn">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ borderTop: `1px solid ${BORDER}`, padding: "12px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {NAV_LINKS.map(item => (
              <a key={item.href} href={item.href}
                style={{ color: MUTED, fontSize: "14px", fontWeight: 500, padding: "10px 12px", borderRadius: "8px" }}
                onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
