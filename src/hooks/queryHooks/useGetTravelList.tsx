import TravelApi from '@/api/TravelApi';
import { useQuery } from 'react-query';

const useGetTravelList = (code: string) => {
  const { data, isLoading, error } = useQuery(
    ['travelList', code],
    async () => {
      try {
        const response = await TravelApi.get(
          `/areaBasedList1?serviceKey=${
            import.meta.env.VITE_TRAVEL_API_KEY
          }&MobileOS=WIN&MobileApp=AppTest&_type=json&numOfRows=20&arrange=Q&${code.replace(
            '?',
            '',
          )}`,
        );
        return response.data.response.body;
      } catch (error) {
        console.log('@@@@', error);
        throw error;
      }
    },
    {
      staleTime: 50000,
      // staleTime: Infinity,
    },
  );

  return { data, isLoading, error };
};

export default useGetTravelList;
