export const getRandomInteger = (a: number, b:number): number => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomArrayElement = <T> (elements: T[]): T => elements[getRandomInteger(0, elements.length - 1)];

export const getRandomSliceArray = <T>(elements: T[]): T[] => elements.slice(getRandomInteger(0, elements.length / 2), getRandomInteger(elements.length / 2, elements.length));
