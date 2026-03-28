"use client";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const RED = "#c8102e";
const DARK = "#050505";
const CARD = "#0d0d0d";
const BORDER = "#1a1a1a";
const TEXT = "#f0ece4";
const MUTED = "#5a5a5a";
const GOLD = "#e8c547";

const CLUBS: Record<string, {
  name: string; short: string; city: string; founded: number; stadium: string;
  cap: number; league: string; region: string; titles: number; color: string;
  logo?: string; website?: string; president?: string; coach?: string;
  bio?: string; palmares?: string[]; players?: { name: string; pos: string; nat: string }[];
}> = {
  "esperance-sportive-de-tunis": {
    name: "Espérance Sportive de Tunis", short: "EST", city: "Tunis", founded: 1919,
    stadium: "Stade Olympique de Radès", cap: 60000, league: "Ligue 1", region: "Grand Tunis",
    titles: 32, color: RED, logo: "https://upload.wikimedia.org/wikipedia/en/f/fb/Esp%C3%A9rance_Sportive_de_Tunis_logo.png",
    website: "est.org.tn", president: "Hamdi Meddeb", coach: "Maher Kanzari",
    bio: "L'Espérance Sportive de Tunis est le club le plus titré du football tunisien et africain. Fondée en 1919, l'EST a remporté 32 championnats nationaux et 4 Ligues des Champions africaines. Surnommé 'Le Sang et l'Or', le club est basé à Tunis et joue au Stade Olympique de Radès.",
    palmares: ["32× Champion de Tunisie", "4× Ligue des Champions CAF", "7× Coupe de Tunisie", "6× Supercoupe de Tunisie"],
    players: [
      { name: "Mouez Hassen", pos: "GK", nat: "🇹🇳" },
      { name: "Anis Badri", pos: "MF", nat: "🇹🇳" },
      { name: "Yohan Boli", pos: "FW", nat: "🇨🇮" },
      { name: "Mohamed Ali Ben Romdhane", pos: "MF", nat: "🇹🇳" },
      { name: "Rodrigue Bongongui", pos: "FW", nat: "🇨🇬" },
    ]
  },
  "club-africain": {
    name: "Club Africain", short: "CA", city: "Tunis", founded: 1920,
    stadium: "Stade Olympique de Radès", cap: 60000, league: "Ligue 1", region: "Grand Tunis",
    titles: 12, color: "#e8c547", logo: "https://upload.wikimedia.org/wikipedia/en/c/c5/ClubAfricainlogo.gif",
    website: "clubafricain.tn", president: "Walid Louhichi", coach: "Nabil Maaloul",
    bio: "Le Club Africain est l'un des clubs historiques du football tunisien, fondé en 1920. Grand rival de l'Espérance ST dans le derby tunisois, le club a remporté 12 championnats nationaux et reste l'un des plus supportés du pays.",
    palmares: ["12× Champion de Tunisie", "4× Coupe de Tunisie", "1× Coupe des vainqueurs de coupe CAF"],
    players: [
      { name: "Moez Ben Chérifia", pos: "GK", nat: "🇹🇳" },
      { name: "Taha Yassine Khenissi", pos: "FW", nat: "🇹🇳" },
      { name: "Ferjani Sassi", pos: "MF", nat: "🇹🇳" },
    ]
  },
  "etoile-sportive-du-sahel": {
    name: "Étoile Sportive du Sahel", short: "ESS", city: "Sousse", founded: 1925,
    stadium: "Stade Olympique de Sousse", cap: 22000, league: "Ligue 1", region: "Centre-Est",
    titles: 14, color: "#e8c547", logo: "/logo-ess.png",
    president: "Mounir Agrebi", coach: "Khaled Ben Yahia",
    bio: "Fondée en 1925 à Sousse, l'Étoile Sportive du Sahel est l'un des clubs les plus titrés de l'Afrique du Nord. Elle a remporté 2 Ligues des Champions CAF et est l'un des clubs tunisiens les plus performants sur la scène continentale.",
    palmares: ["14× Champion de Tunisie", "2× Ligue des Champions CAF", "6× Coupe de Tunisie", "1× Supercoupe de la CAF"],
    players: [
      { name: "Marwan Chargui", pos: "GK", nat: "🇹🇳" },
      { name: "Mohamed Ali Yaâkoubi", pos: "DF", nat: "🇹🇳" },
      { name: "Franck Kom", pos: "MF", nat: "🇨🇲" },
    ]
  },
  "union-sportive-de-monastir": {
    name: "Union Sportive de Monastir", short: "USM", city: "Monastir", founded: 1923,
    stadium: "Stade Mustapha Ben Jannet", cap: 18000, league: "Ligue 1", region: "Centre-Est",
    titles: 2, color: "#1a3a8a", logo: "/logo-usm.png",
    president: "Slim Riahi", coach: "Khaled Souayah",
    bio: "L'Union Sportive de Monastir est l'un des clubs les plus récemment promus parmi l'élite du football tunisien. Fondée en 1923 dans la ville côtière de Monastir, patrie de Habib Bourguiba, le club a connu une montée en puissance remarquable ces dernières années grâce à des investissements importants.",
    palmares: ["2× Champion de Tunisie", "1× Coupe de Tunisie"],
    players: [{ name: "Hamza Younes", pos: "GK", nat: "🇹🇳" }, { name: "Bassem Srarfi", pos: "MF", nat: "🇹🇳" }]
  },
  "club-athletique-de-bizertin": {
    name: "Club Athlétique de Bizertin", short: "CAB", city: "Bizerte", founded: 1931,
    stadium: "Stade Mestiri", cap: 11500, league: "Ligue 1", region: "Nord",
    titles: 3, color: "#0057a8", logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/CA_Bizertin.png",
    president: "Hédi Jeridi", coach: "Riadh Kraiem",
    bio: "Le Club Athlétique de Bizertin représente fièrement la ville portuaire de Bizerte, capitale du nord tunisien. Fondé en 1931, le club est l'un des piliers du football du nord de la Tunisie avec 3 titres nationaux à son actif.",
    palmares: ["3× Champion de Tunisie", "3× Coupe de Tunisie"],
    players: [{ name: "Mokhtar Benbrahem", pos: "GK", nat: "🇹🇳" }, { name: "Yassin Meriah", pos: "DF", nat: "🇹🇳" }]
  },
  "association-sportive-de-la-marsa": {
    name: "Association Sportive de la Marsa", short: "ASM", city: "La Marsa", founded: 1934,
    stadium: "Stade de la Marsa", cap: 8000, league: "Ligue 1", region: "Grand Tunis",
    titles: 1, color: "#2d8a2d", logo: "/logo-asm.png",
    president: "Mohamed Ghali", coach: "Nabil Kouki",
    bio: "L'Association Sportive de la Marsa est un club de banlieue nord de Tunis, basé dans la station balnéaire de La Marsa. Fondée en 1934, l'ASM évolue régulièrement entre la Ligue 1 et la Ligue 2.",
    palmares: ["1× Champion de Tunisie", "1× Coupe de Tunisie"],
    players: [{ name: "Hamdi Harbaoui", pos: "FW", nat: "🇹🇳" }]
  },
  "jeunesse-sportive-de-kairouan": {
    name: "Jeunesse Sportive de Kairouan", short: "JSK", city: "Kairouan", founded: 1953,
    stadium: "Stade du 7-Novembre", cap: 9000, league: "Ligue 1", region: "Centre-Ouest",
    titles: 0, color: "#1a6a3a", logo: "/logo-jsk.png",
    president: "Farouk Ben Ammar", coach: "Riadh Bouazizi",
    bio: "La Jeunesse Sportive de Kairouan représente la ville sainte de Kairouan, l'une des plus importantes cités islamiques d'Afrique. Fondée en 1953, la JSK est la fierté du centre-ouest tunisien et milite régulièrement en première division.",
    palmares: ["Plusieurs promotions en Ligue 1"],
    players: [{ name: "Aymen Haj Hamida", pos: "MF", nat: "🇹🇳" }]
  },
  "association-sportive-de-gabes": {
    name: "Association Sportive de Gabès", short: "ASG", city: "Gabès", founded: 1944,
    stadium: "Stade Ben Jannet de Gabès", cap: 8500, league: "Ligue 1", region: "Sud",
    titles: 0, color: "#c8102e", logo: "/logo-asg.png",
    president: "Chokri Bensalem", coach: "Hichem Ben Ammar",
    bio: "L'Association Sportive de Gabès est le club phare du sud-est tunisien, basé dans la ville côtière de Gabès. Fondée en 1944, l'ASG représente une région à forte identité culturelle et milite pour se maintenir parmi l'élite nationale.",
    palmares: ["Promotions en Ligue 1"],
    players: [{ name: "Maher Hannachi", pos: "FW", nat: "🇹🇳" }]
  },
  "union-sportive-de-tataouine": {
    name: "Union Sportive de Tataouine", short: "UST", city: "Tataouine", founded: 1996,
    stadium: "Stade Municipal de Tataouine", cap: 7000, league: "Ligue 1", region: "Sud",
    titles: 0, color: "#c8102e", logo: "/logo-ust.png",
    president: "Abdelmalek Ben Barka", coach: "Sofiene Bougacha",
    bio: "L'Union Sportive de Tataouine est le club de la ville frontalière de Tataouine, aux portes du Sahara tunisien. Fondée en 1996, l'UST incarne la résilience du football du grand sud et a su se tailler une place parmi les clubs de Ligue 1.",
    palmares: ["Promotions successives en Ligue 1"],
    players: [{ name: "Nizar Issaoui", pos: "MF", nat: "🇹🇳" }]
  },
  "esperance-sportive-metlaoui": {
    name: "Espérance Sportive Métlaoui", short: "ESM", city: "Métlaoui", founded: 1950,
    stadium: "Stade de Métlaoui", cap: 7000, league: "Ligue 1", region: "Sud-Ouest",
    titles: 0, color: "#e8c547", logo: "/logo-esm.png",
    president: "Walid Ben Amara", coach: "Mohamed Trabelsi",
    bio: "L'Espérance Sportive Métlaoui est le club de la ville minière de Métlaoui dans le Bassin minier de Gafsa. Fondée en 1950, l'ESM représente la tradition ouvrière et sportive d'une région riche en phosphate mais parfois oubliée des spotlights du football national.",
    palmares: ["Promotions en Ligue 1"],
    players: [{ name: "Sofiene Chaabani", pos: "DF", nat: "🇹🇳" }]
  },
  "club-sportif-hammam-lif": {
    name: "Club Sportif Hammam-Lif", short: "CSHL", city: "Hammam-Lif", founded: 1944,
    stadium: "Stade de Hammam-Lif", cap: 6500, league: "Ligue 1", region: "Grand Tunis",
    titles: 1, color: "#2d7a2d", logo: "/logo-cshl.png",
    president: "Lassaad Rajhi", coach: "Hatem Haouachi",
    bio: "Le Club Sportif Hammam-Lif est basé dans la ville balnéaire de Hammam-Lif au sud de Tunis. Fondé en 1944, le club est l'un des clubs historiques de la banlieue de la capitale et a remporté un titre national.",
    palmares: ["1× Champion de Tunisie", "1× Coupe de Tunisie"],
    players: [{ name: "Bilel Khelifa", pos: "FW", nat: "🇹🇳" }]
  },
  "association-sportive-de-djerba": {
    name: "Association Sportive de Djerba", short: "ASD", city: "Djerba", founded: 1938,
    stadium: "Stade Mohamed Salah", cap: 7500, league: "Ligue 1", region: "Sud",
    titles: 0, color: "#2d8a2d", logo: "/logo-asd.png",
    president: "Moncef Loukil", coach: "Hedi Laouiti",
    bio: "L'Association Sportive de Djerba représente l'île touristique de Djerba, la 'Île aux Lotophages' de l'Antiquité. Fondée en 1938, l'ASD est la fierté footballistique de cette île méditerranéenne au riche patrimoine culturel.",
    palmares: ["Promotions en Ligue 1"],
    players: [{ name: "Wael Ben Saha", pos: "MF", nat: "🇹🇳" }]
  },
  "union-sportive-de-ben-guerdane": {
    name: "Union Sportive de Ben Guerdane", short: "USBG", city: "Ben Guerdane", founded: 1955,
    stadium: "Stade de Ben Guerdane", cap: 5000, league: "Ligue 1", region: "Sud",
    titles: 0, color: "#e8c547", logo: "/logo-usbg.png",
    president: "Tarek Bel Hadj Ali", coach: "Bassem Ben Kraiem",
    bio: "L'Union Sportive de Ben Guerdane est le club de la ville frontalière de Ben Guerdane, aux portes de la Libye. Fondée en 1955, l'USBG a connu des épisodes historiques et représente une région stratégique du sud-est tunisien.",
    palmares: ["Promotions en Ligue 1"],
    players: [{ name: "Anis Nasri", pos: "DF", nat: "🇹🇳" }]
  },
  "esperance-sportive-de-zarzis": {
    name: "Espérance Sportive de Zarzis", short: "ESZ", city: "Zarzis", founded: 1934,
    stadium: "Stade Municipal de Zarzis", cap: 6000, league: "Ligue 1", region: "Sud",
    titles: 0, color: "#e8c547", logo: "/logo-esz.png",
    president: "Lotfi Ben Oun", coach: "Noureddine Dhieb",
    bio: "L'Espérance Sportive de Zarzis est le club de la ville côtière de Zarzis dans le gouvernorat de Médenine. Fondée en 1934, l'ESZ est une institution sportive du littoral sud tunisien et milite pour s'établir durablement en Ligue 1.",
    palmares: ["Promotions en Ligue 1"],
    players: [{ name: "Mehdi Ben Dhiab", pos: "FW", nat: "🇹🇳" }]
  },
  "stade-tunisien": {
    name: "Stade Tunisien", short: "ST", city: "Tunis", founded: 1944,
    stadium: "Stade Zouiten", cap: 8000, league: "Ligue 2", region: "Grand Tunis",
    titles: 2, color: "#c8102e", logo: "/logo-st.png",
    president: "Khaled Aouini", coach: "Saber Amri",
    bio: "Le Stade Tunisien est un club historique de Tunis, fondé en 1944. Avec 2 championnats nationaux à son actif, le ST milite actuellement en Ligue 2 et aspire à retrouver l'élite du football tunisien.",
    palmares: ["2× Champion de Tunisie", "2× Coupe de Tunisie"],
    players: [{ name: "Yassine Ben Yahia", pos: "GK", nat: "🇹🇳" }]
  },
  "sfax-railway-sport": {
    name: "Sfax Railway Sport", short: "SRS", city: "Sfax", founded: 1920,
    stadium: "Stade Taïeb Mhiri", cap: 22000, league: "Ligue 2", region: "Sud-Est",
    titles: 0, color: "#e8c547", logo: "/logo-srs.png",
    president: "Jamel Ben Mrad", coach: "Lotfi Laouiti",
    bio: "Le Sfax Railway Sport est l'un des clubs fondateurs du football tunisien, créé en 1920. Lié historiquement aux travailleurs du chemin de fer de Sfax, le SRS est un club emblématique de la capitale économique du sud tunisien.",
    palmares: ["Finaliste Coupe de Tunisie"],
    players: [{ name: "Mokhtar Tlili", pos: "MF", nat: "🇹🇳" }]
  },
  "jeunesse-sportive-del-abiodh": {
    name: "Jeunesse Sportive d'El Abiodh", short: "JSEA", city: "Sidi Bouzid", founded: 1960,
    stadium: "Stade de Sidi Bouzid", cap: 5500, league: "Ligue 1", region: "Centre-Ouest",
    titles: 0, color: "#c084fc", logo: undefined,
    president: "Mohamed Kahloun", coach: "Hichem Jemai",
    bio: "La Jeunesse Sportive d'El Abiodh représente la région de Sidi Bouzid, symbole de la Révolution tunisienne de 2011. Fondée en 1960, la JSEA incarne la passion footballistique d'une région au cœur de l'histoire contemporaine de la Tunisie.",
    palmares: ["Promotions en Ligue 1"],
    players: [{ name: "Ramzi Ben Hamza", pos: "MF", nat: "🇹🇳" }]
  },
  "club-sportif-sfaxien": {
    name: "Club Sportif Sfaxien", short: "CSS", city: "Sfax", founded: 1928,
    stadium: "Stade Taïeb Mhiri", cap: 22000, league: "Ligue 1", region: "Sud-Est",
    titles: 8, color: "#e8c547", logo: "/logo-css.png",
    president: "Imed Meddeb", coach: "Abdelmajid Chetali",
    bio: "Le Club Sportif Sfaxien, fondé en 1928, est le club le plus représentatif de la ville de Sfax et du sud tunisien. Avec 8 titres nationaux et 2 finales de Ligue des Champions CAF, le CSS est une institution du football tunisien.",
    palmares: ["8× Champion de Tunisie", "5× Coupe de Tunisie", "2× Finaliste Ligue des Champions CAF"],
    players: [
      { name: "Aymen Balbouli", pos: "GK", nat: "🇹🇳" },
      { name: "Bilel Ifa", pos: "DF", nat: "🇹🇳" },
      { name: "Ghaylène Chaalali", pos: "MF", nat: "🇹🇳" },
    ]
  },
};

