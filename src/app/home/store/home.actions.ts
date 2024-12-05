import { createAction, props } from '@ngrx/store';
import { BookItem } from 'src/app/models';

export const loadBooks = createAction('[Items Page] Load Books', props<{ page: number }>());
export const loadBooksSuccess = createAction('[Items API] Load Books Success', props<{ items: BookItem[] }>());
export const loadBooksFailure = createAction('[Items API] Load Books Failure', props<{ error: any }>());