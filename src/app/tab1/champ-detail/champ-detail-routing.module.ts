import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampDetailPage } from './champ-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ChampDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampDetailPageRoutingModule {}
