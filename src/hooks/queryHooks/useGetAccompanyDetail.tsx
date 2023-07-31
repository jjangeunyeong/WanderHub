import { useQuery } from 'react-query';
import WanderHubAPI from '@/api/WanderHubAPI';

const useGetAccompanyDetail = (id?: string) => {
  const { data, isLoading, error } = useQuery(
    ['accompanyDetail', id],
    async () => {
      const response = await WanderHubAPI.get(`/accompany/${id}`);
      return response.data;
    },
    {
      staleTime: 50000,
    },
  );

  return { data, isLoading, error };
};

export default useGetAccompanyDetail;
