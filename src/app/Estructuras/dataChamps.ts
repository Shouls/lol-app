import { ChampFull } from "./ChampFulls";
import { ChampSimple } from "./ChampSimple";

export class DataChampList{

  data: ChampSimple = {};
  format: string = '';
  type: string = '';
  version: string = '';

}

export class DataChampDetail{

  data: ChampFull = {};
  format: string = '';
  type: string = '';
  version: string = '';

}

/*

Como es:

export interface DataChampSimple{
  data: {
    [championName: string]: {
      blurb: string;
      id: string;
      image: {
        full: string;
        group: string;
        h: number;
      };
    };
  };
}




*/
