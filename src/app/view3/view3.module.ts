import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { View3PageRoutingModule } from './view3-routing.module';

import { View3Page } from './view3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    View3PageRoutingModule
  ],
  declarations: [View3Page]
})
export class View3PageModule {}
