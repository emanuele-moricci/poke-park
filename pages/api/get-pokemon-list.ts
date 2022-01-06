// /api/get-pokemon-list
import type { NextApiRequest, NextApiResponse } from 'next';
import randomInteger from 'random-int';
import { PokemonClient } from 'pokenode-ts';

const handler = async ({ method }: NextApiRequest, res: NextApiResponse) => {
  const api = new PokemonClient();

  if (method === 'GET') {
    const pkmnCount = randomInteger(3, 6);
    const pkmnList = [];
    for (let index = 0; index < pkmnCount; index++) {
      const pkmnId = randomInteger(1, 898);

      const pkmn = await api
        .getPokemonById(pkmnId)
        .then((data) => data)
        .catch((error) => console.error(error));
      pkmnList.push(pkmn);
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        pkmnCount,
        pkmnList,
      })
    );
  }
};

export default handler;
