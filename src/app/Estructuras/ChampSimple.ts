import { Stats } from "fs";
import { Image, Info } from "./commonDataChamp";

export class ChampSimple{

  [championName: string]: {

    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: Info;
    image: Image;
    tags: string;
    partype: string;
    stats: Stats;

  };
}


