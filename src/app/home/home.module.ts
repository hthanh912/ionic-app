import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';

import { StoreModule } from '@ngrx/store';
import { homeReducer } from './store/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './store/home.effects';
import { BookService } from '../services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,
    EffectsModule.forRoot([ItemsEffects])
  ],
  declarations: [HomePage],
  providers: [BookService]
})
export class HomePageModule {}
