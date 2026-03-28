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

const TIMELINE = [
  { year: "1957", title: "Fondation de la FTF", desc: "La Fédération Tunisienne de Football est fondée le 29 mars 1957, après l'indépendance de la Tunisie en 1956, en remplacement de la Ligue Tunisienne de Football liée à la Fédération Française." },
  { year: "1960", title: "Adhésion à la FIFA & CAF", desc: "La Tunisie devient membre officiel de la FIFA et de la Confédération Africaine de Football (CAF) en 1960, ouvrant la voie aux compétitions internationales." },
  { year: "1978", title: "1ère Coupe du Monde", desc: "La Tunisie participe à sa première Coupe du Monde en Argentine, devenant la première nation africaine à remporter un match en phase finale (3-1 face au Mexique)." },
  { year: "1994", title: "CAN 1994", desc: "Organisation de la Coupe d'Afrique des Nations, premier grand tournoi continental organisé en Tunisie." },
  { year: "2004", title: "Champions d'Afrique", desc: "La Tunisie remporte la Coupe d'Afrique des Nations chez elle, sacre historique des Aigles de Carthage." },
  { year: "2004", title: "Coupe du Monde 2006", desc: "Qualification pour la Coupe du Monde 2006 en Allemagne pour la troisième participation de la Tunisie." },
  { year: "2022", title: "Coupe du Monde Qatar", desc: "La Tunisie se qualifie pour la Coupe du Monde 2022, 6e participation mondiale. Stade de groupe avec victoire historique contre la France (1-0)." },
  { year: "2026", title: "Développement du football", desc: "Lancement du plan stratégique 2026-2030 pour le développement du football à tous les niveaux." },
];

const BOARD = [
  { role: "Président", name: "Moez Nasri", since: "2025", emoji: "◆" },
  { role: "Vice-Président", name: "Hussein Jenayah", since: "2025", emoji: "○" },
  { role: "Sélectionneur National", name: "Sabri Lamouchi", since: "2024", emoji: "▸" },
  { role: "Secrétaire Général", name: "—", since: "2025", emoji: "≡" },
  { role: "Direction Technique", name: "DTN", since: "2025", emoji: "◈" },
  { role: "Commission Arbitrage", name: "—", since: "2025", emoji: "▪" },
];

const DEPTS = [
  { name: "Direction Technique Nationale", icon: "○", desc: "Formation des entraîneurs, sélections nationales, développement des jeunes" },
  { name: "Commission d'Arbitrage", icon: "▪", desc: "Formation, désignation et gestion du corps arbitral" },
  { name: "Commission des Compétitions", icon: "◆", desc: "Organisation et gestion de toutes les compétitions nationales" },
  { name: "Commission Juridique", icon: "⚖", desc: "Gestion disciplinaire, recours et litiges" },
  { name: "Direction Administrative & Financière", icon: "◈", desc: "Gestion administrative, financière et des ressources humaines" },
  { name: "Commission des Licences", icon: "▣", desc: "Délivrance et gestion des licences joueurs, entraîneurs et arbitres" },
  { name: "Commission Médicale", icon: "✚", desc: "Suivi médical des joueurs, prévention antidopage" },
  { name: "Commission Marketing & Communication", icon: "◉", desc: "Relations presse, sponsoring, image de marque de la FTF" },
];

