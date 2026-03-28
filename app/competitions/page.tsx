"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const RED = "#c8102e";
const DARK = "#050505";
const BORDER = "#1a1a1a";
const TEXT = "#f0ece4";
const MUTED = "#5a5a5a";
const ACCENT = "#e8c547";

const COMPETITIONS = [
  {
    name: "Ligue 1 Professionnelle",
    short: "L1",
    teams: 16,
    champion: "Espérance ST",
    status: "En cours",
    matchday: "J26/30",
    icon: "🏆",
    color: RED,
    desc: "Le championnat d'élite du football tunisien",
    href: "/ligue1",
  },
  {
    name: "Ligue 2 Nationale",
    short: "L2",
    teams: 16,
    champion: "JS Kélibia",
    status: "En cours",
    matchday: "J22/30",
    icon: "🥈",
    color: "#60a5fa",
    desc: "Deuxième division du football professionnel",
    href: "#",
  },
  {
    name: "Ligue 3 Régionale",
    short: "L3",
    teams: 48,
    champion: "ES Métlaoui B",
    status: "En cours",
    matchday: "J18/26",
    icon: "⚽",
    color: "#4ade80",
    desc: "Trois groupes régionaux: Nord, Centre, Sud",
    href: "#",
  },
  {
    name: "Coupe de Tunisie",
    short: "CUP",
    teams: 64,
    champion: "Club Africain",
    status: "En cours",
    matchday: "8e de finale",
    icon: "🏅",
    color: ACCENT,
    desc: "La coupe nationale, ouverte à tous les clubs affiliés",
    href: "#",
  },
  {
    name: "Coupe de Ligue",
    short: "CL",
    teams: 16,
    champion: "Espérance ST",
    status: "Terminé",
    matchday: "Finale",
    icon: "🥇",
    color: "#f97316",
    desc: "Compétition réservée aux clubs de Ligue 1",
    href: "#",
  },
  {
    name: "Championnat Futsal",
    short: "FS",
    teams: 12,
    champion: "AS Police",
    status: "En cours",
    matchday: "J15/22",
    icon: "🏟️",
    color: "#a855f7",
    desc: "Le championnat national de futsal masculin",
    href: "#",
  },
  {
    name: "Championnat U21",
    short: "U21",
    teams: 14,
    champion: "Espérance ST",
    status: "En cours",
    matchday: "J20/26",
    icon: "🌟",
    color: "#34d399",
    desc: "Championnat espoirs pour les joueurs de moins de 21 ans",
    href: "#",
  },
  {
    name: "Championnat U17",
    short: "U17",
    teams: 24,
    champion: "Étoile du Sahel",
    status: "En cours",
    matchday: "J16/22",
    icon: "⭐",
    color: "#38bdf8",
    desc: "Formation des jeunes talents nationaux",
    href: "#",
  },
  {
    name: "Championnat Féminin",
    short: "FEM",
    teams: 10,
    champion: "AS Marsa Femmes",
    status: "En cours",
    matchday: "J14/18",
    icon: "👟",
    color: "#ec4899",
    desc: "Le championnat national féminin de football",
    href: "#",
  },
  {
    name: "Ligues Régionales",
    short: "LR",
    teams: 200,
    champion: "Voir régions",
    status: "En cours",
    matchday: "Variable",
    icon: "🗺️",
    color: "#fb923c",
    desc: "24 ligues régionales couvrant tout le territoire national",
    href: "#",
  },
  {
    name: "Coupe Arabe",
    short: "CA",
    teams: 32,
    champion: "Espérance ST",
    status: "Terminé",
    matchday: "Saison 2024",
    icon: "🌍",
    color: "#c084fc",
    desc: "Représentation tunisienne en coupe arabe",
    href: "#",
  },
  {
    name: "CAF Champions League",
    short: "CAF",
    teams: 16,
    champion: "Espérance ST (finalist)",
    status: "En cours",
    matchday: "Phase de groupes",
    icon: "🌐",
    color: "#f59e0b",
    desc: "Compétition continentale africaine",
    href: "#",
  },
];

