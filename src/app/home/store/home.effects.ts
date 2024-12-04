import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of } from "rxjs";
import { BookService } from "src/app/services";
import * as HomeActions from './home.actions'

@Injectable()
export class ItemsEffects {
    constructor(private actions$: Actions, private bookService: BookService) {}

    loadItems$ = createEffect(() =>
        this.actions$.pipe(
        ofType(HomeActions.loadBooks),
        mergeMap(() =>
            this.bookService.getBooks().pipe(
                map(items => HomeActions.loadBooksSuccess({ items })),
                catchError(error => of(HomeActions.loadBooksFailure({ error })))
            )
        )
        )
    );

}