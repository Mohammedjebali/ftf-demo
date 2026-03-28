import { NextResponse } from "next/server";

const API_KEY = process.env.API_FOOTBALL_KEY!;
const BASE = "https://v3.football.api-sports.io";

export async function GET() {
  const res = await fetch(`${BASE}/fixtures?league=202&season=2024`, {
    headers: { "x-apisports-key": API_KEY },
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  const all: any[] = data?.response ?? [];

  const played = all.filter((f) => f.fixture.status.short === "FT");
  const upcoming = all.filter((f) => ["NS", "TBD"].includes(f.fixture.status.short));

  const map = (f: any) => ({
    id: f.fixture.id,
    date: f.fixture.date,
    home: f.teams.home.name,
    homeLogo: f.teams.home.logo,
    away: f.teams.away.name,
    awayLogo: f.teams.away.logo,
    homeScore: f.goals.home,
    awayScore: f.goals.away,
    status: f.fixture.status.short,
  });

  return NextResponse.json({
    recent: played.slice(-8).reverse().map(map),
    upcoming: upcoming.slice(0, 8).map(map),
  });
}
