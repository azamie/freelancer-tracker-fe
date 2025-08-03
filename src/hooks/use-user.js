import { useQuery } from '@tanstack/react-query';
import { getUserMe } from 'apis/users.js';

export const useUser = () => {
  return useQuery({
    queryKey: ['user', 'me'],
    queryFn: getUserMe,
  });
};
