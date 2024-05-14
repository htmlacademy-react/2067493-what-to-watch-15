import { createAction } from '@reduxjs/toolkit';

export const CHANGE_GENRE = createAction('CHANGE_GENRE', (value: string) => ({payload: value}));

export const CHANGE_RENDER_MOVIES_COUNT = createAction('CHANGE_RENDER_MOVIES_COUNT');

export const GET_MOVIES_GENRE = createAction('GET_MOVIES_GENRE');

export const RESET_RENDER_MOVIES_COUNT = createAction('RESET_RENDER_MOVIES_COUNT');
