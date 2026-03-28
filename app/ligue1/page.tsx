"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const RED = "#c8102e";
const DARK = "#050505";
const CARD = "#0d0d0d";
const BORDER = "#1a1a1a";
const TEXT = "#f0ece4";
const MUTED = "#5a5a5a";
const ACCENT = "#e8c547";

const STANDINGS = [
  { pos: 1, club: "Espérance ST", p: 26, g: 19, n: 5, l: 2, bp: 54, bc: 20, diff: "+34", pts: 62 },
  { pos: 2, club: "Étoile du Sahel", p: 26, g: 16, n: 6, l: 4, bp: 45, bc: 22, diff: "+23", pts: 54 },
  { pos: 3, club: "CS Sfaxien", p: 26, g: 14, n: 6, l: 6, bp: 38, bc: 24, diff: "+14", pts: 48 },
  { pos: 4, club: "US Monastir", p: 26, g: 13, n: 5, l: 8, bp: 36, bc: 28, diff: "+8", pts: 44 },
  { pos: 5, club: "Club Africain", p: 26, g: 12, n: 6, l: 8, bp: 32, bc: 27, diff: "+5", pts: 42 },
  { pos: 6, club: "AS Marsa", p: 26, g: 11, n: 5, l: 10, bp: 28, bc: 26, diff: "+2", pts: 38 },
  { pos: 7, club: "CA Bizertin", p: 26, g: 10, n: 6, l: 10, bp: 30, bc: 30, diff: "0", pts: 36 },
  { pos: 8, club: "JS Kairouan", p: 26, g: 9, n: 7, l: 10, bp: 25, bc: 28, diff: "-3", pts: 34 },
  { pos: 9, club: "US Ben Guerdane", p: 26, g: 9, n: 5, l: 12, bp: 26, bc: 33, diff: "-7", pts: 32 },
  { pos: 10, club: "AS Gabès", p: 26, g: 8, n: 7, l: 11, bp: 24, bc: 30, diff: "-6", pts: 31 },
  { pos: 11, club: "US Tataouine", p: 26, g: 8, n: 5, l: 13, bp: 22, bc: 34, diff: "-12", pts: 29 },
  { pos: 12, club: "ES Métlaoui", p: 26, g: 7, n: 6, l: 13, bp: 20, bc: 35, diff: "-15", pts: 27 },
  { pos: 13, club: "AS Djerba", p: 26, g: 6, n: 8, l: 12, bp: 18, bc: 32, diff: "-14", pts: 26 },
  { pos: 14, club: "CS Hammam-Lif", p: 26, g: 6, n: 5, l: 15, bp: 22, bc: 40, diff: "-18", pts: 23 },
  { pos: 15, club: "ES Zarzis", p: 26, g: 4, n: 7, l: 15, bp: 18, bc: 42, diff: "-24", pts: 19 },
  { pos: 16, club: "JS El Abiodh", p: 26, g: 3, n: 4, l: 19, bp: 14, bc: 52, diff: "-38", pts: 13 },
];

const RESULTS = [
  { j: 26, home: "Espérance ST", hs: 2, as_: 1, away: "Club Africain", date: "28 Mar" },
  { j: 26, home: "CS Sfaxien", hs: 0, as_: 0, away: "Étoile du Sahel", date: "28 Mar" },
  { j: 26, home: "CS Hammam-Lif", hs: 1, as_: 3, away: "AS Marsa", date: "27 Mar" },
  { j: 26, home: "US Monastir", hs: 2, as_: 2, away: "AS Gabès", date: "27 Mar" },
  { j: 26, home: "CA Bizertin", hs: 0, as_: 0, away: "JS Kairouan", date: "26 Mar" },
  { j: 25, home: "Étoile du Sahel", hs: 3, as_: 0, away: "CS Hammam-Lif", date: "21 Mar" },
  { j: 25, home: "Club Africain", hs: 1, as_: 1, away: "CS Sfaxien", date: "21 Mar" },
  { j: 25, home: "AS Marsa", hs: 2, as_: 1, away: "US Monastir", date: "20 Mar" },
  { j: 25, home: "JS Kairouan", hs: 0, as_: 2, away: "Espérance ST", date: "19 Mar" },
  { j: 25, home: "AS Gabès", hs: 1, as_: 1, away: "CA Bizertin", date: "19 Mar" },
];

