import { useNavigate } from 'react-router-dom';

const useRouter = () => {
  const navigate = useNavigate();

  const goTo = (path: string | number, isReplace?: boolean): void => {
    if (typeof path === 'string') {
      isReplace ? navigate(path, { replace: true }) : navigate(path);
    } else if (typeof path === 'number') {
      navigate(path);
    }
  };
  return { goTo };
};

export default useRouter;
