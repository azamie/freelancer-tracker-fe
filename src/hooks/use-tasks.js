import { useInfiniteQuery } from '@tanstack/react-query';
import { getTasks } from 'apis/tasks.js';

export const useTasks = (projectIds = []) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ['tasks', projectIds],
    queryFn: ({ pageParam }) => {
      const params = pageParam ? { cursor: pageParam } : {};
      if (projectIds && projectIds.length > 0) {
        params.projects = projectIds;
      }
      return getTasks(params);
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

  const tasks =
    data?.pages.flatMap((page) => {
      if (Array.isArray(page)) {
        return page;
      }
      return page.results || [];
    }) || [];

  return {
    tasks,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  };
};
