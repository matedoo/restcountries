import React, { FC, useCallback, useEffect, useState } from 'react';
import Continents from '../components/continents/Continents';
import axios from 'axios';
import { override } from '../constants';
import { CircleLoader } from 'react-spinners';
import BackButton from '../components/backButton/BackButton';

const ContinentsView: FC = () => {
  const [data, setData] = useState();
  const [loading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState(false);

  const getInitialCountries = useCallback(async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const result = await axios('https://restcountries.eu/rest/v2/name/united');
      setData(result.data);
    } catch (e) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getInitialCountries();
  }, [getInitialCountries]);

  return (
    <div>
      <BackButton description="Wróć do strony głównej" pathName={'/'} />
      {loading ? (
        <CircleLoader loading={loading} size={150} color="#32CD32" css={override} />
      ) : (
        <Continents continents={data} />
      )}
      {isError && <p>Wystąpił błąd</p>}
    </div>
  );
};

export default ContinentsView;
