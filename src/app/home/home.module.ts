import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';
import { BookService } from '../services';
import { BookItemComponent } from './components/book-item/book-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,
    BookItemComponent
  ],
  declarations: [HomePage],
  providers: [BookService]
})
export class HomePageModule {}
