import React from 'react';
import type { PokemonStat } from 'pokenode-ts';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

import { parsePkmnStats } from 'utils/pkmnInfoFns';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface IStatsProps {
  stats: PokemonStat[];
}

const Stats = ({ stats }: IStatsProps) => {
  const statsData = parsePkmnStats(stats);

  const data = {
    labels: statsData.map(({ name }) => name),
    datasets: [
      {
        label: 'Stats',
        data: statsData.map(({ value }) => value),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full mt-5">
      <Radar data={data} />
    </div>
  );
};

export default Stats;