const FIXTURES = [
  { j: 27, home: "CA Bizertin", away: "US Tataouine", date: "29 Mar", time: "17:00" },
  { j: 27, home: "Espérance ST", away: "Étoile du Sahel", date: "29 Mar", time: "19:30" },
  { j: 27, home: "Club Africain", away: "JS Kairouan", date: "30 Mar", time: "16:00" },
  { j: 27, home: "AS Marsa", away: "CS Sfaxien", date: "30 Mar", time: "18:00" },
  { j: 27, home: "US Monastir", away: "ES Métlaoui", date: "30 Mar", time: "16:00" },
  { j: 27, home: "AS Djerba", away: "US Ben Guerdane", date: "30 Mar", time: "18:00" },
  { j: 27, home: "ES Zarzis", away: "CS Hammam-Lif", date: "31 Mar", time: "15:00" },
  { j: 27, home: "JS El Abiodh", away: "AS Gabès", date: "31 Mar", time: "15:00" },
];

const SCORERS = [
  { pos: 1, name: "Haythem Jouini", club: "Espérance ST", goals: 18, nat: "🇹🇳" },
  { pos: 2, name: "Ferjani Sassi", club: "Étoile du Sahel", goals: 14, nat: "🇹🇳" },
  { pos: 3, name: "Anis Ben Slimane", club: "CS Sfaxien", goals: 12, nat: "🇹🇳" },
  { pos: 4, name: "Mohamed Ali Ben Romdhane", club: "US Monastir", goals: 11, nat: "🇹🇳" },
  { pos: 5, name: "Yohan Boli", club: "Club Africain", goals: 10, nat: "🇨🇮" },
  { pos: 6, name: "Taha Yassine Khenissi", club: "Espérance ST", goals: 9, nat: "🇹🇳" },
  { pos: 7, name: "Franck Kom", club: "AS Marsa", goals: 8, nat: "🇨🇲" },
  { pos: 8, name: "Slim Ben Youssef", club: "CA Bizertin", goals: 8, nat: "🇹🇳" },
  { pos: 9, name: "Zoubeir Ayari", club: "JS Kairouan", goals: 7, nat: "🇹🇳" },
  { pos: 10, name: "Mohamed Amine Meskini", club: "AS Gabès", goals: 7, nat: "🇹🇳" },
];

const TABS = ["Classement", "Résultats", "Calendrier", "Buteurs"];

