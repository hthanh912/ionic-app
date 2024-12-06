import { createReducer, on } from '@ngrx/store';
import { BookItem } from 'src/app/models';
import { setFetching } from './app.actions';

export interface AppState {
    isFetching: boolean
}

export const initialState: AppState = {
    isFetching: false
};

export const appReducer = createReducer(
    initialState,
    on(setFetching,  (state, { isFetching }) => { 
        console.log("reducer setFetching", isFetching)
        return { ...state, isFetching: isFetching } })
);
