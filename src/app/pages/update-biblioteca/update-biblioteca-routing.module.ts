import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBibliotecaPage } from './update-biblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBibliotecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBibliotecaPageRoutingModule {}
