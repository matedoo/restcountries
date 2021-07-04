import { gql, useQuery } from '@apollo/client';
import { IContinentsData } from '../../common/interfaces/IContinents';

const GET_CONTINENTS = gql`
  {
    continents {
      name
      code
    }
  }
`;

export const useGetContinents = () => {
  const { data, loading, error } = useQuery<IContinentsData>(GET_CONTINENTS);
  return { data, loading, error };
};
