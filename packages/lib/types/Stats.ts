import { DamageType } from "./Damage";
import { Language } from "./Language";
import { Skill } from "./Skills";

export type Stat = "strength"
  | "dexterity"
  | "constitution"
  | "intelligence"
  | "wisdom"
  | "charisma";

export interface StatBlock {
  armorClass: number;
  hitPoints: number;
  speed: number;
  level: number;

  stats: {
    [key in Stat]: number;
  };

  skills: {
    [key in Skill]: {
      proficient: boolean;
      expertise: boolean;
    }
  };

  immunities: DamageType[];
  risistances: DamageType[];
  vulnerabilities: DamageType[];
  conditionImmunities: string[];

  languages: Language[];

  senses: {
    darkvision: number;
    blindsight: number;
    tremorsense: number;
    truesight: number;
  };
}
