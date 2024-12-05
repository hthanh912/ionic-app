import { Component, inject, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';
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
  private data = inject(DataService);

  books$: Observable<BookItem[]>

  // booksLength$: Observable<number> = this.books$.pipe(
  //   map(books => {
  //     console.log("books " + books)
  //     return books.length})
  // ) || 0;

  constructor(private store: Store<HomeState>) {
    this.books$ = this.store.select(selectBooks);
  }
  
  ngOnInit(): void {
    console.log("OnInit")
    this.store.dispatch(loadBooks())
  }

  // refresh(ev: any) {
  //   setTimeout(() => {
  //     (ev as RefresherCustomEvent).detail.complete();
  //   }, 3000);
  // }

  // getMessages(): Message[] {
  //   console.log("getMessages")
  //   // this.getBooks();
  //   return this.data.getMessages();
  // }
}
