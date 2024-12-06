import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of, exhaustMap, Observable, tap } from "rxjs";
import { BookService } from "src/app/services";
import {loadBooks, loadBooksSuccess, loadBooksFailure} from './home.actions'
import { setFetching } from './../../store'
import { Action, Store } from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class ItemsEffects {
  loadBooks$: Observable<Action> = createEffect(() =>
      this.actions$.pipe(
        ofType(loadBooks),
        tap(() => this.store.dispatch(setFetching({isFetching: true}))),
        mergeMap(action => {
          console.log('loadBooks action caught');
          return this.bookService.getBooks({page: action.page}).pipe(
            map(books => {
              console.log('API call successful', books);
              this.store.dispatch(setFetching({isFetching: false}))
              return loadBooksSuccess({ items: books });
            }),
            catchError(error => {
              console.error('API call failed', error);
              this.store.dispatch(setFetching({isFetching: false}))
              return of(loadBooksFailure({ error }));
            })
          );
        })
      ),
    );
  constructor(private actions$: Actions, private bookService: BookService, private store: Store) {}
}