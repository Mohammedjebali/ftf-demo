"use client";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const RED = "#c8102e";
const DARK = "#050505";
const CARD = "#0d0d0d";
const BORDER = "#1a1a1a";
const TEXT = "#f0ece4";
const MUTED = "#5a5a5a";
const ACCENT = "#e8c547";

type Standing = {
  rank: number; team: string; logo: string; played: number;
  win: number; draw: number; lose: number; gf: number; ga: number;
  gd: number; points: number; form: string;
};
type Fixture = {
  id: number; date: string; home: string; homeLogo: string;
  away: string; awayLogo: string; homeScore: number | null;
  awayScore: number | null; status: string;
};

const formColor = (c: string) => {
  if (c === "W") return RED;
  if (c === "D") return "#e8c547";
  return "#333";
};

export default function Ligue1Page() {
  const [tab, setTab] = useState<"classement" | "resultats" | "calendrier">("classement");
  const [standings, setStandings] = useState<Standing[]>([]);
  const [recent, setRecent] = useState<Fixture[]>([]);
  const [upcoming, setUpcoming] = useState<Fixture[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/standings").then(r => r.json()),
      fetch("/api/fixtures").then(r => r.json()),
    ]).then(([s, f]) => {
      setStandings(s);
      setRecent(f.recent);
      setUpcoming(f.upcoming);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
  };
  const formatTime = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div style={{ background: DARK, minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1a0005, #050505)", borderBottom: `1px solid ${BORDER}`, padding: "40px 24px 32px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "8px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: `${RED}22`, border: `1px solid ${RED}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>🏆</div>
            <div>
              <h1 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: TEXT, letterSpacing: "-0.02em" }}>Ligue 1 Professionnelle</h1>
              <p style={{ color: MUTED, fontSize: "13px" }}>Saison 2024/2025 · Tunisie · <span style={{ color: "#4ade80" }}>● Données en direct (ftf.org.tn)</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: "#080808" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "0" }}>
          {(["classement", "resultats", "calendrier"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "14px 22px", background: "none", border: "none", cursor: "pointer",
              color: tab === t ? TEXT : MUTED, fontWeight: tab === t ? 700 : 400,
              fontSize: "13px", textTransform: "capitalize", letterSpacing: "0.04em",
              borderBottom: tab === t ? `2px solid ${RED}` : "2px solid transparent",
              transition: "all 0.2s"
            }}>
              {t === "classement" ? "Classement" : t === "resultats" ? "Résultats" : "Calendrier"}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px" }}>
        {loading && (
          <div style={{ textAlign: "center", padding: "60px", color: MUTED }}>
            <div style={{ fontSize: "24px", marginBottom: "12px" }}>⏳</div>
            Chargement des données...
          </div>
        )}

        {/* Classement */}
        {!loading && tab === "classement" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "16px", overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${BORDER}`, background: "#111" }}>
                    {["#", "Club", "J", "G", "N", "P", "BP", "BC", "Diff", "Pts", "Forme"].map((h, i) => (
                      <th key={i} style={{ padding: "12px 10px", color: MUTED, fontWeight: 600, textAlign: i < 2 ? "left" : "center", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {standings.map((s, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid #0f0f0f`, transition: "background 0.15s" }}
                      onMouseOver={e => (e.currentTarget.style.background = "#111")}
                      onMouseOut={e => (e.currentTarget.style.background = "transparent")}>
                      <td style={{ padding: "12px 10px", color: s.rank <= 3 ? ACCENT : s.rank >= 15 ? RED : MUTED, fontWeight: 700, width: "32px" }}>
                        {s.rank <= 1 ? "🥇" : s.rank === 2 ? "🥈" : s.rank === 3 ? "🥉" : s.rank}
                      </td>
                      <td style={{ padding: "12px 10px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <img src={s.logo} alt={s.team} style={{ width: "22px", height: "22px", objectFit: "contain" }} />
                          <span style={{ color: TEXT, fontWeight: 500 }}>{s.team}</span>
                        </div>
                      </td>
                      {[s.played, s.win, s.draw, s.lose, s.gf, s.ga].map((v, j) => (
                        <td key={j} style={{ padding: "12px 10px", color: MUTED, textAlign: "center" }}>{v}</td>
                      ))}
                      <td style={{ padding: "12px 10px", color: s.gd > 0 ? "#4ade80" : s.gd < 0 ? RED : MUTED, textAlign: "center" }}>{s.gd > 0 ? `+${s.gd}` : s.gd}</td>
                      <td style={{ padding: "12px 10px", textAlign: "center", fontWeight: 800, color: TEXT, fontSize: "15px" }}>{s.points}</td>
                      <td style={{ padding: "12px 10px" }}>
                        <div style={{ display: "flex", gap: "3px", justifyContent: "center" }}>
                          {(s.form || "").split("").slice(-5).map((c, j) => (
                            <span key={j} style={{ width: "16px", height: "16px", borderRadius: "3px", background: formColor(c), display: "inline-block", fontSize: "8px", fontWeight: 700, color: "#fff", textAlign: "center", lineHeight: "16px" }}>{c}</span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Résultats */}
        {!loading && tab === "resultats" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {recent.length === 0 && <p style={{ color: MUTED, textAlign: "center", padding: "40px" }}>Aucun résultat disponible</p>}
            {recent.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "14px 20px", display: "grid", gridTemplateColumns: "1fr auto 1fr auto", alignItems: "center", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src={f.homeLogo} alt={f.home} style={{ width: "28px", height: "28px", objectFit: "contain" }} />
                  <span style={{ color: TEXT, fontWeight: 600, fontSize: "14px" }}>{f.home}</span>
                </div>
                <div style={{ textAlign: "center", minWidth: "70px" }}>
                  <div style={{ fontSize: "20px", fontWeight: 900, color: TEXT, letterSpacing: "0.05em" }}>
                    {f.homeScore ?? 0} <span style={{ color: MUTED, fontSize: "16px" }}>–</span> {f.awayScore ?? 0}
                  </div>
                  <div style={{ fontSize: "11px", color: MUTED }}>{formatDate(f.date)}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "flex-end" }}>
                  <span style={{ color: TEXT, fontWeight: 600, fontSize: "14px" }}>{f.away}</span>
                  <img src={f.awayLogo} alt={f.away} style={{ width: "28px", height: "28px", objectFit: "contain" }} />
                </div>
                <span style={{ background: "#1a1a1a", color: MUTED, fontSize: "10px", padding: "3px 8px", borderRadius: "4px", whiteSpace: "nowrap" }}>FT</span>
              </div>
            ))}
          </div>
        )}

        {/* Calendrier */}
        {!loading && tab === "calendrier" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {upcoming.length === 0 && (
              <div style={{ textAlign: "center", padding: "60px", color: MUTED }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>🏁</div>
                <p>La saison 2024/2025 est terminée.</p>
                <p style={{ fontSize: "12px", marginTop: "8px" }}>La saison 2025/2026 débutera prochainement.</p>
              </div>
            )}
            {upcoming.map((f, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", padding: "14px 20px", display: "grid", gridTemplateColumns: "1fr auto 1fr auto", alignItems: "center", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src={f.homeLogo} alt={f.home} style={{ width: "28px", height: "28px", objectFit: "contain" }} />
                  <span style={{ color: TEXT, fontWeight: 600, fontSize: "14px" }}>{f.home}</span>
                </div>
                <div style={{ textAlign: "center", minWidth: "80px" }}>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: ACCENT }}>VS</div>
                  <div style={{ fontSize: "11px", color: MUTED }}>{formatDate(f.date)} · {formatTime(f.date)}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "flex-end" }}>
                  <span style={{ color: TEXT, fontWeight: 600, fontSize: "14px" }}>{f.away}</span>
                  <img src={f.awayLogo} alt={f.away} style={{ width: "28px", height: "28px", objectFit: "contain" }} />
                </div>
                <span style={{ background: `${RED}22`, color: RED, fontSize: "10px", padding: "3px 8px", borderRadius: "4px", whiteSpace: "nowrap" }}>À venir</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
