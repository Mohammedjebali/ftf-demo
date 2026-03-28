import { NextResponse } from "next/server";

const API_KEY = process.env.API_FOOTBALL_KEY!;
const BASE = "https://v3.football.api-sports.io";

export async function GET() {
  const res = await fetch(`${BASE}/standings?league=202&season=2024`, {
    headers: { "x-apisports-key": API_KEY },
    next: { revalidate: 3600 }, // cache 1h
  });
  const data = await res.json();
  const standings = data?.response?.[0]?.league?.standings?.[0] ?? [];
  const mapped = standings.map((t: any) => ({
    rank: t.rank,
    team: t.team.name,
    logo: t.team.logo,
    played: t.all.played,
    win: t.all.win,
    draw: t.all.draw,
    lose: t.all.lose,
    gf: t.all.goals.for,
    ga: t.all.goals.against,
    gd: t.goalsDiff,
    points: t.points,
    form: t.form,
  }));
  return NextResponse.json(mapped);
}
