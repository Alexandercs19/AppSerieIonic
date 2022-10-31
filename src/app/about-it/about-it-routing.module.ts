import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutItPage } from './about-it.page';

const routes: Routes = [
  {
    path: '',
    component: AboutItPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutItPageRoutingModule {}
