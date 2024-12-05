import { createReducer, on } from '@ngrx/store';
import {loadBooks, loadBooksSuccess, loadBooksFailure} from './home.actions';
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
    on(loadBooksSuccess, (state, newState) => { 
        console.log("Books loaded successfully", newState);
        console.warn("state " + newState)
        return { ...state, books: newState.items } }),
    on(loadBooksFailure, (state, { error }) => { 
        return ({ ...state, error }) } )
);
