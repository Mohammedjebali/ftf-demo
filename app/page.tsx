"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RED = "#c8102e";
const DARK = "#050505";
const CARD = "#0d0d0d";
const BORDER = "#1a1a1a";
const TEXT = "#f0ece4";
const MUTED = "#5a5a5a";
const ACCENT = "#e8c547"; // gold for scores

// Mock data
const RESULTS = [
  { home: "Espérance ST", homeScore: 2, away: "Club Africain", awayScore: 1, minute: "FT", date: "28 Mar" },
  { home: "Sfaxien", homeScore: 0, away: "Étoile Sahel", awayScore: 0, minute: "FT", date: "28 Mar" },
  { home: "CS Hammam-Lif", homeScore: 1, away: "AS Marsa", awayScore: 3, minute: "FT", date: "27 Mar" },
  { home: "US Monastir", homeScore: 2, away: "AS Gabès", awayScore: 2, minute: "FT", date: "27 Mar" },
];

const STANDINGS = [
  { pos: 1, club: "Espérance ST", p: 26, pts: 62, gd: "+31" },
  { pos: 2, club: "Étoile du Sahel", p: 26, pts: 54, gd: "+18" },
  { pos: 3, club: "Club Sfaxien", p: 26, pts: 48, gd: "+12" },
  { pos: 4, club: "US Monastir", p: 26, pts: 44, gd: "+8" },
  { pos: 5, club: "Club Africain", p: 26, pts: 42, gd: "+5" },
  { pos: 6, club: "AS Marsa", p: 26, pts: 38, gd: "+2" },
];

