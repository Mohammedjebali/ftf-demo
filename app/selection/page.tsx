"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const RED = "#c8102e";
const DARK = "#050505";
const CARD = "#0d0d0d";
const BORDER = "#1a1a1a";
const TEXT = "#f0ece4";
const MUTED = "#5a5a5a";
const ACCENT = "#e8c547";

const SQUAD = [
  { num: 1, name: "Bechir Ben Said", pos: "GK", club: "Espérance ST", caps: 68, nat: "🇹🇳" },
  { num: 12, name: "Moez Ben Cherifia", pos: "GK", club: "CS Sfaxien", caps: 22, nat: "🇹🇳" },
  { num: 23, name: "Farouk Ben Mustapha", pos: "GK", club: "Al Qadsiah (KSA)", caps: 54, nat: "🇹🇳" },
  { num: 2, name: "Montassar Talbi", pos: "DC", club: "Lorient (FRA)", caps: 41, nat: "🇹🇳" },
  { num: 3, name: "Dylan Bronn", pos: "DC", club: "Salernitana (ITA)", caps: 39, nat: "🇹🇳" },
  { num: 5, name: "Nader Ghandri", pos: "DC", club: "Genoa (ITA)", caps: 55, nat: "🇹🇳" },
  { num: 6, name: "Ali Abdi", pos: "LAT", club: "Watford (ENG)", caps: 32, nat: "🇹🇳" },
  { num: 22, name: "Mohamed Dräger", pos: "RAT", club: "SC Paderborn (GER)", caps: 28, nat: "🇹🇳" },
  { num: 4, name: "Ellyes Skhiri", pos: "MDC", club: "Eintracht Frankfurt (GER)", caps: 62, nat: "🇹🇳" },
  { num: 8, name: "Ferjani Sassi", pos: "MC", club: "Étoile du Sahel", caps: 87, nat: "🇹🇳" },
  { num: 14, name: "Hannibal Mejbri", pos: "MC", club: "Burnley (ENG)", caps: 33, nat: "🇹🇳" },
  { num: 15, name: "Anis Ben Slimane", pos: "MC", club: "Brøndby IF (DEN)", caps: 24, nat: "🇹🇳" },
  { num: 7, name: "Naïm Sliti", pos: "AIG", club: "Brest (FRA)", caps: 58, nat: "🇹🇳" },
  { num: 11, name: "Wajdi Mourou", pos: "AD", club: "Espérance ST", caps: 44, nat: "🇹🇳" },
  { num: 17, name: "Saîf-Eddine Khaoui", pos: "ATT", club: "Troyes (FRA)", caps: 37, nat: "🇹🇳" },
  { num: 10, name: "Youssef Msakni", pos: "AIG", club: "Al-Arabi SC (QAT)", caps: 109, nat: "🇹🇳" },
  { num: 9, name: "Taha Yassine Khenissi", pos: "ATT", club: "Espérance ST", caps: 71, nat: "🇹🇳" },
  { num: 19, name: "Hamza Rafia", pos: "MC", club: "Standard Liège (BEL)", caps: 19, nat: "🇹🇳" },
  { num: 20, name: "Seifeddine Jaziri", pos: "ATT", club: "Wydad AC (MAR)", caps: 45, nat: "🇹🇳" },
  { num: 16, name: "Ghaylane Chaalali", pos: "MG", club: "CS Sfaxien", caps: 28, nat: "🇹🇳" },
  { num: 21, name: "Mohamed Ali Ben Romdhane", pos: "ATT", club: "US Monastir", caps: 16, nat: "🇹🇳" },
  { num: 18, name: "Ismaïl Bennacer", pos: "MDC", club: "AC Milan (ITA)", caps: 38, nat: "🇩🇿" },
];

const RESULTS = [
  { type: "Qualification CAN", home: "Tunisie", hs: 2, as_: 0, away: "Namibie", date: "20 Mar 2026", result: "V" },
  { type: "Qualification CAN", home: "Tunisie", hs: 1, as_: 1, away: "Guinée", date: "15 Mar 2026", result: "N" },
  { type: "Amical", home: "Sénégal", hs: 1, as_: 2, away: "Tunisie", date: "28 Fév 2026", result: "V" },
  { type: "CAN 2025", home: "Tunisie", hs: 1, as_: 0, away: "Libye", date: "20 Jan 2026", result: "V" },
  { type: "CAN 2025", home: "Tunisie", hs: 2, as_: 2, away: "Nigeria", date: "16 Jan 2026", result: "N" },
];

const UPCOMING = [
  { comp: "Qualification CAN", home: "Guinée", away: "Tunisie", date: "2 Juin 2026", time: "20:00" },
  { comp: "Qualification CAN", home: "Tunisie", away: "Namibie", date: "6 Juin 2026", time: "20:00" },
  { comp: "CHAN 2026", home: "Tunisie", away: "Maroc", date: "15 Juil 2026", time: "18:00" },
];

const posColor = (pos: string) => {
  if (pos === "GK") return "#60a5fa";
  if (["DC","LAT","RAT"].includes(pos)) return "#4ade80";
  if (["MDC","MC","MG","MD"].includes(pos)) return ACCENT;
  return "#f87171";
};

