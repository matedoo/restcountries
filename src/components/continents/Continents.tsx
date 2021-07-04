import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IContinentsData } from '../../common/interfaces/IContinents';

import '../../styles';
import './Continents.css';

const Continents: FC<IContinentsData> = ({ continents }: IContinentsData) => {
  return (
    <div className="cardWrapper">
      {continents.map(continent => (
        <div className="card" key={continent?.code}>
          <Link to={`/continents/${continent?.code}`}>
            <p>{`${continent?.name} ${continent?.code}`}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Continents;
