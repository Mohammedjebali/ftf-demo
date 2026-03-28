"use client";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const RED = "#c8102e";
const DARK = "#050505";
const CARD = "#0d0d0d";
const BORDER = "#1a1a1a";
const TEXT = "#f0ece4";
const MUTED = "#5a5a5a";
const GOLD = "#e8c547";

const CLUBS: Record<string, {
  name: string; short: string; city: string; founded: number; stadium: string;
  cap: number; league: string; region: string; titles: number; color: string;
  logo?: string; website?: string; president?: string; coach?: string;
  bio?: string; palmares?: string[]; players?: { name: string; pos: string; nat: string }[];
}> = {
  "esperance-sportive-de-tunis": {
    name: "Espérance Sportive de Tunis", short: "EST", city: "Tunis", founded: 1919,
    stadium: "Stade Olympique de Radès", cap: 60000, league: "Ligue 1", region: "Grand Tunis",
    titles: 32, color: RED, logo: "https://upload.wikimedia.org/wikipedia/en/f/fb/Esp%C3%A9rance_Sportive_de_Tunis_logo.png",
    website: "est.org.tn", president: "Hamdi Meddeb", coach: "Maher Kanzari",
    bio: "L'Espérance Sportive de Tunis est le club le plus titré du football tunisien et africain. Fondée en 1919, l'EST a remporté 32 championnats nationaux et 4 Ligues des Champions africaines. Surnommé 'Le Sang et l'Or', le club est basé à Tunis et joue au Stade Olympique de Radès.",
    palmares: ["32× Champion de Tunisie", "4× Ligue des Champions CAF", "7× Coupe de Tunisie", "6× Supercoupe de Tunisie"],
    players: [
      { name: "Mouez Hassen", pos: "GK", nat: "🇹🇳" },
      { name: "Anis Badri", pos: "MF", nat: "🇹🇳" },
      { name: "Yohan Boli", pos: "FW", nat: "🇨🇮" },
      { name: "Mohamed Ali Ben Romdhane", pos: "MF", nat: "🇹🇳" },
      { name: "Rodrigue Bongongui", pos: "FW", nat: "🇨🇬" },
    ]
  },
  "club-africain": {
    name: "Club Africain", short: "CA", city: "Tunis", founded: 1920,
    stadium: "Stade Olympique de Radès", cap: 60000, league: "Ligue 1", region: "Grand Tunis",
    titles: 12, color: "#e8c547", logo: "https://upload.wikimedia.org/wikipedia/en/c/c5/ClubAfricainlogo.gif",
    website: "clubafricain.tn", president: "Walid Louhichi", coach: "Nabil Maaloul",
    bio: "Le Club Africain est l'un des clubs historiques du football tunisien, fondé en 1920. Grand rival de l'Espérance ST dans le derby tunisois, le club a remporté 12 championnats nationaux et reste l'un des plus supportés du pays.",
    palmares: ["12× Champion de Tunisie", "4× Coupe de Tunisie", "1× Coupe des vainqueurs de coupe CAF"],
    players: [
      { name: "Moez Ben Chérifia", pos: "GK", nat: "🇹🇳" },
      { name: "Taha Yassine Khenissi", pos: "FW", nat: "🇹🇳" },
      { name: "Ferjani Sassi", pos: "MF", nat: "🇹🇳" },
    ]
  },
  "etoile-sportive-du-sahel": {
    name: "Étoile Sportive du Sahel", short: "ESS", city: "Sousse", founded: 1925,
    stadium: "Stade Olympique de Sousse", cap: 22000, league: "Ligue 1", region: "Centre-Est",
    titles: 14, color: "#e8c547", logo: "/logo-ess.png",
    president: "Mounir Agrebi", coach: "Khaled Ben Yahia",
    bio: "Fondée en 1925 à Sousse, l'Étoile Sportive du Sahel est l'un des clubs les plus titrés de l'Afrique du Nord. Elle a remporté 2 Ligues des Champions CAF et est l'un des clubs tunisiens les plus performants sur la scène continentale.",
    palmares: ["14× Champion de Tunisie", "2× Ligue des Champions CAF", "6× Coupe de Tunisie", "1× Supercoupe de la CAF"],
    players: [
      { name: "Marwan Chargui", pos: "GK", nat: "🇹🇳" },
      { name: "Mohamed Ali Yaâkoubi", pos: "DF", nat: "🇹🇳" },
      { name: "Franck Kom", pos: "MF", nat: "🇨🇲" },
    ]
  },
  "club-sportif-sfaxien": {
    name: "Club Sportif Sfaxien", short: "CSS", city: "Sfax", founded: 1928,
    stadium: "Stade Taïeb Mhiri", cap: 22000, league: "Ligue 1", region: "Sud-Est",
    titles: 8, color: "#e8c547", logo: "/logo-css.png",
    president: "Imed Meddeb", coach: "Abdelmajid Chetali",
    bio: "Le Club Sportif Sfaxien, fondé en 1928, est le club le plus représentatif de la ville de Sfax et du sud tunisien. Avec 8 titres nationaux et 2 finales de Ligue des Champions CAF, le CSS est une institution du football tunisien.",
    palmares: ["8× Champion de Tunisie", "5× Coupe de Tunisie", "2× Finaliste Ligue des Champions CAF"],
    players: [
      { name: "Aymen Balbouli", pos: "GK", nat: "🇹🇳" },
      { name: "Bilel Ifa", pos: "DF", nat: "🇹🇳" },
      { name: "Ghaylène Chaalali", pos: "MF", nat: "🇹🇳" },
    ]
  },
};

