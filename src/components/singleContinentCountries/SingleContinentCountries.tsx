import React, { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { override } from '../../constants';
import { IParamTypes } from '../../common/interfaces/IParamTypes';
import BackButton from '../backButton/BackButton';
import './singleContinent.css';
import axios from 'axios';

const SingleContinentCountries: FC = () => {
  const { name } = useParams<IParamTypes>();

  const [data, setData] = useState<any>();
  const [loading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState(false);

  const getSingleCountry = useCallback(async name => {
    try {
      setIsError(false);
      setIsLoading(true);
      const result = await axios(`https://restcountries.eu/rest/v2/name/${name}/`);
      setData(result.data);
    } catch (e) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getSingleCountry(name);
  }, []);

  return (
    <div>
      <BackButton description="Wróć do listy kontynentów" pathName={'/continents'} />
      {loading ? (
        <CircleLoader loading={loading} size={150} color="#32CD32" css={override} />
      ) : (
        <div className="cardWrapper">
          {data?.map(
            (el: { name: string; capital: string; currencies: { code: string; name: string; symbol: string }[] }) => (
              <div className="card" key={el.name}>
                {`${el?.name} Capital: ${el?.capital}`}
                {el.currencies.map(elem => (
                  <p>{`Currency: ${elem?.name} CurrencySymbol: ${elem?.symbol} CurrencyCode: ${elem?.code}`}</p>
                ))}
              </div>
            ),
          )}
        </div>
      )}
      {isError && <p>Wystąpił błąd</p>}
    </div>
  );
};

export default SingleContinentCountries;
