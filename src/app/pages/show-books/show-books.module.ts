import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowBooksPageRoutingModule } from './show-books-routing.module';

import { ShowBooksPage } from './show-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowBooksPageRoutingModule
  ],
  declarations: [ShowBooksPage]
})
export class ShowBooksPageModule {}
