import { createFeatureSelector, createSelector } from '@ngrx/store';
import { setFetching } from './app.actions'
import { AppState } from './app.reducer';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectIsFetching = createSelector(selectAppState, (state: AppState) => state.isFetching)

export { setFetching }