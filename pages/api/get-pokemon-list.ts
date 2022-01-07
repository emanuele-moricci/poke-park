// /api/get-pokemon-list
import type { NextApiRequest, NextApiResponse } from 'next';
import { rand, randPkmn } from 'utils/randomFns';
import { PokemonClient } from 'pokenode-ts';

const handler = async ({ method }: NextApiRequest, res: NextApiResponse) => {
  const api = new PokemonClient();

  if (method === 'GET') {
    const pkmnCount = rand(3, 6);
    const pkmnList = [];
    for (let index = 0; index < pkmnCount; index++) {
      const pkmnId = randPkmn();

      const pkmn = await api
        .getPokemonById(pkmnId)
        .then((data) => data)
        .catch((error) => console.error(error));
      pkmnList.push(pkmn);
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        pkmnList,
      })
    );
  }
};

export default handler;
