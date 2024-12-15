import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of, exhaustMap, Observable, tap } from "rxjs";
import { BookService } from "src/app/services";
import { loadBookDetail, loadBookDetailFailure, loadBookDetailSuccess } from './book.actions'
import { setFetching } from '../../store'
import { Action, Store } from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class DetailEffects {
  loadDetail$: Observable<Action> = createEffect(() =>
      this.actions$.pipe(
        ofType(loadBookDetail),
        tap(() => this.store.dispatch(setFetching({isFetching: true}))),
        mergeMap(action => {
          console.log('loadDetail action caught');
          return this.bookService.getDetailBook(action.id).pipe(
            map(data => {
              console.log('API call successful', data);
              this.store.dispatch(setFetching({isFetching: false}))
              return loadBookDetailSuccess({ item: data });
            }),
            catchError(error => {
              console.error('API call failed', error);
              this.store.dispatch(setFetching({isFetching: false}))
              return of(loadBookDetailFailure({ error }));
            })
          );
        })
      ),
    );
  constructor(private actions$: Actions, private bookService: BookService, private store: Store) {}
}