import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletebookPage } from './deletebook.page';

const routes: Routes = [
  {
    path: '',
    component: DeletebookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletebookPageRoutingModule {}
