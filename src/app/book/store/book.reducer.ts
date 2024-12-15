import { createReducer, on } from '@ngrx/store';
import { loadBookDetail, loadBookDetailFailure, loadBookDetailSuccess } from './book.actions';
import { BookItem } from 'src/app/models';
import { BookDetail } from 'src/app/models/book-detail';

export interface BookState {
    book: BookDetail | null;
    error: any;
}

export const initialState: BookState = {
    book: null,
    error: null
};

export const detailReducer = createReducer(
    initialState,
    on(loadBookDetailSuccess, (state, { item }) => { 
        console.log("reducer loadDetailSuccess")
        return { ...state, book: {...state.book, ...item} } }),
    on(loadBookDetailFailure, (state, { error }) => { 
        console.log("reducer loadDetailFailure")
        return ({ ...state, error }) } )
);
