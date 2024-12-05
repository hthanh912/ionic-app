import { AppState } from '@capacitor/app';
import { HomeState } from './home.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export * from './home.actions'
export * from './home.reducer'

export const selectHomeState = createFeatureSelector<HomeState>('home');

export const selectBooks = createSelector(
  selectHomeState,
  (state: HomeState) => state.books
);
