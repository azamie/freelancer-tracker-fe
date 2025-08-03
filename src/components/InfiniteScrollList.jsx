import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingSpinner from './LoadingSpinner.jsx';

export default function InfiniteScrollList({
  items,
  fetchNextPage,
  hasNextPage,
  isLoading,
  error,
  renderItem,
  loadingText = 'Loading...',
  loadingMoreText = 'Loading more...',
  endMessage = 'No more items to load',
  className = '',
  scrollableTarget,
}) {
  if (error) {
    return (
      <div className="p-6 text-center text-red-600">
        Error loading data: {error.message}
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner text={loadingText} className="p-6" />;
  }

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<LoadingSpinner text={loadingMoreText} className="p-6" />}
      endMessage={
        items.length > 0 && (
          <div className="p-6 text-center">
            <p className="text-sm text-gray-500">{endMessage}</p>
          </div>
        )
      }
      scrollableTarget={scrollableTarget}
      className={className}
    >
      <div className="divide-y divide-gray-200">
        {items.map((item, index) => renderItem(item, index))}
      </div>
    </InfiniteScroll>
  );
}
