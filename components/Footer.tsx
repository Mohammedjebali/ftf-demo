const BORDER = "#1a1a1a";
const MUTED = "#5a5a5a";
const TEXT = "#f0ece4";

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${BORDER}`, padding: "40px 24px", marginTop: "60px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "40px" }} className="mobile-grid-1">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <img src="/ftf-logo.jpg" alt="FTF" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
              <div>
                <div style={{ color: TEXT, fontWeight: 800, fontSize: "14px" }}>Fédération Tunisienne</div>
                <div style={{ color: MUTED, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>de Football</div>
              </div>
            </div>
            <p style={{ color: MUTED, fontSize: "13px", lineHeight: 1.7, maxWidth: "280px", marginBottom: "20px" }}>
              Organe directeur du football tunisien depuis 1957. Affiliée à la FIFA et à la CAF.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href="https://www.facebook.com/ftf.officielle" target="_blank" rel="noreferrer"
                style={{ width: "34px", height: "34px", borderRadius: "8px", background: "#1a1a1a", border: "1px solid #2a2a2a", display: "flex", alignItems: "center", justifyContent: "center" }}
                onMouseOver={e => (e.currentTarget.style.borderColor = "#c8102e")} onMouseOut={e => (e.currentTarget.style.borderColor = "#2a2a2a")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#f0ece4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/ftf.tn/" target="_blank" rel="noreferrer"
                style={{ width: "34px", height: "34px", borderRadius: "8px", background: "#1a1a1a", border: "1px solid #2a2a2a", display: "flex", alignItems: "center", justifyContent: "center" }}
                onMouseOver={e => (e.currentTarget.style.borderColor = "#c8102e")} onMouseOut={e => (e.currentTarget.style.borderColor = "#2a2a2a")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f0ece4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#f0ece4" stroke="none"/></svg>
              </a>
              <a href="https://www.youtube.com/c/ftfofficielle" target="_blank" rel="noreferrer"
                style={{ width: "34px", height: "34px", borderRadius: "8px", background: "#1a1a1a", border: "1px solid #2a2a2a", display: "flex", alignItems: "center", justifyContent: "center" }}
                onMouseOver={e => (e.currentTarget.style.borderColor = "#c8102e")} onMouseOut={e => (e.currentTarget.style.borderColor = "#2a2a2a")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#f0ece4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#050505"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ color: TEXT, fontSize: "13px", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Compétitions</h4>
            {["Ligue 1", "Ligue 2", "Coupe de Tunisie", "Futsal", "U21 / U17"].map(l => (
              <a key={l} href="#" style={{ display: "block", color: MUTED, fontSize: "13px", marginBottom: "8px" }}
                onMouseOver={e => (e.currentTarget.style.color = TEXT)} onMouseOut={e => (e.currentTarget.style.color = MUTED)}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ color: TEXT, fontSize: "13px", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Organisation</h4>
            {["À propos", "Arbitrage", "Clubs affiliés", "Appels d'offres"].map(l => (
              <a key={l} href="#" style={{ display: "block", color: MUTED, fontSize: "13px", marginBottom: "8px" }}
                onMouseOver={e => (e.currentTarget.style.color = TEXT)} onMouseOut={e => (e.currentTarget.style.color = MUTED)}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ color: TEXT, fontSize: "13px", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Contact</h4>
            <p style={{ color: MUTED, fontSize: "13px", lineHeight: 1.9 }}>
              Stade Annexe d'El Menzah<br />
              Cité Olympique, 1003 El Menzah<br /><br />
              Tél : <a href="tel:+21671793760" style={{ color: MUTED }}>+216 71 793 760</a><br />
              Fax : +216 71 783 843<br />
              <a href="mailto:Directeur@ftf.org.tn" style={{ color: MUTED }}>Directeur@ftf.org.tn</a>
            </p>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <span style={{ color: MUTED, fontSize: "12px" }}>© 2026 Fédération Tunisienne de Football · Tous droits réservés</span>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Mentions légales", "Politique de confidentialité", "Contact"].map(l => (
              <a key={l} href="/contact" style={{ color: MUTED, fontSize: "12px" }}
                onMouseOver={e => (e.currentTarget.style.color = TEXT)} onMouseOut={e => (e.currentTarget.style.color = MUTED)}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
