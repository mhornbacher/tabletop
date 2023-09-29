import { shortStat } from "./format"
import { Stat } from "../types/Stats"

describe('format', () => {
  describe('formatStat', () => {
    test.each<[string, Stat]>([
      ['STR', 'strength'],
      ['DEX', 'dexterity'],
      ['CON', 'constitution'],
      ['INT', 'intelligence'],
      ['WIS', 'wisdom'],
      ['CHA', 'charisma']
    ])('should return %s for %s', (shortened, stat) => {
      expect(shortStat(stat)).toEqual(shortened)
    })
  })
})