function slugify(name: string) {
  return name.toLowerCase().replace(/[éèê]/g, "e").replace(/[àâ]/g, "a").replace(/[ùû]/g, "u").replace(/[î]/g, "i").replace(/[ô]/g, "o").replace(/[ç]/g, "c").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export default function ClubDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const club = CLUBS[slug as string];

  if (!club) {
    return (
      <div style={{ background: DARK, minHeight: "100vh" }}>
        <Navbar />
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
          <p style={{ color: MUTED, fontSize: "16px", marginBottom: "20px" }}>Club introuvable</p>
          <a href="/clubs" style={{ color: RED, fontSize: "14px" }}>← Retour aux clubs</a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ background: DARK, minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${club.color}18, transparent 60%), #080808`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "20px", fontSize: "11px", color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            <a href="/" style={{ color: MUTED, textDecoration: "none" }}>FTF</a>
            <span>›</span>
            <a href="/clubs" style={{ color: MUTED, textDecoration: "none" }}>Clubs</a>
            <span>›</span>
            <span style={{ color: TEXT }}>{club.short}</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
            {club.logo ? (
              <div style={{ width: "100px", height: "100px", borderRadius: "16px", background: "#111", border: `1px solid ${club.color}44`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: "10px" }}>
                <img src={club.logo} alt={club.short} style={{ width: "80px", height: "80px", objectFit: "contain" }} />
              </div>
            ) : (
              <div style={{ width: "100px", height: "100px", borderRadius: "16px", background: `${club.color}22`, border: `2px solid ${club.color}44`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: club.color, fontWeight: 900, fontSize: "24px" }}>{club.short}</span>
              </div>
            )}
            <div>
              <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 900, color: TEXT, marginBottom: "6px", letterSpacing: "-0.02em" }}>{club.name}</h1>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", fontSize: "13px", color: MUTED }}>
                <span>{club.city}</span>
                <span>{club.stadium}</span>
                <span>Fondé en {club.founded}</span>
                <span style={{ color: club.color, fontWeight: 700 }}>{club.titles} titres</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px", display: "grid", gridTemplateColumns: "1fr 320px", gap: "32px", alignItems: "start" }}>

        {/* Left */}
        <div>
          {/* Bio */}
          {club.bio && (
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "16px", padding: "24px", marginBottom: "24px" }}>
              <h2 style={{ color: TEXT, fontSize: "16px", fontWeight: 700, marginBottom: "14px" }}>À propos</h2>
              <p style={{ color: "#8a7e70", fontSize: "14px", lineHeight: 1.8 }}>{club.bio}</p>
            </div>
          )}

          {/* Palmarès */}
          {club.palmares && (
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "16px", padding: "24px", marginBottom: "24px" }}>
              <h2 style={{ color: TEXT, fontSize: "16px", fontWeight: 700, marginBottom: "16px" }}>Palmarès</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {club.palmares.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", background: "#111", borderRadius: "10px", border: `1px solid ${BORDER}` }}>
                    <span style={{ fontSize: "14px", color: "#e8c547", fontWeight: 700 }}>◆</span>
                    <span style={{ color: "#c0b8ac", fontSize: "14px" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Squad */}
          {club.players && club.players.length > 0 && (
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "16px", padding: "24px" }}>
              <h2 style={{ color: TEXT, fontSize: "16px", fontWeight: 700, marginBottom: "16px" }}>Joueurs notables</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                {club.players.map((p, i) => (
                  <div key={i} style={{ background: "#111", borderRadius: "10px", padding: "14px", border: `1px solid ${BORDER}`, textAlign: "center" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: `${club.color}22`, border: `1px solid ${club.color}33`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", fontSize: "18px" }}>
                      {p.nat}
                    </div>
                    <div style={{ color: TEXT, fontSize: "12px", fontWeight: 600 }}>{p.name}</div>
                    <div style={{ color: MUTED, fontSize: "11px", marginTop: "4px" }}>{p.pos}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Info card */}
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "16px", padding: "20px" }}>
            <h3 style={{ color: TEXT, fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>Informations</h3>
            {[
              { label: "Ligue", value: club.league },
              { label: "Région", value: club.region },
              { label: "Stade", value: club.stadium },
              { label: "Capacité", value: `${club.cap.toLocaleString()} places` },
              { label: "Fondé", value: club.founded },
              ...(club.president ? [{ label: "Président", value: club.president }] : []),
              ...(club.coach ? [{ label: "Entraîneur", value: club.coach }] : []),
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: `1px solid #111`, fontSize: "13px" }}>
                <span style={{ color: MUTED }}>{item.label}</span>
                <span style={{ color: TEXT, fontWeight: 500, textAlign: "right", maxWidth: "55%" }}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Back */}
          <a href="/clubs" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", background: CARD, border: `1px solid ${BORDER}`, borderRadius: "12px", color: MUTED, fontSize: "13px", textDecoration: "none", transition: "border-color 0.2s" }}
            onMouseOver={e => (e.currentTarget.style.borderColor = RED)} onMouseOut={e => (e.currentTarget.style.borderColor = BORDER)}>
            ← Tous les clubs
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
