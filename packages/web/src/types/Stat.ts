import { Language } from "./Language";
import { SkillType } from "./Skill";
import { DamageType } from "./Damage";
import { ConditionType } from "./Condition";

export type StatType = "strength"
  | "dexterity"
  | "constitution"
  | "intelligence"
  | "wisdom"
  | "charisma";

export interface StatBlock {
  armorClass: number;
  hitPoints: number;
  speed: number;

  stats: {
    [key in StatType]: number;
  };

  skills: {
    [key in SkillType]: number;
  };

  immunities: DamageType[];
  resistances: DamageType[];
  vulnerabilities: DamageType[];

  conditionImmunities: ConditionType[];

  senses: {
    darkvision: number;
    blindsight: number;
    tremorsense: number;
    truesight: number;
  };

  languages: Language[];

  xp: number;
}
