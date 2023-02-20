import { Stats } from "fs";
import { Image, Info } from "./commonDataChamp";

export interface ChampFull{

  [championName: string]: {
    id: string;
    key: string;
    name: string;
    title: string;
    image: Image;
    skins: Skins[]; //probablemente si se tenga que declarar arreglo
    lore: string;
    blurb: string;
    allytips: string; //arreglo
    enemytips: string; //arreglo
    tags: string;
    partype: string;
    info: Info;
    stats: Stats;
    spells: Spells[]; // declarar como arreglo x2
    passive: Passive;
    recommended: [];
  };

}

interface Skins{
  id: string;
  num: number;
  name: string;
  chromas: boolean;

}

interface LevelTip{
  label: string[];
  effect: string[];
}

interface Spells{
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: LevelTip;
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: {};
  effect: (number[] | null)[];
  effectBurn: (string | null)[];
  vars: [];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: Image;
  resource: string;
}

interface Passive{
  name: string;
  description: string;
  image: Image;
}