export default function AProposPage() {
  return (
    <div style={{ background: DARK, minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ position: "relative", background: "linear-gradient(135deg, #0a0a0a, #120005)", borderBottom: `1px solid ${BORDER}`, padding: "60px 24px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "500px", height: "100%", background: "radial-gradient(circle at right, rgba(200,16,46,0.07), transparent 60%)" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ fontSize: "11px", color: RED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>FTF</span>
            <span style={{ color: MUTED }}>›</span>
            <span style={{ fontSize: "11px", color: MUTED, textTransform: "uppercase", letterSpacing: "0.1em" }}>À propos</span>
          </div>
          <h1 className="fade-up" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: TEXT, letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Fédération Tunisienne de Football
          </h1>
          <p style={{ color: MUTED, fontSize: "15px", maxWidth: "600px", lineHeight: 1.7 }}>
            Organe directeur du football tunisien depuis 1957, la FTF veille au développement, à l'organisation et à la promotion du football sous toutes ses formes sur l'ensemble du territoire national. Affiliée à la FIFA et à la CAF depuis 1960, basée à El Menzah, Tunis.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>
        {/* Key stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px", marginBottom: "60px" }}>
          {[
            { label: "Fondée en", value: "1957", color: ACCENT },
            { label: "Clubs affiliés", value: "450+", color: RED },
            { label: "Joueurs licenciés", value: "85 000+", color: "#4ade80" },
            { label: "Arbitres actifs", value: "1 200+", color: "#60a5fa" },
            { label: "Entraîneurs certifiés", value: "2 400+", color: "#a855f7" },
            { label: "Ligues régionales", value: "24", color: "#f97316" },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: "20px", textAlign: "center" }}>
              <div style={{ color: s.color, fontWeight: 900, fontSize: "26px", marginBottom: "6px" }}>{s.value}</div>
              <div style={{ color: MUTED, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Mission / Vision */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "60px" }} className="mobile-col">
          <div className="card" style={{ padding: "32px" }}>
            <div style={{ width: "40px", height: "3px", background: "#c8102e", borderRadius: "2px", marginBottom: "20px" }} />
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "18px", marginBottom: "12px" }}>Notre Mission</h2>
            <p style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}>
              Développer, promouvoir et gérer le football tunisien à tous les niveaux — amateur, professionnel, féminin et jeunes — dans le respect des règles de la FIFA et de la CAF. Nous nous engageons à renforcer les infrastructures sportives, former les acteurs du football et représenter dignement la Tunisie sur la scène internationale.
            </p>
          </div>
          <div className="card" style={{ padding: "32px" }}>
            <div style={{ width: "40px", height: "3px", background: "#e8c547", borderRadius: "2px", marginBottom: "20px" }} />
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "18px", marginBottom: "12px" }}>Notre Vision</h2>
            <p style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}>
              Faire du football tunisien un modèle en Afrique du Nord et sur le continent africain, en investissant dans la formation des jeunes talents, la modernisation des compétitions et le développement du football féminin. Qualifier la Tunisie régulièrement pour les plus grandes compétitions mondiales.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <h2 style={{ color: TEXT, fontSize: "22px", fontWeight: 800, marginBottom: "32px" }}>Notre histoire</h2>
        <div style={{ position: "relative", marginBottom: "60px" }}>
          {/* Line */}
          <div style={{ position: "absolute", left: "68px", top: 0, bottom: 0, width: "2px", background: `linear-gradient(to bottom, ${RED}, transparent)` }} className="hide-mobile" />

          {TIMELINE.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: "24px", marginBottom: "28px", alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, textAlign: "right", minWidth: "56px" }}>
                <span style={{ display: "inline-block", background: `linear-gradient(135deg, ${RED}, #a00020)`, color: "#fff", fontWeight: 900, fontSize: "11px", padding: "5px 10px", borderRadius: "6px" }}>{t.year}</span>
              </div>
              <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: i === 0 ? RED : "#1a1a1a", border: `2px solid ${i === 0 ? RED : BORDER}`, flexShrink: 0, marginTop: "4px" }} className="hide-mobile" />
              <div className="card" style={{ flex: 1, padding: "16px 20px" }}>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "14px", marginBottom: "6px" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: "13px", lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Board */}
        <h2 style={{ color: TEXT, fontSize: "22px", fontWeight: 800, marginBottom: "24px" }}>Bureau exécutif</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px", marginBottom: "60px" }}>
          {BOARD.map((b, i) => (
            <div key={i} className="card" style={{ padding: "20px", display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: `linear-gradient(135deg, ${RED}22, ${RED}08)`, border: `1px solid ${RED}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>
                {b.emoji}
              </div>
              <div>
                <div style={{ color: TEXT, fontWeight: 700, fontSize: "14px" }}>{b.name}</div>
                <div style={{ color: RED, fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "3px" }}>{b.role}</div>
                <div style={{ color: MUTED, fontSize: "11px", marginTop: "2px" }}>Depuis {b.since}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Structure */}
        <h2 style={{ color: TEXT, fontSize: "22px", fontWeight: 800, marginBottom: "24px" }}>Structure organisationnelle</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
          {DEPTS.map((d, i) => (
            <div key={i} className="card" style={{ padding: "20px", display: "flex", gap: "14px" }}>
              <span style={{ fontSize: "24px", flexShrink: 0 }}>{d.icon}</span>
              <div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "13px", marginBottom: "6px" }}>{d.name}</h3>
                <p style={{ color: MUTED, fontSize: "12px", lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
