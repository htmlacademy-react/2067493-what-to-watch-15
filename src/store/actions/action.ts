import { createAction } from '@reduxjs/toolkit';

export const CHANGE_GENRE = createAction('CHANGE_GENRE', (value: string) => ({payload: value}));
