import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of } from "rxjs";
import { BookService } from "src/app/services";
import {loadBooks, loadBooksSuccess, loadBooksFailure} from './home.actions'

@Injectable()
export class ItemsEffects {
    constructor(private actions$: Actions, private bookService: BookService) {}
    loadBooks$ = createEffect(() =>
        this.actions$.pipe(
          ofType(loadBooks),
          mergeMap(() => {
            console.log('loadBooks action caught');
            return this.bookService.getBooks().pipe(
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
        { dispatch: true, resubscribeOnError: false } // dispatch: true
    );
}