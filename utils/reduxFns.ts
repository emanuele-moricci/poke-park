/**
  __________           .___            
  \______   \ ____   __| _/_ _____  ___
   |       _// __ \ / __ |  |  \  \/  /
   |    |   \  ___// /_/ |  |  />    < 
   |____|_  /\___  >____ |____//__/\_ \
          \/     \/     \/           \/ 
 
 * This file contains some helper functions for the Redux (Toolkit, Saga...) logics
 * 
 */

/**
 * This functions parses an error message coming from any API called
 * by a Redux Saga function and returns the actual error message contained.
 *
 * @param error The error object coming from the API
 */
export const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : 'An error has occurred!';
