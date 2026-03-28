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

const ARBITRES = [
  { name: "Sadok Selmi", region: "Tunis", cat: "FIFA", since: 2018, age: 42, matches: 87 },
  { name: "Mohamed Ali Houidi", region: "Sousse", cat: "FIFA", since: 2016, age: 45, matches: 112 },
  { name: "Slim Jdidi", region: "Sfax", cat: "FIFA", since: 2020, age: 38, matches: 54 },
  { name: "Walid Mourali", region: "Tunis", cat: "National", since: 2015, age: 41, matches: 143 },
  { name: "Hatem Rejeb", region: "Bizerte", cat: "National", since: 2017, age: 39, matches: 98 },
  { name: "Anis Bouali", region: "Sousse", cat: "National", since: 2019, age: 36, matches: 67 },
  { name: "Raouf Ben Ali", region: "Sfax", cat: "National", since: 2018, age: 40, matches: 78 },
  { name: "Kamel Zerrouki", region: "Kairouan", cat: "National", since: 2020, age: 37, matches: 45 },
  { name: "Sofiene Besbes", region: "Tunis", cat: "National", since: 2016, age: 43, matches: 132 },
  { name: "Foued Chaari", region: "Monastir", cat: "National", since: 2021, age: 35, matches: 32 },
  { name: "Yacine Ayachi", region: "Nabeul", cat: "Régional", since: 2019, age: 34, matches: 56 },
  { name: "Mohamed Khlif", region: "Gabès", cat: "Régional", since: 2020, age: 33, matches: 43 },
  { name: "Amine Trabelsi", region: "Bizerte", cat: "Régional", since: 2021, age: 31, matches: 28 },
  { name: "Leila Ben Amour", region: "Tunis", cat: "FIFA", since: 2019, age: 36, matches: 48, female: true },
  { name: "Rim Bouslama", region: "Sousse", cat: "National", since: 2020, age: 32, matches: 35, female: true },
  { name: "Sonia Ferchichi", region: "Sfax", cat: "National", since: 2021, age: 30, matches: 22, female: true },
  { name: "Asma Ayed", region: "Tunis", cat: "Régional", since: 2022, age: 28, matches: 15, female: true },
  { name: "Nadia Chouchane", region: "Monastir", cat: "Régional", since: 2022, age: 29, matches: 18, female: true },
  { name: "Khalil Ben Rejeb", region: "Gafsa", cat: "Régional", since: 2020, age: 35, matches: 38 },
  { name: "Skander Bouzidi", region: "Tunis", cat: "Régional", since: 2018, age: 38, matches: 62 },
  { name: "Nizar Mzali", region: "Tunis", cat: "FIFA", since: 2015, age: 46, matches: 125 },
  { name: "Chiheb Rejeb", region: "Sfax", cat: "National", since: 2017, age: 41, matches: 89 },
];

const DESIGNATIONS = [
  { match: "Espérance ST vs Étoile du Sahel", comp: "Ligue 1 J27", date: "29 Mar", arbitre: "Mohamed Ali Houidi", cat: "FIFA" },
  { match: "CS Sfaxien vs AS Marsa", comp: "Ligue 1 J27", date: "30 Mar", arbitre: "Slim Jdidi", cat: "FIFA" },
  { match: "Club Africain vs JS Kairouan", comp: "Ligue 1 J27", date: "30 Mar", arbitre: "Walid Mourali", cat: "National" },
  { match: "CA Bizertin vs US Tataouine", comp: "Ligue 1 J27", date: "29 Mar", arbitre: "Sadok Selmi", cat: "FIFA" },
  { match: "US Monastir vs ES Métlaoui", comp: "Ligue 1 J27", date: "30 Mar", arbitre: "Hatem Rejeb", cat: "National" },
  { match: "AS Djerba vs US Ben Guerdane", comp: "Ligue 1 J27", date: "30 Mar", arbitre: "Anis Bouali", cat: "National" },
];

const catColor = (cat: string) => {
  if (cat === "FIFA") return { bg: "rgba(232,197,71,0.15)", color: ACCENT };
  if (cat === "National") return { bg: "rgba(200,16,46,0.15)", color: RED };
  return { bg: "rgba(255,255,255,0.05)", color: MUTED };
};

export default function ArbitragePage() {
  const total = ARBITRES.length;
  const fifa = ARBITRES.filter(a => a.cat === "FIFA").length;
  const female = ARBITRES.filter((a: any) => a.female).length;

  return (
    <div style={{ background: DARK, minHeight: "100vh" }}>
      <Navbar />

      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ fontSize: "11px", color: RED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>FTF</span>
            <span style={{ color: MUTED }}>›</span>
            <span style={{ fontSize: "11px", color: MUTED, textTransform: "uppercase", letterSpacing: "0.1em" }}>Arbitrage</span>
          </div>
          <h1 className="fade-up" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: TEXT, letterSpacing: "-0.03em", marginBottom: "8px" }}>
            Commission d'Arbitrage
          </h1>
          <p style={{ color: MUTED, fontSize: "15px" }}>Formation, désignation et développement des arbitres tunisiens</p>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "48px" }}>
          {[
            { label: "Total arbitres élite", value: total, color: TEXT },
            { label: "Internationaux FIFA", value: fifa, color: ACCENT },
            { label: "Arbitres femmes", value: female, color: "#ec4899" },
            { label: "Ligues couvertes", value: 24, color: "#4ade80" },
            { label: "Matchs par weekend", value: "80+", color: "#60a5fa" },
            { label: "Formateurs certifiés", value: 12, color: "#a855f7" },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: "20px", textAlign: "center" }}>
              <div style={{ color: s.color, fontWeight: 900, fontSize: "28px", marginBottom: "6px" }}>{s.value}</div>
              <div style={{ color: MUTED, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Formation programs */}
        <h2 style={{ color: TEXT, fontSize: "18px", fontWeight: 800, marginBottom: "20px" }}>Programmes de formation</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", marginBottom: "48px" }}>
          {[
            { title: "Certification Niveau 1", desc: "Formation initiale pour débutants. Théorie du jeu, lois du football, gestion des matchs régionaux.", duration: "40h", icon: "📚" },
            { title: "Certification Niveau 2 — National", desc: "Arbitres pour les ligues nationales. Gestion avancée, communication, décisions sous pression.", duration: "80h", icon: "🎓" },
            { title: "Certification FIFA", desc: "Programme de préparation aux compétitions internationales sous la supervision de la FIFA.", duration: "120h", icon: "🌍" },
            { title: "Formation Continue VAR", desc: "Module spécialisé sur la vidéo assistant referee (VAR) pour arbitres élite.", duration: "30h", icon: "📹" },
          ].map((p, i) => (
            <div key={i} className="card" style={{ padding: "20px" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{p.icon}</div>
              <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "14px", marginBottom: "8px" }}>{p.title}</h3>
              <p style={{ color: MUTED, fontSize: "13px", lineHeight: 1.6, marginBottom: "12px" }}>{p.desc}</p>
              <span style={{ background: "rgba(200,16,46,0.15)", color: RED, fontSize: "11px", fontWeight: 600, padding: "4px 10px", borderRadius: "6px" }}>
                {p.duration} de formation
              </span>
            </div>
          ))}
        </div>

        {/* Designations table */}
        <h2 style={{ color: TEXT, fontSize: "18px", fontWeight: 800, marginBottom: "20px" }}>Désignations récentes</h2>
        <div className="card" style={{ overflow: "auto", marginBottom: "48px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                {["Match", "Compétition", "Date", "Arbitre", "Catégorie"].map((h, i) => (
                  <th key={i} style={{ padding: "14px 16px", textAlign: "left", color: MUTED, fontWeight: 600, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DESIGNATIONS.map((d, i) => (
                <tr key={i} style={{ borderBottom: i < DESIGNATIONS.length - 1 ? `1px solid #0f0f0f` : "none" }}>
                  <td style={{ padding: "12px 16px", color: TEXT, fontWeight: 500 }}>{d.match}</td>
                  <td style={{ padding: "12px 16px", color: MUTED }}>{d.comp}</td>
                  <td style={{ padding: "12px 16px", color: MUTED, whiteSpace: "nowrap" }}>{d.date}</td>
                  <td style={{ padding: "12px 16px", color: TEXT }}>{d.arbitre}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <span style={{ ...catColor(d.cat), fontSize: "10px", fontWeight: 700, padding: "3px 8px", borderRadius: "4px", textTransform: "uppercase" }}>
                      {d.cat}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Arbitres list */}
        <h2 style={{ color: TEXT, fontSize: "18px", fontWeight: 800, marginBottom: "20px" }}>Corps arbitral élite</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "10px" }}>
          {ARBITRES.map((a, i) => (
            <div key={i} className="card" style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: catColor(a.cat).bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "16px" }}>{(a as any).female ? "👩" : "👨"}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: TEXT, fontWeight: 600, fontSize: "13px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.name}</div>
                <div style={{ color: MUTED, fontSize: "11px" }}>{a.region} · depuis {a.since}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                <span style={{ ...catColor(a.cat), fontSize: "10px", fontWeight: 700, padding: "2px 7px", borderRadius: "4px" }}>{a.cat}</span>
                <span style={{ color: MUTED, fontSize: "11px" }}>{a.matches} matchs</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