const NEWS = [
  { tag: "Sélection Nationale", title: "Les Aigles de Carthage en stage de préparation avant le CHAN", date: "28 Mar 2026", img: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80" },
  { tag: "Ligue 1", title: "L'Espérance solide en tête, le derby décisif approche", date: "27 Mar 2026", img: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&q=80" },
  { tag: "Jeunes", title: "Lancement du programme national de détection des talents U17", date: "26 Mar 2026", img: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=600&q=80" },
  { tag: "Officiel", title: "FTF: Appel d'offres pour la rénovation du Centre Technique", date: "24 Mar 2026", img: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&q=80" },
];

const UPCOMING = [
  { date: "29 Mar", time: "17:00", home: "CA Bizertin", away: "US Tataouine", comp: "Ligue 1" },
  { date: "29 Mar", time: "19:30", home: "Espérance ST", away: "Étoile Sahel", comp: "Ligue 1" },
  { date: "30 Mar", time: "16:00", home: "Club Africain", away: "JS Kairouan", comp: "Ligue 1" },
];



export default function HomePage() {
  return (
    <div style={{ background: DARK, minHeight: "100vh" }}>

      <Navbar />

      {/* Hero */}
      <section style={{ position: "relative", minHeight: "520px", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/rades-match.jpg)", backgroundSize: "cover", backgroundPosition: "center top", filter: "brightness(0.3)" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, rgba(200,16,46,0.15) 0%, transparent 60%)` }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "200px", background: `linear-gradient(to top, ${DARK}, transparent)` }} />

        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "80px 24px", width: "100%" }}>
          <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(200,16,46,0.15)", border: "1px solid rgba(200,16,46,0.3)", borderRadius: "100px", padding: "5px 14px", marginBottom: "24px" }}>
            <img src="https://flagcdn.com/w20/tn.png" alt="TN" style={{ height: "12px", borderRadius: "2px" }} />
            <span style={{ fontSize: "11px", color: RED, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Saison 2024–2025</span>
          </div>
          <h1 className="fade-up-2" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 900, color: TEXT, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "20px", maxWidth: "700px" }}>
            Le football tunisien<br />
            <span style={{ background: `linear-gradient(135deg, ${RED}, #ff4060)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>au sommet de l'Afrique</span>
          </h1>
          <p className="fade-up-3" style={{ color: "#6a6a6a", fontSize: "16px", maxWidth: "480px", lineHeight: 1.7, marginBottom: "36px" }}>
            Résultats, classements, équipe nationale et toute l'actualité de la Ligue 1 Professionnelle.
          </p>
          <div className="fade-up-3" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#results" className="btn btn-primary" style={{ fontSize: "14px", padding: "13px 28px" }}>Voir les résultats</a>
            <a href="#standings" className="btn btn-ghost" style={{ fontSize: "14px", padding: "13px 28px" }}>Classement L1</a>
          </div>
        </div>
      </section>

      {/* Live results bar */}
      <div id="results" style={{ background: "#080808", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <h2 style={{ color: TEXT, fontSize: "14px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>Derniers Résultats</h2>
            <a href="/ligue1" style={{ color: MUTED, fontSize: "12px" }}>Tous les résultats →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "10px" }}>
            {RESULTS.map((r, i) => (
              <div key={i} className="card" style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "10px", color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  <span>Ligue 1</span>
                  <span style={{ color: r.minute === "FT" ? "#4ade80" : RED, fontWeight: 700 }}>{r.minute === "FT" ? "Terminé" : `${r.minute}'`}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ color: TEXT, fontSize: "13px", fontWeight: 600, flex: 1 }}>{r.home}</span>
                  <div style={{ display: "flex", gap: "6px", alignItems: "center", padding: "4px 12px", background: "#111", borderRadius: "8px", border: `1px solid ${BORDER}` }}>
                    <span style={{ color: ACCENT, fontWeight: 900, fontSize: "15px" }}>{r.homeScore}</span>
                    <span style={{ color: MUTED, fontSize: "11px" }}>–</span>
                    <span style={{ color: ACCENT, fontWeight: 900, fontSize: "15px" }}>{r.awayScore}</span>
                  </div>
                  <span style={{ color: TEXT, fontSize: "13px", fontWeight: 600, flex: 1, textAlign: "right" }}>{r.away}</span>
                </div>
                <div style={{ fontSize: "11px", color: MUTED, textAlign: "center" }}>{r.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 24px", display: "grid", gridTemplateColumns: "1fr 340px", gap: "40px" }} className="mobile-col">

        {/* Left: News */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
            <h2 style={{ color: TEXT, fontSize: "18px", fontWeight: 800 }}>Actualités</h2>
            <a href="#" style={{ color: MUTED, fontSize: "13px" }}>Tout voir →</a>
          </div>

          {/* Featured news */}
          <a href="#" style={{ display: "block", marginBottom: "20px", borderRadius: "16px", overflow: "hidden", border: `1px solid ${BORDER}`, transition: "border-color 0.2s" }}
            onMouseOver={e => (e.currentTarget.style.borderColor = "rgba(200,16,46,0.4)")}
            onMouseOut={e => (e.currentTarget.style.borderColor = BORDER)}>
            <div style={{ position: "relative", aspectRatio: "16/7", overflow: "hidden" }}>
              <img src={NEWS[0].img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 40%, transparent)" }} />
              <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
                <span style={{ display: "inline-block", background: RED, color: "#fff", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", marginBottom: "10px" }}>{NEWS[0].tag}</span>
                <h3 style={{ color: TEXT, fontSize: "20px", fontWeight: 800, lineHeight: 1.3 }}>{NEWS[0].title}</h3>
                <p style={{ color: "#7a7a7a", fontSize: "12px", marginTop: "6px" }}>{NEWS[0].date}</p>
              </div>
            </div>
          </a>

          {/* News grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px" }} className="mobile-grid-1">
            {NEWS.slice(1).map((n, i) => (
              <a key={i} href="#" className="card" style={{ display: "block", overflow: "hidden" }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,16,46,0.3)"; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = BORDER; }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img src={n.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s" }}
                    onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")} />
                </div>
                <div style={{ padding: "14px" }}>
                  <span style={{ fontSize: "10px", color: RED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>{n.tag}</span>
                  <p style={{ color: TEXT, fontSize: "13px", fontWeight: 600, marginTop: "6px", lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{n.title}</p>
                  <p style={{ color: MUTED, fontSize: "11px", marginTop: "8px" }}>{n.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* Standings */}
          <div id="standings" className="card" style={{ padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <h3 style={{ color: TEXT, fontSize: "14px", fontWeight: 700 }}>Classement Ligue 1</h3>
              <span style={{ color: MUTED, fontSize: "12px" }}>J26</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "28px 1fr 32px 40px", gap: "0", fontSize: "11px", color: MUTED, padding: "0 0 8px", borderBottom: `1px solid ${BORDER}`, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              <span>#</span><span>Club</span><span style={{ textAlign: "center" }}>J</span><span style={{ textAlign: "center" }}>Pts</span>
            </div>
            {STANDINGS.map((s, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "28px 1fr 32px 40px", alignItems: "center", padding: "9px 0", borderBottom: i < STANDINGS.length - 1 ? `1px solid #111` : "none" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: i < 2 ? "#4ade80" : i < 4 ? ACCENT : MUTED }}>{s.pos}</span>
                <span style={{ fontSize: "13px", color: TEXT, fontWeight: i === 0 ? 700 : 400 }}>{s.club}</span>
                <span style={{ fontSize: "12px", color: MUTED, textAlign: "center" }}>{s.p}</span>
                <span style={{ fontSize: "13px", fontWeight: 800, color: TEXT, textAlign: "center" }}>{s.pts}</span>
              </div>
            ))}
            <a href="/ligue1" style={{ display: "block", textAlign: "center", marginTop: "14px", fontSize: "12px", color: RED, fontWeight: 600 }}>Classement complet →</a>
          </div>

          {/* Upcoming */}
          <div className="card" style={{ padding: "20px" }}>
            <h3 style={{ color: TEXT, fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>Prochains Matchs</h3>
            {UPCOMING.map((m, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 0", borderBottom: i < UPCOMING.length - 1 ? `1px solid #111` : "none" }}>
                <div style={{ flexShrink: 0, textAlign: "center", minWidth: "40px" }}>
                  <div style={{ fontSize: "10px", color: MUTED }}>{m.date}</div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: ACCENT }}>{m.time}</div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "12px", color: TEXT, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.home}</div>
                  <div style={{ fontSize: "11px", color: MUTED }}>vs {m.away}</div>
                </div>
                <span style={{ fontSize: "10px", color: MUTED, background: "#111", padding: "3px 8px", borderRadius: "4px", whiteSpace: "nowrap" }}>L1</span>
              </div>
            ))}
          </div>

          {/* National team */}
          <div style={{ borderRadius: "14px", overflow: "hidden", position: "relative", aspectRatio: "16/9", background: "#0a0a0a" }}>
            <img src="/rades-match.jpg" alt="Stade de Radès" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(200,16,46,0.3) 50%, transparent 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "20px" }}>
              <img src="https://upload.wikimedia.org/wikipedia/en/c/c4/Tunisia_national_football_team_logo.png" alt="Tunisia" style={{ height: "36px", width: "36px", objectFit: "contain", marginBottom: "8px" }} onError={(e) => { e.currentTarget.style.display = "none"; }} />
              <p style={{ color: "#fff", fontWeight: 800, fontSize: "16px", lineHeight: 1.2 }}>Aigles de Carthage</p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", marginTop: "4px" }}>Sélection Nationale Senior · #47 FIFA</p>
              <a href="/selection" className="btn btn-primary" style={{ alignSelf: "flex-start", marginTop: "12px", padding: "8px 16px", fontSize: "12px" }}>Découvrir →</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}
