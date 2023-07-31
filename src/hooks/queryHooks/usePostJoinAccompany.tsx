import AuthAPI from '@/api/AuthAPI';
import { useMutation } from 'react-query';

const postJoinAccompany = async (id?: string) => {
  const response = await AuthAPI.post(`/accompany/join/${id}`, {});
  console.log('@@@@@', response);
};

const usePostJoinAccompany = () => {
  const mutation = useMutation(postJoinAccompany);
  return mutation;
};

export default usePostJoinAccompany;
/* 
{
  "status": 201,
  "statusText": "Created",
 */
