import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletebookPageRoutingModule } from './deletebook-routing.module';

import { DeletebookPage } from './deletebook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletebookPageRoutingModule
  ],
  declarations: [DeletebookPage]
})
export class DeletebookPageModule {}
