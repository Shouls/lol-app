import { Component } from '@angular/core';
import { Data, Router } from '@angular/router';
import { DataChampList } from '../Estructuras/dataChamps';
import { ChampService } from '../services/champ.service';
import { ChampSimple } from "../Estructuras/ChampSimple";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dataChamp: DataChampList = new DataChampList;
  searchedChamp:  ChampSimple = new ChampSimple;
  dataSimple: ChampSimple = new ChampSimple;



  constructor(private champService: ChampService, private router: Router) {

    this.champService.getChamps().subscribe(res  =>{

      //this.dataChamp = res
      this.dataSimple = res.data
      this.searchedChamp = this.dataSimple


      for(let championName in this.dataChamp.data){

        let champion = this.dataChamp.data[championName]
        //console.log(champion.image.full)
      }



    })


  }

  searchChamp(event: any){

    const text = event.target.value;
    this.searchedChamp = this.dataSimple
    console.log(text)

    //console.log(Array.from(this.champ.values()).filter((item) => item.id == event))

    if(text && (text.trim() != '')){

      this.searchedChamp = this.convertir(this.dataSimple, text)

      console.log(this.searchedChamp)

    }

  }

  convertir(champions: ChampSimple, searchText: string): ChampSimple{
    return Object.fromEntries(
      Object.entries(champions).filter(([name, data]) => name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
    )

  }


  loadChamps(){
    this.champService.getChamps().subscribe(res  =>{

      this.dataSimple = res.data

    })

  }

  goToDetail(id: string){
    this.router.navigate(["/tabs/tab1/champ-detail", id]);
  }



}
