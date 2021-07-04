import { gql, useQuery } from '@apollo/client';
import { ISingleContinentData } from '../../common/interfaces/ISingleContinent';

const GET_COUNTRIES = gql`
  query Countries($code: String!) {
    countries(filter: { continent: { eq: $code } }) {
      name
      emoji
      languages {
        name
      }
      continent {
        name
        code
      }
    }
  }
`;

export const useGetCountries = (code: string) => {
  const { data, loading, error } = useQuery<ISingleContinentData>(GET_COUNTRIES, {
    variables: { code: code },
  });
  return { data, loading, error };
};
