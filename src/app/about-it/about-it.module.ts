import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutItPageRoutingModule } from './about-it-routing.module';

import { AboutItPage } from './about-it.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutItPageRoutingModule
  ],
  declarations: [AboutItPage]
})
export class AboutItPageModule {}
