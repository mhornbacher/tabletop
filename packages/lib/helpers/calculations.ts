import { SkillStatMap } from '../types/Skills'
import { StatBlock } from '../types/Stats'

/** Dice roll modifier for a given stat */
export function statModifer(stat: number) {
  return Math.floor((stat - 10) / 2)
}

/** Proficiency Bonus based on character level */
export function proficiencyBonus(level: number) {
  return Math.ceil(level / 4) + 1
}

/** Dice roll modifier for a given skill on a statBlock */
export function skillModifier(stats: StatBlock, skill: string) {
  // get the proficiency bonus (doubled with expertise)
  const bonus = proficiencyBonus(stats.level)
    * (stats.skills[skill].proficient ? 1 : 0)
    * (stats.skills[skill].expertise ? 2 : 1)

  // we start with the default modifier
  return statModifer(stats.stats[SkillStatMap[skill]]) + bonus
}

/** Passive perception for a given StatBlock */
export function passivePerception(stats: StatBlock) {
  return 10 + skillModifier(stats, 'perception')
}
