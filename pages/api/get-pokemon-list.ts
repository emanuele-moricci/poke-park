/**
  ______________________________    __      __________       __                                    .____    .__          __   
 /  _____/\_   _____/\__    ___/    \ \     \______   \____ |  | __ ____   _____   ____   ____     |    |   |__| _______/  |_ 
/   \  ___ |    __)_   |    |        \ \     |     ___/  _ \|  |/ // __ \ /     \ /  _ \ /    \    |    |   |  |/  ___/\   __\
\    \_\  \|        \  |    |        / /     |    |  (  <_> )    <\  ___/|  Y Y  (  <_> )   |  \   |    |___|  |\___ \  |  |  
 \______  /_______  /  |____|       /_/      |____|   \____/|__|_ \\___  >__|_|  /\____/|___|  /   |_______ \__/____  > |__|  
        \/        \/                                             \/    \/      \/            \/            \/       \/        

 * API: /api/get-pokemon-list
 * 
 * This API returns a list of random Pokémon, between 3 to 6 in length.
 * The Pokémon are randomly picked from the Pokédex by their ID, between 1 and 898 (up to Gen VIII).
 * 
 */
import type { NextApiRequest, NextApiResponse } from 'next';
import { rand, randPkmn } from 'utils/randomFns';
import { PokemonClient } from 'pokenode-ts';

const handler = async ({ method }: NextApiRequest, res: NextApiResponse) => {
  const api = new PokemonClient();

  try {
    if (method === 'GET') {
      const pkmnList = [];
      for (let index = 0; index < rand(3, 6); index++) {
        const pkmnId = randPkmn();

        const pkmn = await api
          .getPokemonById(pkmnId)
          .then((data) => data)
          .catch((error) => {
            throw error;
          });
        pkmnList.push(pkmn);
      }

      res.setHeader('Content-Type', 'application/json');
      res.status(200).end(JSON.stringify({ pkmnList }));
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .end({ msg: 'The Pokenode-TS API returned an error.', error });
  }
};

export default handler;
