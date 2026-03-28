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

const TABS = ["Toutes", "Ligue 1", "Ligue 2", "Sélection", "Futsal", "Officiel"];

const NEWS = [
  { tag: "Sélection", title: "Les Aigles de Carthage en stage de préparation avant le CHAN 2026", date: "28 Mar 2026", img: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80" },
  { tag: "Ligue 1", title: "L'Espérance ST solide en tête après la 26e journée", date: "27 Mar 2026", img: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&q=80" },
  { tag: "Officiel", title: "FTF: Appel d'offres pour la rénovation du Centre Technique National", date: "26 Mar 2026", img: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&q=80" },
  { tag: "Ligue 1", title: "CS Sfaxien retrouve sa forme avec 3 victoires consécutives", date: "25 Mar 2026", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&q=80" },
  { tag: "Futsal", title: "Finale Futsal: Espérance vs Club Africain en direct ce samedi", date: "24 Mar 2026", img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80" },
  { tag: "Ligue 2", title: "AS Djerba prend la tête du groupe nord en Ligue 2", date: "23 Mar 2026", img: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&q=80" },
  { tag: "Sélection", title: "Jalel Kadri convoque 25 joueurs pour les matchs de qualification", date: "22 Mar 2026", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80" },
  { tag: "Officiel", title: "Assemblée générale de la FTF: élection du nouveau bureau exécutif", date: "20 Mar 2026", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80" },
  { tag: "Ligue 1", title: "Club Africain: Le président annonce un plan de relance pour 2026", date: "19 Mar 2026", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80" },
  { tag: "Sélection", title: "U17: La Tunisie se qualifie pour la CAN junior 2026", date: "18 Mar 2026", img: "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=600&q=80" },
  { tag: "Futsal", title: "Championnat national de Futsal: Programme de la 15e journée", date: "17 Mar 2026", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=80" },
  { tag: "Officiel", title: "Nouvelles règles de jeu 2025-2026: ce qui change en Tunisie", date: "15 Mar 2026", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80" },
  { tag: "Ligue 1", title: "US Monastir confirme son statut de surprise de la saison", date: "14 Mar 2026", img: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80" },
  { tag: "Ligue 2", title: "JS Kélibia en difficulté après 3 défaites consécutives", date: "13 Mar 2026", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&q=80" },
  { tag: "Sélection", title: "Bilan positif de la Tunisie dans les qualifications CAN 2027", date: "12 Mar 2026", img: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&q=80" },
  { tag: "Officiel", title: "La FTF signe un partenariat avec la fédération française de football", date: "10 Mar 2026", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80" },
  { tag: "Ligue 1", title: "Étoile du Sahel maintient la pression sur l'Espérance à J26", date: "9 Mar 2026", img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80" },
  { tag: "Futsal", title: "Tournoi international de Futsal à Tunis: les résultats", date: "8 Mar 2026", img: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&q=80" },
  { tag: "Officiel", title: "Communiqué officiel: sanctions disciplinaires suite aux incidents", date: "7 Mar 2026", img: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&q=80" },
  { tag: "Ligue 1", title: "CA Bizertin arrache le nul face à l'AS Marsa en fin de match", date: "6 Mar 2026", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80" },
  { tag: "Sélection", title: "Wajdi Mourou nommé meilleur joueur du mois de février", date: "5 Mar 2026", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80" },
  { tag: "Ligue 2", title: "ES Hammam-Sousse, prétendant sérieux à la montée en Ligue 1", date: "4 Mar 2026", img: "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=600&q=80" },
];

export default function ActualitesPage() {
  const [activeTab, setActiveTab] = useState("Toutes");
  const [search, setSearch] = useState("");

  const filtered = NEWS.filter(n => {
    const matchTab = activeTab === "Toutes" || n.tag === activeTab;
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase()) || n.tag.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div style={{ background: DARK, minHeight: "100vh" }}>
      <Navbar />

      {/* Page header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ fontSize: "11px", color: RED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>FTF</span>
            <span style={{ color: MUTED }}>›</span>
            <span style={{ fontSize: "11px", color: MUTED, textTransform: "uppercase", letterSpacing: "0.1em" }}>Actualités</span>
          </div>
          <h1 className="fade-up" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: TEXT, letterSpacing: "-0.03em", marginBottom: "8px" }}>
            Actualités
          </h1>
          <p style={{ color: MUTED, fontSize: "15px" }}>Toutes les dernières nouvelles du football tunisien</p>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 24px" }}>
        {/* Search */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ position: "relative", maxWidth: "480px" }}>
            <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: MUTED, fontSize: "16px" }}>🔍</span>
            <input
              type="text"
              placeholder="Rechercher une actualité..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: "10px", padding: "12px 16px 12px 42px", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
            />
          </div>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "32px", flexWrap: "wrap" }}>
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "8px 18px", borderRadius: "100px", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: 600,
                background: activeTab === tab ? RED : "rgba(255,255,255,0.05)",
                color: activeTab === tab ? "#fff" : MUTED,
                transition: "all 0.15s",
              }}>
              {tab}
            </button>
          ))}
        </div>

        {/* News grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", marginBottom: "48px" }}>
          {filtered.map((n, i) => (
            <a key={i} href="#" className="card" style={{ display: "block", overflow: "hidden", textDecoration: "none" }}>
              <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                <img src={n.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s" }}
                  onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")} />
              </div>
              <div style={{ padding: "16px" }}>
                <span style={{ display: "inline-block", background: "rgba(200,16,46,0.15)", color: RED, fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {n.tag}
                </span>
                <h3 style={{ color: TEXT, fontSize: "14px", fontWeight: 700, lineHeight: 1.5, marginBottom: "10px", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {n.title}
                </h3>
                <p style={{ color: MUTED, fontSize: "12px" }}>{n.date}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
          {["‹", "1", "2", "3", "4", "5", "›"].map((p, i) => (
            <button key={i} style={{
              width: "38px", height: "38px", borderRadius: "8px", border: `1px solid ${i === 1 ? RED : BORDER}`,
              background: i === 1 ? RED : "transparent", color: i === 1 ? "#fff" : MUTED,
              cursor: "pointer", fontSize: "14px", fontWeight: 600,
            }}>
              {p}
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
