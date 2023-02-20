import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataChampDetail } from 'src/app/Estructuras/dataChamps';
import { ChampService } from 'src/app/services/champ.service';
import SwiperCore, {Pagination, Scrollbar, EffectCoverflow} from 'swiper';

SwiperCore.use([Pagination, Scrollbar, EffectCoverflow])

@Component({
  selector: 'app-champ-detail',
  templateUrl: './champ-detail.page.html',
  styleUrls: ['./champ-detail.page.scss'],
})
export class ChampDetailPage implements OnInit {

  championId: string = ''
  fullData: DataChampDetail = new DataChampDetail
  skins: string = ''
  champ_splash: string = ''
  total_char: number = 0;
  id_skins: string[] = []
  constructor(private route: ActivatedRoute, private champService: ChampService) {

  }

  ngOnInit() {

    this.route.queryParams.subscribe(params =>{

      this.championId = params['id'];
      this.champService.getChampDetail(this.championId).subscribe(res=>{
        this.fullData = res
        console.log(this.fullData)
        console.log(this.fullData.data)

        this.champ_splash = this.fullData.data[this.championId].id + '_' + this.fullData.data[this.championId].skins[0].num + '.jpg'


        for(let skin of Object.values(this.fullData.data[this.championId].skins)){


          this.id_skins.push(this.fullData.data[this.championId].id + '_' + skin.num + '.jpg')
        }

        console.log(this.id_skins)

      })
    })

    console.log(this.fullData.data)



  }

}

