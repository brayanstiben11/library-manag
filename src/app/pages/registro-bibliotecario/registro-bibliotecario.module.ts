import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroBibliotecarioPageRoutingModule } from './registro-bibliotecario-routing.module';

import { RegistroBibliotecarioPage } from './registro-bibliotecario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroBibliotecarioPageRoutingModule
  ],
  declarations: [RegistroBibliotecarioPage]
})
export class RegistroBibliotecarioPageModule {}
