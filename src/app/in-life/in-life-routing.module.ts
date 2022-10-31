import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InLifePage } from './in-life.page';

const routes: Routes = [
  {
    path: '',
    component: InLifePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InLifePageRoutingModule {}
