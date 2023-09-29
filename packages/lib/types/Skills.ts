import { Stat } from "./Stats";

export type Skill = "acrobatics"
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

export const StatSkillMap: { [key in Stat]: Skill[] } = {
  strength: ["athletics"],
  dexterity: ["acrobatics", "sleight of hand", "stealth"],
  constitution: [],
  intelligence: ["arcana", "history", "investigation", "nature", "religion"],
  wisdom: ["animal handling", "insight", "medicine", "perception", "survival"],
  charisma: ["deception", "intimidation", "performance", "persuasion"]
};

export const SkillStatMap: { [key in Skill]: Stat } = Object
  .entries(StatSkillMap)
  .reduce((acc, [stat, skills]) => {
    skills.forEach(skill => acc[skill as Skill] = stat as Stat);
    return acc;
  }, {} as { [key in Skill]: Stat })
