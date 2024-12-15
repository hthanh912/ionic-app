import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';
import { BookService } from '../services';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookItemComponentModule } from './components/book-item/book-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,
    BookItemComponentModule
  ],
  declarations: [HomePage],
  providers: [BookService]
})
export class HomePageModule {}
