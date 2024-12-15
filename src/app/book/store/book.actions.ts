import { createAction, props } from '@ngrx/store';
import { BookItem } from 'src/app/models';
import { BookDetail } from 'src/app/models/book-detail';

export const loadBookDetail = createAction('[Detail Page] Load Detail', props<{ id: number }>());
export const loadBookDetailSuccess = createAction('[Detail API] Load Detail Success', props<{ item: BookDetail }>());
export const loadBookDetailFailure = createAction('[Detail API] Load Detail Failure', props<{ error: any }>());