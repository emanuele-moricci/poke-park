import React from 'react';
import type { PokemonType } from 'pokenode-ts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FullTypeData, parsePkmnTyping } from 'utils/pkmnInfoFns';

interface ITypesProps {
  types: PokemonType[];
}

interface ITypeProps {
  type: FullTypeData;
}

const Types = ({ types }: ITypesProps) => {
  const typeData = parsePkmnTyping(types);
  const hasTwoTypes = typeData.length > 1;

  return (
    <div className="flex flex-row items-center justify-start gap-5">
      <SingleType type={typeData[0]} />
      {hasTwoTypes && <SingleType type={typeData[1]} />}
    </div>
  );
};

const SingleType = ({ type }: ITypeProps) => {
  return (
    <div
      className="h-[35px] p-5 flex flex-row items-center justify-between rounded-md"
      style={{ backgroundColor: type.color }}
    >
      <FontAwesomeIcon icon={type.icon} className="mr-2" />
      <p className="text-sm">{type.name}</p>
    </div>
  );
};

export default Types;