import { AppState } from '@capacitor/app';
import { BookState } from './book.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export * from './book.actions'
export * from './book.reducer'

export const selectBookState = createFeatureSelector<BookState>('book');

export const selectBookDetail = createSelector(
  selectBookState,
  (state: BookState) => state.book
);
