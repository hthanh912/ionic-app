import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetail } from '../models/book-detail';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { BookState, loadBookDetail, selectBookDetail } from './store';
import { selectIsFetching } from '../store';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  isFetching$: Observable<boolean>;
  bookDetail$: Observable<BookDetail | null>
  bookDetail: BookDetail | null = null
  private bookDetailSubscription: Subscription | null = null;

  constructor(private appStore: Store<AppState>, private store: Store<BookState>) {
    this.isFetching$ = this.appStore.select(selectIsFetching)
    this.bookDetail$ = this.store.select(selectBookDetail)
  }

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log("ngOnInit", id)
    this.store.dispatch(loadBookDetail({id: id}))
    this.bookDetail$.subscribe(book => { this.bookDetail = book })
  }

  ngOnDestroy() {
    if (this.bookDetailSubscription) {
      this.bookDetailSubscription.unsubscribe();
    }
  }

}
