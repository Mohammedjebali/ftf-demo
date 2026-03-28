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
            <p style={{ color: MUTED, fontSize: "13px", lineHeight: 1.7, maxWidth: "280px" }}>
              Organe directeur du football tunisien depuis 1956. Affiliée à la FIFA et à la CAF.
            </p>
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
            <p style={{ color: MUTED, fontSize: "13px", lineHeight: 1.7 }}>
              Avenue Mohamed Ali Akid<br />Cité Olympique, Tunis 1003<br /><br />
              <a href="tel:+21671802321" style={{ color: MUTED }}>+216 71 802 321</a><br />
              <a href="mailto:contact@ftf.org.tn" style={{ color: MUTED }}>contact@ftf.org.tn</a>
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