export default function Ligue1Page() {
  const [activeTab, setActiveTab] = useState("Classement");

  const posColor = (pos: number) => {
    if (pos <= 2) return "#4ade80";
    if (pos <= 4) return ACCENT;
    if (pos >= 15) return "#f87171";
    return MUTED;
  };

  return (
    <div style={{ background: DARK, minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ position: "relative", background: "linear-gradient(135deg, #0a0a0a 0%, #150007 100%)", borderBottom: `1px solid ${BORDER}`, padding: "60px 24px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "400px", height: "100%", background: `radial-gradient(circle at right, rgba(200,16,46,0.08), transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ fontSize: "11px", color: RED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>FTF</span>
            <span style={{ color: MUTED }}>›</span>
            <span style={{ fontSize: "11px", color: MUTED, textTransform: "uppercase", letterSpacing: "0.1em" }}>Ligue 1</span>
          </div>
          <h1 className="fade-up" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: TEXT, letterSpacing: "-0.03em", marginBottom: "8px" }}>
            Ligue 1 Professionnelle
          </h1>
          <p style={{ color: MUTED, fontSize: "15px", marginBottom: "24px" }}>Saison 2025–2026 · Journée 26 / 30</p>
          {/* Mini standings */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {STANDINGS.slice(0, 3).map((s, i) => (
              <div key={i} className="card" style={{ padding: "12px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "20px", fontWeight: 900, color: posColor(s.pos) }}>{s.pos}</span>
                <div>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: "13px" }}>{s.club}</div>
                  <div style={{ color: MUTED, fontSize: "11px" }}>{s.pts} pts · J{s.p}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 24px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: "4px", marginBottom: "32px", borderBottom: `1px solid ${BORDER}`, paddingBottom: "0" }}>
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              background: "none", border: "none", cursor: "pointer", padding: "12px 20px", fontSize: "14px", fontWeight: 600,
              color: activeTab === tab ? TEXT : MUTED,
              borderBottom: activeTab === tab ? `2px solid ${RED}` : "2px solid transparent",
              marginBottom: "-1px", transition: "color 0.15s",
            }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Classement */}
        {activeTab === "Classement" && (
          <div className="card" style={{ overflow: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                  {["#", "Club", "J", "G", "N", "P", "BP", "BC", "Diff", "Pts"].map((h, i) => (
                    <th key={i} style={{ padding: "14px 16px", textAlign: i === 1 ? "left" : "center", color: MUTED, fontWeight: 600, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STANDINGS.map((s, i) => (
                  <tr key={i} style={{ borderBottom: i < STANDINGS.length - 1 ? `1px solid #0f0f0f` : "none", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                    <td style={{ padding: "12px 16px", textAlign: "center" }}>
                      <span style={{ fontWeight: 800, color: posColor(s.pos), fontSize: "13px" }}>{s.pos}</span>
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <span style={{ color: TEXT, fontWeight: s.pos <= 2 ? 700 : 400 }}>{s.club}</span>
                    </td>
                    {[s.p, s.g, s.n, s.l, s.bp, s.bc].map((val, j) => (
                      <td key={j} style={{ padding: "12px 16px", textAlign: "center", color: MUTED }}>{val}</td>
                    ))}
                    <td style={{ padding: "12px 16px", textAlign: "center", color: s.diff.startsWith("+") ? "#4ade80" : s.diff === "0" ? MUTED : "#f87171", fontWeight: 600 }}>{s.diff}</td>
                    <td style={{ padding: "12px 16px", textAlign: "center", color: TEXT, fontWeight: 800, fontSize: "15px" }}>{s.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: "16px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {[{ color: "#4ade80", label: "Qualification européenne" }, { color: ACCENT, label: "Pré-qualification" }, { color: "#f87171", label: "Relégation" }].map((l, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: l.color }} />
                  <span style={{ color: MUTED, fontSize: "11px" }}>{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Résultats */}
        {activeTab === "Résultats" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {RESULTS.map((r, i) => (
              <div key={i} className="card" style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ fontSize: "10px", color: MUTED, background: "#111", padding: "3px 8px", borderRadius: "4px", whiteSpace: "nowrap" }}>J{r.j}</span>
                <span style={{ color: TEXT, fontSize: "14px", fontWeight: 600, flex: 1, textAlign: "right" }}>{r.home}</span>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", background: "#111", border: `1px solid ${BORDER}`, borderRadius: "10px", padding: "8px 16px", flexShrink: 0 }}>
                  <span style={{ color: ACCENT, fontWeight: 900, fontSize: "18px" }}>{r.hs}</span>
                  <span style={{ color: MUTED }}>–</span>
                  <span style={{ color: ACCENT, fontWeight: 900, fontSize: "18px" }}>{r.as_}</span>
                </div>
                <span style={{ color: TEXT, fontSize: "14px", fontWeight: 600, flex: 1 }}>{r.away}</span>
                <span style={{ fontSize: "11px", color: MUTED, whiteSpace: "nowrap" }}>{r.date}</span>
              </div>
            ))}
          </div>
        )}

        {/* Calendrier */}
        {activeTab === "Calendrier" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
            {FIXTURES.map((f, i) => (
              <div key={i} className="card" style={{ padding: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ fontSize: "10px", color: MUTED, background: "#111", padding: "3px 8px", borderRadius: "4px" }}>J{f.j}</span>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontSize: "11px", color: MUTED }}>{f.date}</span>
                    <span style={{ display: "block", fontSize: "13px", fontWeight: 700, color: ACCENT }}>{f.time}</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                  <span style={{ color: TEXT, fontWeight: 600, fontSize: "13px", flex: 1 }}>{f.home}</span>
                  <span style={{ color: MUTED, fontSize: "11px", padding: "4px 8px", background: "#111", borderRadius: "6px" }}>vs</span>
                  <span style={{ color: TEXT, fontWeight: 600, fontSize: "13px", flex: 1, textAlign: "right" }}>{f.away}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Buteurs */}
        {activeTab === "Buteurs" && (
          <div className="card">
            {SCORERS.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 20px", borderBottom: i < SCORERS.length - 1 ? `1px solid #0f0f0f` : "none" }}>
                <span style={{ width: "28px", textAlign: "center", fontWeight: 900, fontSize: "15px", color: i < 3 ? ACCENT : MUTED }}>{s.pos}</span>
                <span style={{ fontSize: "18px" }}>{s.nat}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: "14px" }}>{s.name}</div>
                  <div style={{ color: MUTED, fontSize: "12px" }}>{s.club}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ color: MUTED, fontSize: "11px" }}>⚽</span>
                  <span style={{ color: ACCENT, fontWeight: 900, fontSize: "20px" }}>{s.goals}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
