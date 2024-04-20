import { TypeMovie } from './type';

export enum Addresses {
  Main = '/',
  SignIn = '/login',
  MyList = '/myList',
  Film = '/films',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AutorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export const movies: TypeMovie[] = Array.from({length:8}, (_, index) => ({id: String(index + 1)}));
