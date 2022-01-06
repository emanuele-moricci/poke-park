// /api/get-pokemon-list
import { NextApiRequest, NextApiResponse } from 'next';
import randomInteger from 'random-int';

const handler = ({ method }: NextApiRequest, res: NextApiResponse) => {
  if (method === 'GET') {
    const pkmnCount = randomInteger(3, 6);

    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        pkmnCount,
      })
    );
  }
};

export default handler;
