import { StatType } from "./Stat";

export type SkillType = "acrobatics"
  | "animal handling"
  | "arcana"
  | "athletics"
  | "deception"
  | "history"
  | "insight"
  | "intimidation"
  | "investigation"
  | "medicine"
  | "nature"
  | "perception"
  | "performance"
  | "persuasion"
  | "religion"
  | "sleight of hand"
  | "stealth"
  | "survival";

export type Skill = {
  skill: SkillType
  stat: StatType
  proficiency: boolean
  expertise: boolean
}
