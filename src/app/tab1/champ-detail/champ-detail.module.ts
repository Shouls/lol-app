import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChampDetailPageRoutingModule } from './champ-detail-routing.module';

import { ChampDetailPage } from './champ-detail.page';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChampDetailPageRoutingModule,
    SwiperModule

  ],
  declarations: [ChampDetailPage]
})
export class ChampDetailPageModule {}
