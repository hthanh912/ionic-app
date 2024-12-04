import { createReducer, on } from '@ngrx/store';
import * as HomeActions from './home.actions';
import { BookItem } from 'src/app/models';

export interface HomeState {
    books: BookItem[];
    error: any;
}

export const initialState: HomeState = {
    books: [],
    error: null
};

export const homeReducer = createReducer(
    initialState,
    on(HomeActions.loadBooksSuccess, (state, { items }) => { 
        console.log(items)
        console.warn(items)
        return ({ ...state, books: items }) }),
    on(HomeActions.loadBooksFailure, (state, { error }) => ({ ...state, error }))
);
