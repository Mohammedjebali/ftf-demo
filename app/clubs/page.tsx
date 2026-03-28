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

const CLUBS = [
  { name: "Espérance Sportive de Tunis", short: "EST", city: "Tunis", founded: 1919, stadium: "Stade Olympique de Radès", cap: 60000, league: "Ligue 1", region: "Grand Tunis", titles: 32, color: "#c8102e", logo: "https://upload.wikimedia.org/wikipedia/en/f/fb/Esp%C3%A9rance_Sportive_de_Tunis_logo.png" },
  { name: "Club Africain", short: "CA", city: "Tunis", founded: 1920, stadium: "Stade Olympique de Radès", cap: 60000, league: "Ligue 1", region: "Grand Tunis", titles: 12, color: "#e8c547", logo: "https://upload.wikimedia.org/wikipedia/en/c/c5/ClubAfricainlogo.gif" },
  { name: "Étoile Sportive du Sahel", short: "ESS", city: "Sousse", founded: 1925, stadium: "Stade Olympique de Sousse", cap: 22000, league: "Ligue 1", region: "Centre-Est", titles: 14, color: "#c8102e", logo: "/logo-ess.png" },
  { name: "Club Sportif Sfaxien", short: "CSS", city: "Sfax", founded: 1928, stadium: "Stade Taïeb Mhiri", cap: 22000, league: "Ligue 1", region: "Sud-Est", titles: 8, color: "#1a1a1a", logo: "/logo-css.png" },
  { name: "Union Sportive de Monastir", short: "USM", city: "Monastir", founded: 1923, stadium: "Stade Mustapha Ben Jannet", cap: 18000, league: "Ligue 1", region: "Centre-Est", titles: 2, color: "#1a3a8a", logo: "/logo-usm.png" },
  { name: "Club Athlétique de Bizertin", short: "CAB", city: "Bizerte", founded: 1931, stadium: "Stade Mestiri", cap: 11500, league: "Ligue 1", region: "Nord", titles: 3, color: "#0057a8", logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/CA_Bizertin.png" },
  { name: "Association Sportive de la Marsa", short: "ASM", city: "La Marsa", founded: 1934, stadium: "Stade de la Marsa", cap: 8000, league: "Ligue 1", region: "Grand Tunis", titles: 1, color: "#2d8a2d", logo: "/logo-asm.png" },
  { name: "Jeunesse Sportive de Kairouan", short: "JSK", city: "Kairouan", founded: 1953, stadium: "Stade du 7-Novembre", cap: 9000, league: "Ligue 1", region: "Centre-Ouest", titles: 0, color: "#1a6a3a", logo: "/logo-jsk.png" },
  { name: "Association Sportive de Gabès", short: "ASG", city: "Gabès", founded: 1944, stadium: "Stade Ben Jannet de Gabès", cap: 8500, league: "Ligue 1", region: "Sud", titles: 0, color: "#c8102e", logo: "/logo-asg.png" },
  { name: "Union Sportive de Tataouine", short: "UST", city: "Tataouine", founded: 1996, stadium: "Stade Municipal de Tataouine", cap: 7000, league: "Ligue 1", region: "Sud", titles: 0, color: "#c8102e", logo: "/logo-ust.png" },
  { name: "Espérance Sportive Métlaoui", short: "ESM", city: "Métlaoui", founded: 1950, stadium: "Stade de Métlaoui", cap: 7000, league: "Ligue 1", region: "Sud-Ouest", titles: 0, color: "#e8c547", logo: "/logo-esm.png" },
  { name: "Club Sportif Hammam-Lif", short: "CSHL", city: "Hammam-Lif", founded: 1944, stadium: "Stade de Hammam-Lif", cap: 6500, league: "Ligue 1", region: "Grand Tunis", titles: 1, color: "#2d7a2d", logo: "/logo-cshl.png" },
  { name: "Association Sportive de Djerba", short: "ASD", city: "Djerba", founded: 1938, stadium: "Stade Mohamed Salah", cap: 7500, league: "Ligue 1", region: "Sud", titles: 0, color: "#fb923c" },
  { name: "Union Sportive de Ben Guerdane", short: "USBG", city: "Ben Guerdane", founded: 1955, stadium: "Stade de Ben Guerdane", cap: 5000, league: "Ligue 1", region: "Sud", titles: 0, color: "#e8c547", logo: "/logo-usbg.png" },
  { name: "Espérance Sportive de Zarzis", short: "ESZ", city: "Zarzis", founded: 1934, stadium: "Stade Municipal de Zarzis", cap: 6000, league: "Ligue 1", region: "Sud", titles: 0, color: "#e8c547", logo: "/logo-esz.png" },
  { name: "Jeunesse Sportive d'El Abiodh", short: "JSEA", city: "Sidi Bouzid", founded: 1960, stadium: "Stade de Sidi Bouzid", cap: 5500, league: "Ligue 1", region: "Centre-Ouest", titles: 0, color: "#c084fc" },
  { name: "Stade Tunisien", short: "ST", city: "Tunis", founded: 1944, stadium: "Stade Zouiten", cap: 8000, league: "Ligue 2", region: "Grand Tunis", titles: 2, color: "#7c3aed" },
  { name: "Sfax Railway Sport", short: "SRS", city: "Sfax", founded: 1945, stadium: "Stade Taïeb Mhiri", cap: 22000, league: "Ligue 2", region: "Sud-Est", titles: 0, color: "#dc2626" },
];

const REGIONS = ["Toutes", "Grand Tunis", "Centre-Est", "Sud", "Nord", "Centre-Ouest", "Sud-Est", "Sud-Ouest"];
const LEAGUES = ["Toutes ligues", "Ligue 1", "Ligue 2"];

export default function ClubsPage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("Toutes");
  const [league, setLeague] = useState("Toutes ligues");

  const filtered = CLUBS.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.city.toLowerCase().includes(search.toLowerCase()) || c.short.toLowerCase().includes(search.toLowerCase());
    const matchRegion = region === "Toutes" || c.region === region;
    const matchLeague = league === "Toutes ligues" || c.league === league;
    return matchSearch && matchRegion && matchLeague;
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
            <span style={{ fontSize: "11px", color: MUTED, textTransform: "uppercase", letterSpacing: "0.1em" }}>Clubs</span>
          </div>
          <h1 className="fade-up" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: TEXT, letterSpacing: "-0.03em", marginBottom: "8px" }}>
            Clubs Affiliés
          </h1>
          <p style={{ color: MUTED, fontSize: "15px" }}>{CLUBS.length} clubs affiliés à la FTF</p>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 24px" }}>
        {/* Filters */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "32px", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ position: "relative", flex: "1", minWidth: "200px" }}>
            <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: MUTED }}>🔍</span>
            <input type="text" placeholder="Rechercher un club..." value={search} onChange={e => setSearch(e.target.value)}
              style={{ width: "100%", background: CARD, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: "10px", padding: "10px 12px 10px 38px", fontSize: "13px", outline: "none", boxSizing: "border-box" }} />
          </div>
          <select value={region} onChange={e => setRegion(e.target.value)}
            style={{ background: CARD, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: "10px", padding: "10px 16px", fontSize: "13px", cursor: "pointer", outline: "none" }}>
            {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
          <select value={league} onChange={e => setLeague(e.target.value)}
            style={{ background: CARD, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: "10px", padding: "10px 16px", fontSize: "13px", cursor: "pointer", outline: "none" }}>
            {LEAGUES.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>

        <p style={{ color: MUTED, fontSize: "13px", marginBottom: "20px" }}>{filtered.length} club{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}</p>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
          {filtered.map((c, i) => (
            <div key={i} className="card" style={{ overflow: "hidden" }}>
              {/* Club color bar */}
              <div style={{ height: "4px", background: `linear-gradient(90deg, ${c.color}, transparent)` }} />
              <div style={{ padding: "20px" }}>
                {/* Logo placeholder */}
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <div style={{ width: "54px", height: "54px", borderRadius: "50%", background: `radial-gradient(circle at 30% 30%, ${c.color}22, #111)`, border: `1.5px solid ${c.color}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                    {(c as { logo?: string }).logo ? (
                      <img src={(c as { logo?: string }).logo} alt={c.short} style={{ width: "44px", height: "44px", objectFit: "contain" }} onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
                    ) : (
                      <span style={{ color: c.color, fontWeight: 900, fontSize: "14px" }}>{c.short}</span>
                    )}
                  </div>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: "14px", lineHeight: 1.3 }}>{c.name}</div>
                    <div style={{ color: MUTED, fontSize: "12px", marginTop: "2px" }}>{c.city}</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {[
                    { label: "Fondé", value: c.founded },
                    { label: "Stade", value: c.stadium.split(" ").slice(0, 3).join(" ") + "..." },
                    { label: "Capacité", value: c.cap.toLocaleString() },
                    { label: "Titres", value: c.titles },
                  ].map((d, j) => (
                    <div key={j} style={{ background: "#111", borderRadius: "8px", padding: "8px 10px" }}>
                      <div style={{ color: MUTED, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px" }}>{d.label}</div>
                      <div style={{ color: TEXT, fontSize: "12px", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ background: c.league === "Ligue 1" ? "rgba(200,16,46,0.15)" : "rgba(232,197,71,0.15)", color: c.league === "Ligue 1" ? RED : "#e8c547", fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "4px", textTransform: "uppercase" }}>
                    {c.league}
                  </span>
                  <span style={{ color: MUTED, fontSize: "11px" }}>{c.region}</span>
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
