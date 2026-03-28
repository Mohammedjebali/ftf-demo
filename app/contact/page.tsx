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

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: "100%", background: "#0a0a0a", border: `1px solid ${BORDER}`, color: TEXT,
    borderRadius: "10px", padding: "12px 16px", fontSize: "14px", outline: "none",
    boxSizing: "border-box" as const, transition: "border-color 0.2s",
  };

  return (
    <div style={{ background: DARK, minHeight: "100vh" }}>
      <Navbar />

      {/* Header */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ fontSize: "11px", color: RED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>FTF</span>
            <span style={{ color: MUTED }}>›</span>
            <span style={{ fontSize: "11px", color: MUTED, textTransform: "uppercase", letterSpacing: "0.1em" }}>Contact</span>
          </div>
          <h1 className="fade-up" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: TEXT, letterSpacing: "-0.03em", marginBottom: "8px" }}>
            Nous contacter
          </h1>
          <p style={{ color: MUTED, fontSize: "15px" }}>Pour toute demande, n'hésitez pas à nous écrire</p>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "48px" }} className="contact-grid">
          {/* Contact info */}
          <div>
            <h2 style={{ color: TEXT, fontSize: "18px", fontWeight: 800, marginBottom: "24px" }}>Informations de contact</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
              {[
                { label: "Adresse", value: "Stade Annexe d'El Menzah, Cité Olympique, 1003 El Menzah" },
                { label: "Tél", value: "+216 71 793 760 / +216 71 793 761 / +216 71 793 767" },
                { label: "Fax", value: "+216 71 783 843" },
                { label: "E-mail", value: "Directeur@ftf.org.tn" },
              ].map((c, i) => (
                <div key={i} className="card" style={{ padding: "16px 20px" }}>
                  <div style={{ color: MUTED, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>{c.label}</div>
                  <div style={{ color: TEXT, fontSize: "13px", lineHeight: 1.6 }}>{c.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form + Map */}
          <div>
            <h2 style={{ color: TEXT, fontSize: "18px", fontWeight: 800, marginBottom: "24px" }}>Envoyer un message</h2>

            {sent ? (
              <div style={{ padding: "40px", textAlign: "center", background: "rgba(74,222,128,0.05)", border: `1px solid rgba(74,222,128,0.2)`, borderRadius: "14px" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                <h3 style={{ color: "#4ade80", fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>Message envoyé!</h3>
                <p style={{ color: MUTED, fontSize: "14px" }}>Nous vous répondrons dans les meilleurs délais.</p>
                <button onClick={() => setSent(false)} className="btn btn-ghost" style={{ marginTop: "24px" }}>Nouveau message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="mobile-col">
                  <div>
                    <label style={{ display: "block", color: MUTED, fontSize: "12px", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Nom complet *</label>
                    <input required type="text" placeholder="Votre nom" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: MUTED, fontSize: "12px", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Email *</label>
                    <input required type="email" placeholder="votre@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "12px", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Sujet *</label>
                  <select required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">Sélectionner un sujet...</option>
                    <option>Demande d'information générale</option>
                    <option>Accréditation presse</option>
                    <option>Appels d'offres</option>
                    <option>Licences et transferts</option>
                    <option>Arbitrage</option>
                    <option>Sélections nationales</option>
                    <option>Réclamation / Plainte</option>
                    <option>Partenariat</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "12px", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Message *</label>
                  <textarea required placeholder="Décrivez votre demande..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, minHeight: "140px", resize: "vertical" as const }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start", padding: "13px 28px", fontSize: "14px" }}>
                  Envoyer le message →
                </button>
              </form>
            )}

            {/* Map placeholder */}
            <div style={{ marginTop: "40px" }}>
              <h3 style={{ color: TEXT, fontSize: "15px", fontWeight: 700, marginBottom: "16px" }}>Localisation</h3>
              <div style={{ borderRadius: "14px", overflow: "hidden", border: `1px solid ${BORDER}`, position: "relative", height: "280px", background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* Map placeholder */}
                <div style={{ position: "absolute", inset: 0, opacity: 0.4 }}>
                  <div style={{ width: "100%", height: "100%", background: "radial-gradient(circle at 50% 50%, #1a1a2e 0%, #050505 100%)", position: "relative" }}>
                    {/* Grid lines */}
                    {[20, 40, 60, 80].map(pct => (
                      <div key={pct} style={{ position: "absolute", left: 0, right: 0, top: `${pct}%`, height: "1px", background: "#1a1a1a" }} />
                    ))}
                    {[20, 40, 60, 80].map(pct => (
                      <div key={pct} style={{ position: "absolute", top: 0, bottom: 0, left: `${pct}%`, width: "1px", background: "#1a1a1a" }} />
                    ))}
                  </div>
                </div>
                <div style={{ position: "relative", textAlign: "center", zIndex: 1 }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: RED, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", boxShadow: `0 0 0 8px rgba(200,16,46,0.2)` }}>
                    <span style={{ color: "#fff", fontSize: "20px" }}>▸</span>
                  </div>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: "14px" }}>FTF — Siège Social</div>
                  <div style={{ color: MUTED, fontSize: "12px" }}>Avenue Mohamed Ali Akid, Cité Olympique</div>
                  <a href="https://maps.google.com/?q=FTF+Tunis" target="_blank" rel="noreferrer"
                    className="btn btn-ghost" style={{ marginTop: "12px", fontSize: "12px", padding: "7px 14px" }}>
                    Ouvrir dans Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
