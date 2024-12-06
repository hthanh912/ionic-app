import { createAction, props } from '@ngrx/store';
import { BookItem } from 'src/app/models';

export const setFetching = createAction('[App] Set Fetching', props<{isFetching: boolean}>());