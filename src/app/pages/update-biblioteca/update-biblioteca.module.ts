import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBibliotecaPageRoutingModule } from './update-biblioteca-routing.module';

import { UpdateBibliotecaPage } from './update-biblioteca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBibliotecaPageRoutingModule
  ],
  declarations: [UpdateBibliotecaPage]
})
export class UpdateBibliotecaPageModule {}
