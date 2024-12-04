import { Component, inject, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';
import { BookItem } from '../models'

import { DataService, Message } from '../services/data.service';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { loadBooks } from './store/home.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private data = inject(DataService);


  // books$: Observable<BookItem[]>;

  constructor(private store: Store<AppState>) {
    // this.books$ = this.store.select()
  }
  
  ngOnInit(): void {
    console.log("OnInit")
  }
  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    console.log("getMessages")
    // this.getBooks();
    return this.data.getMessages();
  }

  getBooks(): BookItem[] {
    console.log("getBooks")
    // this.store.dispatch(loadBooks())
    return []
  }

}
