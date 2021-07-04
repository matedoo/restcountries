import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { override } from '../../constants';
import { IParamTypes } from '../../common/interfaces/IParamTypes';
import { useGetCountries } from '../../hooks/countries/useGetCountries';
import BackButton from '../backButton/BackButton';
import { v4 as uuidv4 } from 'uuid';
import './singleContinent.css';

const SingleContinentCountries: FC = () => {
  const { code } = useParams<IParamTypes>();
  const { data, loading, error } = useGetCountries(code);

  return (
    <div>
      <BackButton description="Wróć do listy kontynentów" pathName={'/continents'} />
      {loading ? (
        <CircleLoader loading={loading} size={150} color="#32CD32" css={override} />
      ) : (
        <div className="cardWrapper">
          {data?.countries?.map(el => (
            <div
              className="card"
              key={uuidv4()}
            >{`${el?.name} Emoji: ${el?.emoji} Lang: ${el?.languages[0]?.name}`}</div>
          ))}
        </div>
      )}
      {error && <p>Wystąpił błąd</p>}
    </div>
  );
};

export default SingleContinentCountries;
