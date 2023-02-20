import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataChampDetail, DataChampList } from '../Estructuras/dataChamps';

@Injectable({
  providedIn: 'root'
})
export class ChampService {

  constructor(public http: HttpClient) { }

  getChamps(){

    return this.http.get<DataChampList>('http://ddragon.leagueoflegends.com/cdn/13.3.1/data/es_MX/champion.json')

  }

  getChampDetail(champId: string){

    return this.http.get<DataChampDetail>('http://ddragon.leagueoflegends.com/cdn/13.3.1/data/es_MX/champion/' + champId +'.json')

  }
}
