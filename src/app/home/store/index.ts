import { AppState } from '@capacitor/app';

export * from './home.actions'
export * from './home.reducer'

export const selectBooks = (state: AppState) => state.isActive;
