import { useInfiniteQuery } from '@tanstack/react-query';
import { getActivities } from 'apis/activities.js';

export const useActivities = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ['activities'],
    queryFn: ({ pageParam }) => {
      return getActivities(pageParam ? { cursor: pageParam } : {});
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage || !lastPage.next) {
        return undefined;
      }
      const url = new URL(lastPage.next);
      const cursor = url.searchParams.get('cursor');
      return cursor;
    },
    initialPageParam: null,
  });

  const activities =
    data?.pages.flatMap((page) => {
      if (Array.isArray(page)) {
        return page;
      }
      return page.results || [];
    }) || [];

  return {
    activities,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  };
};
