import { useQuery } from '@tanstack/react-query';
import { getUserMe, getUserSummary } from 'apis/users.js';

export const useUser = () => {
  return useQuery({
    queryKey: ['user', 'me'],
    queryFn: getUserMe,
  });
};

export const useUserSummary = () => {
  return useQuery({
    queryKey: ['user', 'summary'],
    queryFn: getUserSummary,
  });
};