export default function CompetitionsPage() {
  const enCours = COMPETITIONS.filter(c => c.status === "En cours");
  const termines = COMPETITIONS.filter(c => c.status === "Terminé");

  return (
    <div style={{ background: DARK, minHeight: "100vh" }}>
      <Navbar />

      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ fontSize: "11px", color: RED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>FTF</span>
            <span style={{ color: MUTED }}>›</span>
            <span style={{ fontSize: "11px", color: MUTED, textTransform: "uppercase", letterSpacing: "0.1em" }}>Compétitions</span>
          </div>
          <h1 className="fade-up" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: TEXT, letterSpacing: "-0.03em", marginBottom: "8px" }}>
            Toutes les compétitions
          </h1>
          <p style={{ color: MUTED, fontSize: "15px" }}>Saison 2025–2026 · {COMPETITIONS.length} compétitions organisées par la FTF</p>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "48px" }}>
          {[
            { label: "Compétitions actives", value: enCours.length, color: "#4ade80" },
            { label: "Compétitions terminées", value: termines.length, color: MUTED },
            { label: "Clubs participants", value: "450+", color: ACCENT },
            { label: "Matchs par saison", value: "2400+", color: "#60a5fa" },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: "20px", textAlign: "center" }}>
              <div style={{ color: s.color, fontWeight: 900, fontSize: "28px", marginBottom: "6px" }}>{s.value}</div>
              <div style={{ color: MUTED, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* En cours */}
        <h2 style={{ color: TEXT, fontSize: "18px", fontWeight: 800, marginBottom: "20px" }}>
          Compétitions en cours
          <span style={{ marginLeft: "10px", fontSize: "12px", background: "rgba(74,222,128,0.15)", color: "#4ade80", padding: "3px 10px", borderRadius: "100px", fontWeight: 600, verticalAlign: "middle" }}>
            {enCours.length}
          </span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px", marginBottom: "48px" }}>
          {enCours.map((c, i) => (
            <a key={i} href={c.href} className="card" style={{ display: "block", overflow: "hidden", textDecoration: "none" }}>
              <div style={{ height: "3px", background: `linear-gradient(90deg, ${c.color}, transparent)` }} />
              <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "28px" }}>{c.icon}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: "14px" }}>{c.name}</div>
                      <div style={{ color: MUTED, fontSize: "11px" }}>{c.desc}</div>
                    </div>
                  </div>
                  <span style={{ fontSize: "10px", background: "rgba(74,222,128,0.15)", color: "#4ade80", padding: "3px 8px", borderRadius: "100px", fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>
                    ● En cours
                  </span>
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{ background: "#111", borderRadius: "6px", padding: "5px 10px", fontSize: "11px", color: MUTED }}>
                    <span style={{ color: c.color, fontWeight: 700 }}>{c.teams}</span> équipes
                  </span>
                  <span style={{ background: "#111", borderRadius: "6px", padding: "5px 10px", fontSize: "11px", color: MUTED }}>
                    {c.matchday}
                  </span>
                  <span style={{ background: "#111", borderRadius: "6px", padding: "5px 10px", fontSize: "11px", color: MUTED }}>
                    🏆 {c.champion}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Terminés */}
        <h2 style={{ color: TEXT, fontSize: "18px", fontWeight: 800, marginBottom: "20px" }}>
          Compétitions terminées
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
          {termines.map((c, i) => (
            <div key={i} className="card" style={{ overflow: "hidden", opacity: 0.7 }}>
              <div style={{ height: "3px", background: `linear-gradient(90deg, ${MUTED}, transparent)` }} />
              <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "28px" }}>{c.icon}</span>
                    <div>
                      <div style={{ color: TEXT, fontWeight: 700, fontSize: "14px" }}>{c.name}</div>
                      <div style={{ color: MUTED, fontSize: "11px" }}>{c.desc}</div>
                    </div>
                  </div>
                  <span style={{ fontSize: "10px", background: "rgba(255,255,255,0.05)", color: MUTED, padding: "3px 8px", borderRadius: "100px", fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0 }}>
                    Terminé
                  </span>
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{ background: "#111", borderRadius: "6px", padding: "5px 10px", fontSize: "11px", color: MUTED }}>
                    {c.teams} équipes
                  </span>
                  <span style={{ background: "#111", borderRadius: "6px", padding: "5px 10px", fontSize: "11px", color: MUTED }}>
                    🏆 {c.champion}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
