let eventGuid = 0;
const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "Jessica Alba",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "Barbara Broccoli",
    start: todayStr + "T12:00:00",
  },
  {
    id: createEventId(),
    title: "Linda Hamilton",
    start: todayStr + "T24:00:00",
  },
  {
    id: createEventId(),
    title: "Jennifer Aniston",
    start: todayStr + "T36:00:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
