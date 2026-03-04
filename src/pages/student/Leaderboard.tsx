import { Trophy, Medal } from "lucide-react";

const mockLeaderboard = [
  { rank: 1, name: "Alice Johnson", score: 2450, problems: 45, streak: 12 },
  { rank: 2, name: "Bob Williams", score: 2280, problems: 42, streak: 8 },
  { rank: 3, name: "Charlie Brown", score: 2100, problems: 38, streak: 15 },
  { rank: 4, name: "Diana Ross", score: 1950, problems: 35, streak: 6 },
  { rank: 5, name: "Edward Norton", score: 1800, problems: 32, streak: 10 },
  { rank: 6, name: "Fiona Apple", score: 1650, problems: 28, streak: 4 },
  { rank: 7, name: "George Lucas", score: 1500, problems: 25, streak: 7 },
  { rank: 8, name: "Hannah Montana", score: 1450, problems: 23, streak: 3 },
  { rank: 9, name: "Ivan Drago", score: 1320, problems: 20, streak: 5 },
  { rank: 10, name: "Julia Roberts", score: 1200, problems: 18, streak: 2 },
];

const medalColors = ["text-yellow-500", "text-gray-400", "text-amber-700"];

const Leaderboard = () => (
  <div>
    <h1 className="text-2xl font-bold font-heading text-foreground mb-6">Leaderboard</h1>

    {/* Top 3 */}
    <div className="grid grid-cols-3 gap-4 mb-8">
      {mockLeaderboard.slice(0, 3).map((s, i) => (
        <div key={s.rank} className={`bg-card rounded-xl border border-border p-6 text-center card-hover ${i === 0 ? "ring-2 ring-yellow-500/30" : ""}`}>
          <div className="flex justify-center mb-3">
            {i === 0 ? <Trophy size={32} className={medalColors[i]} /> : <Medal size={28} className={medalColors[i]} />}
          </div>
          <p className="text-sm font-bold text-foreground">{s.name}</p>
          <p className="text-2xl font-bold font-heading text-primary mt-1">{s.score}</p>
          <p className="text-xs text-muted-foreground mt-1">{s.problems} problems • {s.streak} day streak</p>
        </div>
      ))}
    </div>

    {/* Full List */}
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-secondary/50">
            <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-4 w-16">Rank</th>
            <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-4">Student</th>
            <th className="text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-4">Score</th>
            <th className="text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-4">Problems</th>
            <th className="text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-4">Streak</th>
          </tr>
        </thead>
        <tbody>
          {mockLeaderboard.map((s) => (
            <tr key={s.rank} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
              <td className="px-6 py-4 text-sm font-bold text-foreground">#{s.rank}</td>
              <td className="px-6 py-4 text-sm font-medium text-foreground">{s.name}</td>
              <td className="px-6 py-4 text-sm font-bold text-primary text-right">{s.score}</td>
              <td className="px-6 py-4 text-sm text-muted-foreground text-right">{s.problems}</td>
              <td className="px-6 py-4 text-sm text-muted-foreground text-right">{s.streak} days</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Leaderboard;
