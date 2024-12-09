import { Component, inject, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { BookItem } from '../models'

import { DataService, Message } from '../services/data.service';
import { select, Store } from '@ngrx/store';
import { loadBooks } from './store/home.actions';
import { map, Observable, Subscription } from 'rxjs';
import { HomeState, selectBooks } from './store';
import { selectIsFetching } from '../store';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  page = 0
  isFetching = false
  books$: Observable<BookItem[]>
  isFetching$: Observable<boolean>;

  constructor(private appStore: Store<AppState>, private store: Store<HomeState>) {
    this.books$ = this.store.select(selectBooks);
    this.isFetching$ = this.appStore.select(selectIsFetching)
  }
  
  ngOnInit(): void {
    console.log("OnInit")
    this.isFetching$.subscribe(value => this.isFetching = value)
    this.loadMoreBooks()
  }

  refresh(ev: any) {
    this.store.dispatch(loadBooks({page: this.page}));
    (ev as RefresherCustomEvent).detail.complete();
  }

  loadMoreBooks(ev?: any) {
    if (this.isFetching == true) return

    this.store.dispatch(loadBooks({page: this.page}))
    this.page ++
    if (ev) {
      this.books$.subscribe(items => {
        if (items.length === 0) {
          ev.target.disabled = true;
        }
        ev.target.complete();
      });
    }
  }
}
