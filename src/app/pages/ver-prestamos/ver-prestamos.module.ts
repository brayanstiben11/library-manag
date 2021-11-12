import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerPrestamosPageRoutingModule } from './ver-prestamos-routing.module';

import { VerPrestamosPage } from './ver-prestamos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerPrestamosPageRoutingModule
  ],
  declarations: [VerPrestamosPage]
})
export class VerPrestamosPageModule {}
