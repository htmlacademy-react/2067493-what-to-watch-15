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

export const formatDate = {
  dataReview: 'MMMM DD, YYYY',
  dataReviewDataTime: 'YYYY-MM-DD',
  durationMovies: 'H[h] mm[m]'
};

export enum ApiRoute {
  FILMS = '/films'
}
