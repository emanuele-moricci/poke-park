import randomInteger from 'random-int';

type RandReturn = (min?: number, max?: number) => number;

export const rand: RandReturn = (min, max) => randomInteger(min, max);

export const randX: RandReturn = () => rand(0, 90);
export const randY: RandReturn = () => rand(30, 80);
export const randBehaviour: RandReturn = () => rand(3000, 8000);
export const randPkmn: RandReturn = () => rand(1, 898);
