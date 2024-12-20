import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { combineReducers, StoreModule } from '@ngrx/store';
import { homeReducer } from './home/store/home.reducer';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './home/store/home.effects';
import { appReducer } from './store/app.reducer';
import { detailReducer } from './book/store/book.reducer'
import { DetailEffects } from './book/store/book.effects'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule, StoreModule.forRoot({
      app: appReducer,
      home: homeReducer,
      book: detailReducer,
    }), 
    HttpClientModule,
    EffectsModule.forRoot([ItemsEffects, DetailEffects]),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