function slugify(name: string) {
  return name.toLowerCase().replace(/[éèê]/g, "e").replace(/[àâ]/g, "a").replace(/[ùû]/g, "u").replace(/[î]/g, "i").replace(/[ô]/g, "o").replace(/[ç]/g, "c").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export default function ClubDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const club = CLUBS[slug as string];

  if (!club) {
    return (
      <div style={{ background: DARK, minHeight: "100vh" }}>
        <Navbar />
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
          <p style={{ color: MUTED, fontSize: "16px", marginBottom: "20px" }}>Club introuvable</p>
          <a href="/clubs" style={{ color: RED, fontSize: "14px" }}>← Retour aux clubs</a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ background: DARK, minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${club.color}18, transparent 60%), #080808`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "20px", fontSize: "11px", color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            <a href="/" style={{ color: MUTED, textDecoration: "none" }}>FTF</a>
            <span>›</span>
            <a href="/clubs" style={{ color: MUTED, textDecoration: "none" }}>Clubs</a>
            <span>›</span>
            <span style={{ color: TEXT }}>{club.short}</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
            {club.logo ? (
              <div style={{ width: "100px", height: "100px", borderRadius: "16px", background: "#111", border: `1px solid ${club.color}44`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: "10px" }}>
                <img src={club.logo} alt={club.short} style={{ width: "80px", height: "80px", objectFit: "contain" }} />
              </div>
            ) : (
              <div style={{ width: "100px", height: "100px", borderRadius: "16px", background: `${club.color}22`, border: `2px solid ${club.color}44`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: club.color, fontWeight: 900, fontSize: "24px" }}>{club.short}</span>
              </div>
            )}
            <div>
              <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 900, color: TEXT, marginBottom: "6px", letterSpacing: "-0.02em" }}>{club.name}</h1>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", fontSize: "13px", color: MUTED }}>
                <span>📍 {club.city}</span>
                <span>🏟 {club.stadium}</span>
                <span>🗓 Fondé en {club.founded}</span>
                <span style={{ color: club.color, fontWeight: 700 }}>🏆 {club.titles} titres</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px", display: "grid", gridTemplateColumns: "1fr 320px", gap: "32px", alignItems: "start" }}>

        {/* Left */}
        <div>
          {/* Bio */}
          {club.bio && (
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "16px", padding: "24px", marginBottom: "24px" }}>
              <h2 style={{ color: TEXT, fontSize: "16px", fontWeight: 700, marginBottom: "14px" }}>À propos</h2>
              <p style={{ color: "#8a7e70", fontSize: "14px", lineHeight: 1.8 }}>{club.bio}</p>
            </div>
          )}

          {/* Palmarès */}
          {club.palmares && (
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "16px", padding: "24px", marginBottom: "24px" }}>
              <h2 style={{ color: TEXT, fontSize: "16px", fontWeight: 700, marginBottom: "16px" }}>Palmarès</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {club.palmares.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", background: "#111", borderRadius: "10px", border: `1px solid ${BORDER}` }}>
                    <span style={{ fontSize: "18px" }}>🏆</span>
                    <span style={{ color: "#c0b8ac", fontSize: "14px" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Squad */}
          {club.players && club.players.length > 0 && (
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "16px", padding: "24px" }}>
              <h2 style={{ color: TEXT, fontSize: "16px", fontWeight: 700, marginBottom: "16px" }}>Joueurs notables</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                {club.players.map((p, i) => (
                  <div key={i} style={{ background: "#111", borderRadius: "10px", padding: "14px", border: `1px solid ${BORDER}`, textAlign: "center" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: `${club.color}22`, border: `1px solid ${club.color}33`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", fontSize: "18px" }}>
                      {p.nat}
                    </div>
                    <div style={{ color: TEXT, fontSize: "12px", fontWeight: 600 }}>{p.name}</div>
                    <div style={{ color: MUTED, fontSize: "11px", marginTop: "4px" }}>{p.pos}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Info card */}
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "16px", padding: "20px" }}>
            <h3 style={{ color: TEXT, fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>Informations</h3>
            {[
              { label: "Ligue", value: club.league },
              { label: "Région", value: club.region },
              { label: "Stade", value: club.stadium },
              { label: "Capacité", value: `${club.cap.toLocaleString()} places` },
              { label: "Fondé", value: club.founded },
              ...(club.president ? [{ label: "Président", value: club.president }] : []),
              ...(club.coach ? [{ label: "Entraîneur", value: club.coach }] : []),
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: `1px solid #111`, fontSize: "13px" }}>
                <span style={{ color: MUTED }}>{item.label}</span>
                <span style={{ color: TEXT, fontWeight: 500, textAlign: "right", maxWidth: "55%" }}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Back */}
          <a href="/clubs" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", color: MUTED, fontSize: "13px", textDecoration: "none", transition: "border-color 0.2s" }}
            onMouseOver={e => (e.currentTarget.style.borderColor = RED)} onMouseOut={e => (e.currentTarget.style.borderColor = BORDER)}>
            ← Tous les clubs
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
