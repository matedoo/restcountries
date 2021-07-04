import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import '../../styles';
import './Continents.css';

const ContinentsLink: FC = () => {
  return (
    <div className="containerContinentsBtn">
      <Link to="/continents">
        <button className="continentsBtn">Przejdź do listy kontynentów</button>
      </Link>
    </div>
  );
};

export default ContinentsLink;
