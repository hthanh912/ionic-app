import { Component, inject, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { BookItem } from '../models'

import { DataService, Message } from '../services/data.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { loadBooks } from './store/home.actions';
import { map, Observable } from 'rxjs';
import { HomeState, selectBooks } from './store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  books$: Observable<BookItem[]>
  page: number = 0

  constructor(private store: Store<HomeState>) {
    this.books$ = this.store.select(selectBooks);
  }
  
  ngOnInit(): void {
    console.log("OnInit")
    this.store.dispatch(loadBooks({page: this.page}))
  }

  refresh(ev: any) {
    this.store.dispatch(loadBooks({page: this.page}));
    (ev as RefresherCustomEvent).detail.complete();
  }

  loadMoreBooks(ev: any) {
    console.log('load more')
  }
}
