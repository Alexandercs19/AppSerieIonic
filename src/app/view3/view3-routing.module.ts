import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { View3Page } from './view3.page';

const routes: Routes = [
  {
    path: '',
    component: View3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class View3PageRoutingModule {}
