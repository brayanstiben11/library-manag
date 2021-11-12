import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowBooksPage } from './show-books.page';

const routes: Routes = [
  {
    path: '',
    component: ShowBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowBooksPageRoutingModule {}
