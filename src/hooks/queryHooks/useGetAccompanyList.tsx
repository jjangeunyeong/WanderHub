import { useQuery } from 'react-query';
import WanderHubAPI from '@/api/WanderHubAPI';
import { objectToQuerystring } from '@/utils/commonUtil';

export interface UseGetAccompanyListType {
  uri?: 'bylocal' | 'bydate' | 'bylocalanddate' | '' | null;
  // uri?: 'bylocal' | 'bydate' | 'bylocalanddate' | null;
  curLocal?: string | null;
  curDate?: string | null;
  curPage?: number;
}

const useGetAccompanyList = ({ uri, curLocal, curDate, curPage }: UseGetAccompanyListType) => {
  const params = {
    accompanyLocal: curLocal,
    accompanyDate: curDate,
    page: curPage,
  };

  const filteredQuery = Object.entries(params).reduce(
    (acc, [key, value]) => (value ? { ...acc, [key]: value } : acc),
    {},
  );

  const shouldExecuteQuery = !(curLocal === null && curDate === null);

  const { data, isLoading, error } = useQuery(
    ['accompanyList', uri, curLocal, curDate, curPage],
    async () => {
      if (uri === null) return;
      const response = await WanderHubAPI.get(
        `/accompany/${uri}${objectToQuerystring(filteredQuery)}`,
      );
      return response.data;
    },
    {
      staleTime: 50000,
      enabled: shouldExecuteQuery,
    },
  );

  return { data, isLoading, error };
};

export default useGetAccompanyList;
