/**
__________                    .___              
\______   \_____    ____    __| _/____   _____  
 |       _/\__  \  /    \  / __ |/  _ \ /     \ 
 |    |   \ / __ \|   |  \/ /_/ (  <_> )  Y Y  \
 |____|_  /(____  /___|  /\____ |\____/|__|_|  /
        \/      \/     \/      \/            \/ 
 
 * This file contains several helper functions for randomness.
 * They are used throughout the project to pick different Pokémon, coordinates ecc...
 * 
 */
import randomInteger from 'random-int';
import {
  faAngry,
  faAppleAlt,
  faCloudRain,
  faCookieBite,
  faCrown,
  faDizzy,
  faFlushed,
  faGrinBeam,
  faGrinHearts,
  faGrinSquintTears,
  faLightbulb,
  faPizzaSlice,
  faPoop,
  faSadTear,
  faSkull,
} from '@fortawesome/free-solid-svg-icons';

/**
 * The base function for picking a random integer.
 * This helper is just a shorhand for the `randomInteger` function.
 *
 * @param min The minimum value of the random integer.
 * @param max The maximum value of the random integer.
 */
export const rand = (min: number, max: number): number =>
  randomInteger(min, max);

/**
 * This helper function returns a random time in milliseconds,
 * used to simulate the time between Pokémon behaviours.
 *
 * **Note:** The default values gap is form 3000 to 8000 milliseconds.
 */
export const randBehaviour = () => rand(3000, 8000);

/**
 * This helper function returns a random Pokémon id,
 * used to pick a Pokémon from the `pokenode-ts` API.
 *
 * **Note:** The default values gap is form 1 to 898, according to the
 * updated Pokédex from gen VIII.
 */
export const randPkmn = () => rand(1, 898);

/**
 * This helper function returns a random number between a min and a max,
 * very close to a random value between the former two.
 *
 * This logics helps in creating a random number that is close to the 'middle' param passed.
 *
 * @param min The minimum value of the random number.
 * @param max The maximum value of the random number.
 * @param middle The average value of the random number.
 */
export const randLocal = (min: number, max: number, middle: number): number => {
  const wiggle = rand(1, 15);
  const middleMin = middle - wiggle < min ? min : middle - wiggle;
  const middleMax = middle + wiggle > max ? max : middle + wiggle;

  const result = rand(middleMin, middleMax);
  const toLog =
    result === middle
      ? result === max
        ? result - 1
        : result === min
        ? result + 1
        : result - 1
      : result;

  return toLog;
};

/**
 * This helper function returns a random X coordinate between a min and a max,
 * averaging close to the middle param passed.
 *
 * @param middle  The average value of the random coordinate.
 */
export const randLocalX = (middle: number) => randLocal(0, 90, middle);

/**
 * This helper function returns a random Y coordinate between a min and a max,
 * averaging close to the middle param passed.
 *
 * @param middle  The average value of the random coordinate.
 */
export const randLocalY = (middle: number) => randLocal(30, 80, middle);

/**
 * This helper function returns a random X coordinate between 0 and a 90,
 * which are the screen width thresholds in percentage.
 *
 * These values ensure that the resulting number does not exceed the screen width.
 */
export const randX = () => rand(0, 90);

/**
 * This helper function returns a random Y coordinate between 30 and a 80,
 * which are the screen height thresholds in percentage.
 *
 * These values ensure that the resulting number does not exceed the screen height
 * and does not overlap either the header or the footer.
 */
export const randY = () => rand(30, 80);

/**
 * This helper function returns a random coordinate set [X, Y] using the `randX` and `randY` helpers.
 *
 * These values ensure that the resulting number does not exceed the screen "width <> height"
 * and does not overlap either the header or the footer.
 */
export const randCoords = () => [rand(0, 90), rand(30, 80)];

/**
 * This helper function returns a random Speech Bubble Icon, used when you
 * interact with a Pokémon.
 *
 * @returns A random icon from the `@fortawesome/free-solid-svg-icons` library.
 */
export const randIcon = () => {
  const icons = [
    faAngry,
    faAppleAlt,
    faCloudRain,
    faCookieBite,
    faCrown,
    faDizzy,
    faFlushed,
    faGrinBeam,
    faGrinHearts,
    faGrinSquintTears,
    faLightbulb,
    faPizzaSlice,
    faPoop,
    faSadTear,
    faSkull,
  ];

  return icons[rand(0, icons.length - 1)];
};
