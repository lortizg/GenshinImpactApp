import { ICharacterImages } from "./ICharacterImages";
import { IConstellation } from "./IConstellation";
import { IPassiveTalent } from "./IPassiveTalent";
import { ISkillTalent } from "./ISkillTalent";

export interface ICharacter {
    name: string;
    title: string;
    vision: string;
    weapon: string;
    nation: string;
    affiliation: string;
    rarity: number;
    constellation: string;
    birthday: string;
    description: string;
    skillTalents: ISkillTalent[];
    passiveTalents: IPassiveTalent[];
    constellations: IConstellation[];
    vision_key: string;
    weapon_type: string;

    images:ICharacterImages
}
