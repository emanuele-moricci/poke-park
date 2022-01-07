import randomInteger from 'random-int';

export const rand = (min: number, max: number): number =>
  randomInteger(min, max);

export const randBehaviour = () => rand(3000, 8000);
export const randPkmn = () => rand(1, 898);

export const randLocal = (min: number, max: number, middle: number): number => {
  const wiggle = rand(0, 15);
  const middleMin = middle - wiggle < min ? min : middle - wiggle;
  const middleMax = middle + wiggle > max ? max : middle + wiggle;

  return rand(middleMin, middleMax);
};
export const randLocalX = (middle: number) => randLocal(0, 90, middle);
export const randLocalY = (middle: number) => randLocal(30, 80, middle);
export const randX = () => rand(0, 90);
export const randY = () => rand(30, 80);
