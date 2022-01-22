import React from 'react';
import type { PokemonStat, PokemonType } from 'pokenode-ts';

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

import { convertHex, parsePkmnStats, parsePkmnTyping } from 'utils/pkmnInfoFns';

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
  types: PokemonType[];
}

const Stats = ({ stats, types }: IStatsProps) => {
  const statsData = parsePkmnStats(stats);
  const [type1, type2] = parsePkmnTyping(types);

  const data = {
    labels: statsData.map(({ name }) => name),
    datasets: [
      {
        label: 'Stats',
        pointStyle: 'rect',
        data: statsData.map(({ value }) => value),
        backgroundColor: type2
          ? convertHex(type2.color, 0.349)
          : 'rgba(233, 231, 231, 0.349)',
        borderColor: type1.color,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      radialLinear: {
        beginAtZero: true,
        max: 255,
      },
    },
  };

  return (
    <div className="w-full mt-5">
      <Radar data={data} options={options} />
    </div>
  );
};

export default Stats;
