// Sistema simples de ranking em memória
// Para produção, considere usar AsyncStorage ou um backend

export interface RankingEntry {
  name: string;
  score: number;
  date: string;
}

let rankingData: RankingEntry[] = [
  { name: "João Silva", score: 100, date: "2026-05-01" },
  { name: "Maria Santos", score: 90, date: "2026-05-02" },
  { name: "Pedro Costa", score: 80, date: "2026-05-03" },
];

export const getRanking = (): RankingEntry[] => {
  return rankingData.sort((a, b) => b.score - a.score).slice(0, 10);
};

export const addToRanking = (name: string, score: number): void => {
  const today = new Date().toISOString().split('T')[0];
  rankingData.push({ name, score, date: today });
  rankingData.sort((a, b) => b.score - a.score);
  if (rankingData.length > 50) {
    rankingData = rankingData.slice(0, 50);
  }
};

export const resetRanking = (): void => {
  rankingData = [];
};
