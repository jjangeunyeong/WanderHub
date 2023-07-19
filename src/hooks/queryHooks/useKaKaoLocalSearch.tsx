import axios from 'axios';
import { useQuery } from 'react-query';

const useKaKaoLocalSearch = (searchVal: string, isAction: boolean) => {
  const { data, isLoading, error } = useQuery(
    ['kakaoLocal', searchVal],
    async () => {
      try {
        const response = await axios.get(
          `https://dapi.kakao.com/v2/local/search/keyword.json?query=${searchVal}`,
          {
            headers: {
              Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
            },
          },
        );
        return response.data.documents;
      } catch (error) {
        console.log('@@@@', error);
        throw error;
      }
    },
    {
      enabled: isAction && !!searchVal,
    },
  );

  return { data, isLoading, error };
};

export default useKaKaoLocalSearch;
