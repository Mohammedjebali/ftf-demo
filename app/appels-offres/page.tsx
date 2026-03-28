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

const TENDERS = [
  { ref: "AO-2026-001", title: "Rénovation du Centre Technique National de Hammam-Lif", date: "15 Jan 2026", deadline: "15 Avr 2026", status: "Ouvert", cat: "Travaux" },
  { ref: "AO-2026-002", title: "Fourniture de maillots officiels pour les sélections nationales 2026-2028", date: "20 Jan 2026", deadline: "20 Mar 2026", status: "Attribué", cat: "Équipements", attribue: "SportsPro Tunisie" },
  { ref: "AO-2026-003", title: "Développement du système d'information et de gestion des licences joueurs", date: "1 Fév 2026", deadline: "1 Mai 2026", status: "Ouvert", cat: "Informatique" },
  { ref: "AO-2026-004", title: "Service de sécurité et d'accueil lors des matchs de Ligue 1", date: "5 Fév 2026", deadline: "5 Mar 2026", status: "Attribué", cat: "Services", attribue: "SecureGuard TN" },
  { ref: "AO-2026-005", title: "Construction d'un terrain synthétique au complexe de la FTF", date: "10 Fév 2026", deadline: "10 Mai 2026", status: "Ouvert", cat: "Travaux" },
  { ref: "AO-2026-006", title: "Prestation médicale pour les camps d'entraînement des sélections", date: "15 Fév 2026", deadline: "28 Fév 2026", status: "Fermé", cat: "Services" },
  { ref: "AO-2026-007", title: "Acquisition d'équipements audiovisuels pour salle de conférence de presse", date: "18 Fév 2026", deadline: "18 Mar 2026", status: "Attribué", cat: "Équipements", attribue: "TechMedia SARL" },
  { ref: "AO-2026-008", title: "Refonte du site web officiel de la FTF et applications mobiles", date: "20 Fév 2026", deadline: "20 Avr 2026", status: "Ouvert", cat: "Informatique" },
  { ref: "AO-2026-009", title: "Impression et distribution des calendriers officiels de la saison 2026-2027", date: "25 Fév 2026", deadline: "25 Mar 2026", status: "Ouvert", cat: "Communication" },
  { ref: "AO-2026-010", title: "Achat de bus de transport pour les déplacements des équipes nationales", date: "1 Mar 2026", deadline: "1 Juin 2026", status: "Ouvert", cat: "Transport" },
  { ref: "AO-2026-011", title: "Réhabilitation des vestiaires du Stade Olympique de Radès", date: "5 Mar 2026", deadline: "5 Juil 2026", status: "Ouvert", cat: "Travaux" },
  { ref: "AO-2026-012", title: "Fourniture de ballons officiels pour toutes les compétitions nationales", date: "8 Mar 2026", deadline: "8 Avr 2026", status: "Ouvert", cat: "Équipements" },
  { ref: "AO-2026-013", title: "Service de traduction et interprétariat pour délégations étrangères", date: "10 Mar 2026", deadline: "10 Avr 2026", status: "Ouvert", cat: "Services" },
  { ref: "AO-2026-014", title: "Prestation de nettoyage et entretien du siège social de la FTF", date: "12 Mar 2026", deadline: "12 Fév 2026", status: "Fermé", cat: "Services", attribue: "CleanPro TN" },
  { ref: "AO-2026-015", title: "Développement d'une application de formation pour les arbitres", date: "15 Mar 2026", deadline: "15 Jun 2026", status: "Ouvert", cat: "Informatique" },
  { ref: "AO-2026-016", title: "Campagne de communication pour la promotion du football féminin", date: "18 Mar 2026", deadline: "18 Avr 2026", status: "Ouvert", cat: "Communication" },
  { ref: "AO-2026-017", title: "Installation système VAR au Stade Olympique de Radès", date: "20 Mar 2026", deadline: "20 Sep 2026", status: "Ouvert", cat: "Travaux" },
  { ref: "AO-2026-018", title: "Organisation logistique de la CAN U20 en Tunisie (phase qualificative)", date: "22 Mar 2026", deadline: "22 Avr 2026", status: "Ouvert", cat: "Services" },
  { ref: "AO-2026-019", title: "Audit financier externe pour l'exercice 2025-2026", date: "24 Mar 2026", deadline: "10 Avr 2026", status: "Ouvert", cat: "Finance" },
  { ref: "AO-2026-020", title: "Fourniture et installation de mobilier de bureau pour les nouvelles locaux", date: "26 Mar 2026", deadline: "26 Avr 2026", status: "Ouvert", cat: "Équipements" },
  { ref: "AO-2026-021", title: "Service traiteur pour les réceptions officielles et galas de la FTF", date: "27 Mar 2026", deadline: "27 Avr 2026", status: "Ouvert", cat: "Services" },
  { ref: "AO-2026-022", title: "Acquisition de drones pour la retransmission et analyse tactique", date: "28 Mar 2026", deadline: "28 Mai 2026", status: "Ouvert", cat: "Équipements" },
];

const STATUSES = ["Tous", "Ouvert", "Fermé", "Attribué"];
const CATS = ["Toutes catégories", "Travaux", "Équipements", "Informatique", "Services", "Communication", "Transport", "Finance"];

const statusStyle = (s: string) => {
  if (s === "Ouvert") return { bg: "rgba(74,222,128,0.15)", color: "#4ade80" };
  if (s === "Fermé") return { bg: "rgba(248,113,113,0.15)", color: "#f87171" };
  return { bg: "rgba(232,197,71,0.15)", color: ACCENT };
};

