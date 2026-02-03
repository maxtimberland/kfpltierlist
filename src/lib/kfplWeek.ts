export function getKfplWeekRange(now = new Date()) {
  const kst = new Date(now.getTime() + 9 * 3600 * 1000);
  const d = kst.getDay();
  const h = kst.getHours();
  let diff = d === 0 ? 6 : d - 1;
  if (d === 1 && h < 6) diff = 7;

  const start = new Date(kst);
  start.setDate(start.getDate() - diff);
  start.setHours(6, 0, 0, 0);

  const end = new Date(start);
  end.setDate(end.getDate() + 7);
  end.setMilliseconds(-1);

  return { startKst: start, endKst: end };
}

export const toYmd = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
