import { Stat } from "../types/Stats";

/** Return the shortened stat name for a given stat type */
export function shortStat(stat: Stat) {
  return stat.slice(0, 3).toUpperCase();
}
