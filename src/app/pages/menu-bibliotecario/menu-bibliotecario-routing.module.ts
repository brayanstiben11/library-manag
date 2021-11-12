import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuBibliotecarioPage } from './menu-bibliotecario.page';

const routes: Routes = [
  {
    path: '',
    component: MenuBibliotecarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuBibliotecarioPageRoutingModule {}
