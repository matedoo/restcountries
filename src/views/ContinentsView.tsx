import React, { FC } from 'react';
import Continents from '../components/continents/Continents';
import { useGetContinents } from '../hooks/continents/useGetContinents';
import BackButton from '../components/backButton/BackButton';
import { override } from '../constants';
import { CircleLoader } from 'react-spinners';

const ContinentsView: FC = () => {
  const { data, loading, error } = useGetContinents();
  return (
    <div>
      <BackButton description="Wróć do strony głównej" pathName={'/'} />
      {loading ? (
        <CircleLoader loading={loading} size={150} color="#32CD32" css={override} />
      ) : (
        <Continents continents={data?.continents || []} />
      )}
      {error && <p>Wystąpił błąd</p>}
    </div>
  );
};

export default ContinentsView;
