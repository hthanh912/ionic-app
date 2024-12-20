import { createReducer, on } from '@ngrx/store';
import { loadBooks, loadBooksSuccess, loadBooksFailure, clearBooks } from './home.actions';
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
    on(clearBooks, (state) => { 
        console.log("reducer clearBooks")
        return {...state, books: []}
    }),
    on(loadBooksSuccess, (state, { items }) => { 
        console.log("reducer loadBooksSuccess")
        return { ...state, books: [...state.books, ...items] } }),
    on(loadBooksFailure, (state, { error }) => { 
        console.log("reducer loadBooksFailure")
        return ({ ...state, error }) } )
);
