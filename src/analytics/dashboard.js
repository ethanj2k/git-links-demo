/** Aggregates the numbers the analytics dashboard renders. */
export function summarise(events) {
  const byType = new Map();
  for (const e of events) byType.set(e.type, (byType.get(e.type) ?? 0) + 1);
  return [...byType].map(([type, count]) => ({ type, count })).sort((a, b) => b.count - a.count);
}
