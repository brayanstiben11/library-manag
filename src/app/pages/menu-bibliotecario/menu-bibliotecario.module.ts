import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuBibliotecarioPageRoutingModule } from './menu-bibliotecario-routing.module';

import { MenuBibliotecarioPage } from './menu-bibliotecario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuBibliotecarioPageRoutingModule
  ],
  declarations: [MenuBibliotecarioPage]
})
export class MenuBibliotecarioPageModule {}
