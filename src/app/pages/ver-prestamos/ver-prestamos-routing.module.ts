import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerPrestamosPage } from './ver-prestamos.page';

const routes: Routes = [
  {
    path: '',
    component: VerPrestamosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerPrestamosPageRoutingModule {}
