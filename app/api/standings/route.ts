import { NextResponse } from "next/server";

// Logo mapping from API-Football for known clubs
const LOGOS: Record<string, string> = {
  "ES Sahel": "https://media.api-sports.io/football/teams/584.png",
  "ES Tunis": "https://media.api-sports.io/football/teams/583.png",
  "CS Sfaxien": "https://media.api-sports.io/football/teams/590.png",
  "Club Africain": "https://media.api-sports.io/football/teams/585.png",
  "C A. Bizertin": "https://media.api-sports.io/football/teams/591.png",
  "AS Marsa": "https://media.api-sports.io/football/teams/592.png",
  "US Ben Guerdane": "https://media.api-sports.io/football/teams/597.png",
  "ES Zarzis": "https://media.api-sports.io/football/teams/600.png",
  "ES. Métlaoui": "https://media.api-sports.io/football/teams/599.png",
  "CS Hammam-Lif": "https://media.api-sports.io/football/teams/594.png",
  "JS Kairouanaise": "https://media.api-sports.io/football/teams/596.png",
  "Stade Tunisien": "https://media.api-sports.io/football/teams/587.png",
  "Stade Gabésien": "https://media.api-sports.io/football/teams/598.png",
  "EGS Gafsa": "https://media.api-sports.io/football/teams/9850.png",
};

export async function GET() {
  try {
    const res = await fetch("https://www.ftf.org.tn/fr/classement-general/", {
      next: { revalidate: 1800 }, // cache 30min
      headers: { "User-Agent": "Mozilla/5.0 (compatible; FTFDemo/1.0)" },
    });
    const html = await res.text();

    // Parse <tr> rows
    const trMatches = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
    const rows: object[] = [];

    for (const m of trMatches) {
      const tdMatches = [...m[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)];
      const cells = tdMatches.map(td =>
        td[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()
      );
      if (cells.length >= 8) {
        const rank = parseInt(cells[0]);
        if (!isNaN(rank) && rank >= 1 && rank <= 20) {
          const team = cells[2] || cells[1];
          const j = parseInt(cells[3]) || 0;
          const g = parseInt(cells[4]) || 0;
          const n = parseInt(cells[5]) || 0;
          const p = parseInt(cells[6]) || 0;
          const bp = parseInt(cells[7]) || 0;
          const bc = parseInt(cells[8]) || 0;
          const pts = parseInt(cells[9]) || 0;
          if (team && j > 0) {
            rows.push({ rank, team, logo: LOGOS[team] || null, played: j, win: g, draw: n, lose: p, gf: bp, ga: bc, gd: bp - bc, points: pts });
          }
        }
      }
    }

    if (rows.length > 0) return NextResponse.json(rows);
    return NextResponse.json({ error: "no_rows" }, { status: 500 });
  } catch (e: unknown) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
