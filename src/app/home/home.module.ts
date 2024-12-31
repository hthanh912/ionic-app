import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { BookService } from '../services';
import { BookItemComponentModule } from './components/book-item/book-item.module';
import { WindowRef } from '../utils/windowsRef';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BookItemComponentModule
  ],
  declarations: [HomePage],
  providers: [BookService, WindowRef]
})
export class HomePageModule {}
