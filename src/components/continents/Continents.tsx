import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import '../../styles';
import './Continents.css';

const Continents: FC<any> = ({ continents }) => {
  return (
    <div className="cardWrapper">
      {continents?.map((continent: { code: React.Key | null | undefined; name: any }) => (
        <div className="card" key={continent.name}>
          <Link to={`/continents/${continent.name}`}>
            <p>{`${continent?.name}`}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Continents;
