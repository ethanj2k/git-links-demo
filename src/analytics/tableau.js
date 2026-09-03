/** Tableau export: the dashboard's own summary, flattened to rows. */
import { summarise } from './dashboard.js';
export const toRows = (events) => summarise(events).map(({ type, count }) => [type, count]);
