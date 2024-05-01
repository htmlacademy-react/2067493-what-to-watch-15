import { moviesCards } from './films';
import { TypeReviews, TypeReview } from './type-mocks';
import { getRandomInteger, getRandomDate, getRandomArrayElement } from './utils-mocks';
import { ACTORS, DESCRIPTION } from './const-mocks';

export const reviews: TypeReviews = moviesCards.map((item): TypeReview => ({
  movieId: item.id,
  comments: Array.from({length: getRandomInteger(1, 10)}, (_, index) => ({
    id: String(index),
    date: getRandomDate(),
    user: getRandomArrayElement(ACTORS),
    comment: getRandomArrayElement(DESCRIPTION),
    rating: getRandomInteger(2, 10)}))
}));
