import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LeftArrow } from '../../assets/icons';
import { IBackButton } from '../../common/interfaces/IBackButton';

import './backButton.css';

const BackButton: FC<IBackButton> = ({ pathName, description }) => {
  const history = useHistory();
  const navigateHandler = () => history.push(pathName);

  return (
    <div className="backBtnWrapper">
      <Link to={pathName} onClick={navigateHandler}>
        <div className="backBtnIconWrapper">
          <LeftArrow className="icon" />
          {description}
        </div>
      </Link>
    </div>
  );
};

export default BackButton;
