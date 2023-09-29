import { StatBlock } from "../types/Stats";
import { proficiencyBonus, skillModifier, statModifer, passivePerception } from "./calculations";

describe('modifiers', () => {
  describe('statModifer', () => {
    test.each([
      [-5,  1],
      [-4,  2], [-4,  3],
      [-3,  4], [-3,  5],
      [-2,  6], [-2,  7],
      [-1,  8], [-1,  9],
      [ 0, 10], [ 0, 11],
      [ 1, 12], [ 1, 13],
      [ 2, 14], [ 2, 15],
      [ 3, 16], [ 3, 17],
      [ 4, 18], [ 4, 19],
      [ 5, 20],
    ])('should return %s for %s', (modifier, stat) => {
      expect(statModifer(stat)).toEqual(modifier);
    })
  })

  describe('proficiencyBonus', () => {
    test.each([
      [2,  1], [2,  2], [2,  3], [2,  4],
      [3,  5], [3,  6], [3,  7], [3,  8],
      [4,  9], [4, 10], [4, 11], [4, 12],
      [5, 13], [5, 14], [5, 15], [5, 16],
      [6, 17], [6, 18], [6, 19], [6, 20],
    ])('should return %s for level %s', (bonus, level) => {
      expect(proficiencyBonus(level)).toEqual(bonus);
    })
  })

  describe('skillModifier', () => {
    it('should return the correct modifier', () => {
      const stats: StatBlock = {
        level: 6,
        stats: {
          intelligence: 16,
          wisdom: 8,
        },
        skills: {
          "nature": { proficient: true, expertise: false },
          "perception": { proficient: true, expertise: true },
          "survival": { proficient: false, expertise: false },
        },
      } as StatBlock

      expect(skillModifier(stats, 'nature')).toEqual(6) // 3 + 3
      expect(skillModifier(stats, 'perception')).toEqual(5) // -1 + 6
      expect(skillModifier(stats, 'survival')).toEqual(-1) // default stat
    })
  })

  describe('passivePerception', () => {
    it('should return the correct value', () => {
      const stats: StatBlock = {
        level: 2,
        stats: {
          wisdom: 8,
        },
        skills: {
          "perception": { proficient: true, expertise: true },
        },
      } as StatBlock
      expect(passivePerception(stats)).toEqual(13) // 10 + -1 + 2 + 2

      stats.level = 5
      expect(passivePerception(stats)).toEqual(15) // 10 + -1 + 3 + 3
    })
  })
})