export default function SelectionPage() {
  return (
    <div style={{ background: DARK, minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ position: "relative", minHeight: "320px", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&q=80)", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.2)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(200,16,46,0.2) 0%, transparent 50%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "150px", background: `linear-gradient(to top, ${DARK}, transparent)` }} />
        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "0 24px 48px", width: "100%" }}>
          <img src="https://flagcdn.com/w80/tn.png" alt="Tunisie" style={{ height: "40px", marginBottom: "16px", borderRadius: "4px", boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }} />
          <h1 className="fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: TEXT, letterSpacing: "-0.03em" }}>
            Aigles de Carthage
          </h1>
          <p style={{ color: MUTED, fontSize: "15px", marginTop: "8px" }}>Sélection Nationale Senior · FIFA Ranking: #47 (Jan 2026)</p>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>
        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px", marginBottom: "48px" }}>
          {[
            { label: "Classement FIFA", value: "#47" },
            { label: "Participations CAN", value: "22" },
            { label: "Coupe du Monde", value: "6× qualifié" },
            { label: "Meilleur FIFA", value: "#14 (2018)" },
            { label: "Recordman caps", value: "R. Jaïdi (105)" },
            { label: "Meilleur buteur", value: "I. Jemâa (36)" },
            { label: "Titre CAN", value: "2004" },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: "20px", textAlign: "center" }}>
              <div style={{ color: ACCENT, fontWeight: 900, fontSize: "24px", marginBottom: "6px" }}>{s.value}</div>
              <div style={{ color: MUTED, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Coach card */}
        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ color: TEXT, fontSize: "18px", fontWeight: 800, marginBottom: "20px" }}>Staff technique</h2>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {[
              { role: "Sélectionneur National", name: "Sabri Lamouchi", since: "2024", nat: "🇹🇳" },
              { role: "Entraîneur adjoint", name: "Maher Kanzari", since: "2022", nat: "🇹🇳" },
              { role: "Entraîneur des gardiens", name: "Noureddine Diwan", since: "2022", nat: "🇹🇳" },
              { role: "Préparateur physique", name: "Khaled Ellafi", since: "2023", nat: "🇹🇳" },
            ].map((c, i) => (
              <div key={i} className="card" style={{ padding: "20px", flex: "1", minWidth: "200px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: `linear-gradient(135deg, ${RED}, #800020)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginBottom: "12px" }}>
                  {c.nat}
                </div>
                <div style={{ color: TEXT, fontWeight: 700, fontSize: "14px" }}>{c.name}</div>
                <div style={{ color: RED, fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "4px" }}>{c.role}</div>
                <div style={{ color: MUTED, fontSize: "11px", marginTop: "4px" }}>Depuis {c.since}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Matches */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "48px" }} className="mobile-col">
          {/* Recent results */}
          <div>
            <h2 style={{ color: TEXT, fontSize: "18px", fontWeight: 800, marginBottom: "20px" }}>Derniers résultats</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {RESULTS.map((r, i) => (
                <div key={i} className="card" style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{
                    width: "28px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center",
                    background: r.result === "V" ? "rgba(74,222,128,0.15)" : r.result === "N" ? "rgba(232,197,71,0.15)" : "rgba(248,113,113,0.15)",
                    color: r.result === "V" ? "#4ade80" : r.result === "N" ? ACCENT : "#f87171",
                    fontWeight: 800, fontSize: "12px", flexShrink: 0,
                  }}>{r.result}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: TEXT, fontSize: "13px", fontWeight: 600 }}>{r.home} {r.hs}–{r.as_} {r.away}</div>
                    <div style={{ color: MUTED, fontSize: "11px" }}>{r.type} · {r.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming */}
          <div>
            <h2 style={{ color: TEXT, fontSize: "18px", fontWeight: 800, marginBottom: "20px" }}>Prochains matchs</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {UPCOMING.map((u, i) => (
                <div key={i} className="card" style={{ padding: "14px 16px" }}>
                  <div style={{ color: MUTED, fontSize: "11px", marginBottom: "8px", display: "flex", justifyContent: "space-between" }}>
                    <span style={{ background: "rgba(200,16,46,0.15)", color: RED, padding: "2px 8px", borderRadius: "4px", fontWeight: 700 }}>{u.comp}</span>
                    <span>{u.date} · {u.time}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: "14px" }}>{u.home}</span>
                    <span style={{ color: MUTED, padding: "4px 10px", background: "#111", borderRadius: "6px", fontSize: "12px" }}>vs</span>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: "14px" }}>{u.away}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Squad */}
        <h2 style={{ color: TEXT, fontSize: "18px", fontWeight: 800, marginBottom: "20px" }}>Liste des joueurs</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px" }}>
          {SQUAD.map((p, i) => (
            <div key={i} className="card" style={{ padding: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: `linear-gradient(135deg, ${CARD}, #111)`, border: `2px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: TEXT, fontWeight: 800, fontSize: "14px" }}>{p.num}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: TEXT, fontWeight: 600, fontSize: "13px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}</div>
                <div style={{ color: MUTED, fontSize: "11px", marginTop: "2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.club}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                <span style={{ background: posColor(p.pos) + "22", color: posColor(p.pos), fontSize: "10px", fontWeight: 800, padding: "2px 7px", borderRadius: "4px" }}>{p.pos}</span>
                <span style={{ color: MUTED, fontSize: "11px" }}>{p.caps} sél.</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
