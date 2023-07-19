import TravelApi from '@/api/TravelApi';
import { useQuery } from 'react-query';

const useGetTravelDetail = (contentId: string) => {
  const { data, isLoading, error } = useQuery(
    ['travelList', contentId],
    async () => {
      try {
        const response = await TravelApi.get(
          `/detailCommon1?serviceKey=${
            import.meta.env.VITE_TRAVEL_API_KEY
          }&MobileOS=WIN&MobileApp=AppTest&_type=json&defaultYN=Y&addrinfoYN=Y&overviewYN=Y&mapinfoYN=Y&firstImageYN=Y&contentId=${contentId}`,
        );
        return response.data.response.body.items.item[0];
      } catch (error) {
        console.log('@@@@', error);
        throw error;
      }
    },
    {
      staleTime: Infinity,
    },
  );

  return { data, isLoading, error };
};

export default useGetTravelDetail;
