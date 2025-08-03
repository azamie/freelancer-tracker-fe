import { useInfiniteQuery } from '@tanstack/react-query';
import { getProjects } from 'apis/projects.js';

export const useProjects = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: ({ pageParam }) => {
      return getProjects(pageParam ? { cursor: pageParam } : {});
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

  const projects =
    data?.pages.flatMap((page) => {
      if (Array.isArray(page)) {
        return page;
      }
      return page.results || [];
    }) || [];

  return {
    projects,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  };
};
