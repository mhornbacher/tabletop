import { SkillStatMap, StatSkillMap } from './Skills'

describe('Skills', () => {
  describe('SkillsStatMap', () => {
    test.each([
      ["acrobatics", "dexterity"],
      ["animal handling", "wisdom"],
      ["arcana", "intelligence"],
      ["athletics", "strength"],
      ["deception", "charisma"],
      ["history", "intelligence"],
      ["insight", "wisdom"],
      ["intimidation", "charisma"],
      ["investigation", "intelligence"],
      ["medicine", "wisdom"],
      ["nature", "intelligence"],
      ["perception", "wisdom"],
      ["performance", "charisma"],
      ["persuasion", "charisma"],
      ["religion", "intelligence"],
      ["sleight of hand", "dexterity"],
      ["stealth", "dexterity"],
      ["survival", "wisdom"]
    ])(`%s skill should be under the %s stat`, (skill, stat) => {
      expect(SkillStatMap[skill]).toEqual(stat)
    })
  })

  describe('StatSkillMap', () => {
    test.each([
      ["strength", ["athletics"]],
      ["dexterity", ["acrobatics", "sleight of hand", "stealth"]],
      ["constitution", []],
      ["intelligence", ["arcana", "history", "investigation", "nature", "religion"]],
      ["wisdom", ["animal handling", "insight", "medicine", "perception", "survival"]],
      ["charisma", ["deception", "intimidation", "performance", "persuasion"]]
    ])(`%s stat should have %s skills`, (stat, skills) => {
      expect(StatSkillMap[stat]).toEqual(skills)
    })
  })
})
