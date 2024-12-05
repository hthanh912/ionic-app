import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of, exhaustMap, Observable } from "rxjs";
import { BookService } from "src/app/services";
import {loadBooks, loadBooksSuccess, loadBooksFailure} from './home.actions'
import { Action } from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class ItemsEffects {
  loadBooks$: Observable<Action> = createEffect(() =>
      this.actions$.pipe(
        ofType(loadBooks),
        mergeMap(action => {
          console.log('loadBooks action caught');
          return this.bookService.getBooks({page: action.page}).pipe(
            map(books => {
              console.log('API call successful', books);
              return loadBooksSuccess({ items: books });
            }),
            catchError(error => {
              console.error('API call failed', error);
              return of(loadBooksFailure({ error }));
            })
          );
        })
      ),
    );
  constructor(private actions$: Actions, private bookService: BookService) {}
}