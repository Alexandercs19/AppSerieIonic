import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InLifePageRoutingModule } from './in-life-routing.module';

import { InLifePage } from './in-life.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InLifePageRoutingModule
  ],
  declarations: [InLifePage]
})
export class InLifePageModule {}