export default function AppelsOffresPage() {
  const [status, setStatus] = useState("Tous");
  const [cat, setCat] = useState("Toutes catégories");
  const [search, setSearch] = useState("");

  const filtered = TENDERS.filter(t => {
    const matchStatus = status === "Tous" || t.status === status;
    const matchCat = cat === "Toutes catégories" || t.cat === cat;
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) || t.ref.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchCat && matchSearch;
  });

  return (
    <div style={{ background: DARK, minHeight: "100vh" }}>
      <Navbar />

      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ fontSize: "11px", color: RED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>FTF</span>
            <span style={{ color: MUTED }}>›</span>
            <span style={{ fontSize: "11px", color: MUTED, textTransform: "uppercase", letterSpacing: "0.1em" }}>Appels d'offres</span>
          </div>
          <h1 className="fade-up" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: TEXT, letterSpacing: "-0.03em", marginBottom: "8px" }}>
            Appels d'offres & Marchés publics
          </h1>
          <p style={{ color: MUTED, fontSize: "15px" }}>Consultez et téléchargez les dossiers d'appels d'offres officiels de la FTF</p>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 24px" }}>
        {/* Stats */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "32px", flexWrap: "wrap" }}>
          {STATUSES.slice(1).map(s => {
            const count = TENDERS.filter(t => t.status === s).length;
            const st = statusStyle(s);
            return (
              <div key={s} style={{ background: st.bg, border: `1px solid ${st.color}22`, borderRadius: "10px", padding: "12px 20px", display: "flex", gap: "8px", alignItems: "center" }}>
                <span style={{ color: st.color, fontWeight: 900, fontSize: "20px" }}>{count}</span>
                <span style={{ color: st.color, fontSize: "12px", fontWeight: 600 }}>{s}</span>
              </div>
            );
          })}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}>
          <div style={{ position: "relative", flex: 1, minWidth: "200px" }}>
            <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: MUTED }}>🔍</span>
            <input type="text" placeholder="Rechercher un appel d'offres..." value={search} onChange={e => setSearch(e.target.value)}
              style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: "10px", padding: "10px 12px 10px 38px", fontSize: "13px", outline: "none", boxSizing: "border-box" }} />
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {STATUSES.map(s => (
              <button key={s} onClick={() => setStatus(s)} style={{
                padding: "8px 16px", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "12px", fontWeight: 600,
                background: status === s ? RED : "rgba(255,255,255,0.05)", color: status === s ? "#fff" : MUTED,
              }}>{s}</button>
            ))}
          </div>
          <select value={cat} onChange={e => setCat(e.target.value)}
            style={{ background: CARD, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: "10px", padding: "10px 16px", fontSize: "13px", cursor: "pointer", outline: "none" }}>
            {CATS.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <p style={{ color: MUTED, fontSize: "13px", marginBottom: "16px" }}>{filtered.length} appel{filtered.length > 1 ? "s" : ""} d'offres</p>

        {/* Table */}
        <div className="card" style={{ overflow: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                {["Réf.", "Titre", "Catégorie", "Date publication", "Date limite", "Statut", "Action"].map((h, i) => (
                  <th key={i} style={{ padding: "14px 16px", textAlign: "left", color: MUTED, fontWeight: 600, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((t, i) => {
                const st = statusStyle(t.status);
                return (
                  <tr key={i} style={{ borderBottom: i < filtered.length - 1 ? `1px solid #0a0a0a` : "none" }}>
                    <td style={{ padding: "12px 16px", color: RED, fontWeight: 700, fontSize: "12px", whiteSpace: "nowrap" }}>{t.ref}</td>
                    <td style={{ padding: "12px 16px", color: TEXT, fontWeight: 500, maxWidth: "300px" }}>
                      <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.title}</div>
                      {(t as any).attribue && <div style={{ color: "#4ade80", fontSize: "11px", marginTop: "2px" }}>→ {(t as any).attribue}</div>}
                    </td>
                    <td style={{ padding: "12px 16px", whiteSpace: "nowrap" }}>
                      <span style={{ background: "#111", color: MUTED, fontSize: "10px", padding: "3px 8px", borderRadius: "4px" }}>{t.cat}</span>
                    </td>
                    <td style={{ padding: "12px 16px", color: MUTED, whiteSpace: "nowrap", fontSize: "12px" }}>{t.date}</td>
                    <td style={{ padding: "12px 16px", color: t.status === "Ouvert" ? "#4ade80" : MUTED, whiteSpace: "nowrap", fontSize: "12px", fontWeight: t.status === "Ouvert" ? 700 : 400 }}>{t.deadline}</td>
                    <td style={{ padding: "12px 16px", whiteSpace: "nowrap" }}>
                      <span style={{ ...st, fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "100px" }}>{t.status}</span>
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <button
                        disabled={t.status === "Fermé"}
                        style={{ padding: "6px 12px", borderRadius: "6px", border: "none", cursor: t.status === "Fermé" ? "default" : "pointer", fontSize: "11px", fontWeight: 600, background: t.status === "Fermé" ? "#111" : "rgba(200,16,46,0.15)", color: t.status === "Fermé" ? MUTED : RED }}>
                        ⬇ Télécharger
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <div style={{ marginTop: "24px", padding: "16px 20px", background: "rgba(232,197,71,0.05)", border: `1px solid rgba(232,197,71,0.2)`, borderRadius: "10px" }}>
          <p style={{ color: ACCENT, fontSize: "13px", fontWeight: 600, marginBottom: "4px" }}>ℹ Important</p>
          <p style={{ color: MUTED, fontSize: "13px", lineHeight: 1.6 }}>
            Les dossiers d'appels d'offres sont disponibles gratuitement en téléchargement. Pour toute question, contactez la Direction Administrative et Financière de la FTF à l'adresse <a href="mailto:daf@ftf.org.tn" style={{ color: ACCENT }}>daf@ftf.org.tn</a> ou au +216 71 802 321.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
