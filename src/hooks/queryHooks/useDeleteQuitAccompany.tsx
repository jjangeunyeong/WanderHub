// useDeleteQuitAccompany.tsx
import { useMutation } from 'react-query';
import AuthAPI from '@/api/AuthAPI';

const deleteQuitAccompany = async (id: string) => {
  const response = await AuthAPI.delete(`/accompany/quit/${id}`);
  return response.data;
};

const useDeleteQuitAccompany = () => {
  const mutation = useMutation(deleteQuitAccompany);

  return mutation;
};

export default useDeleteQuitAccompany;
