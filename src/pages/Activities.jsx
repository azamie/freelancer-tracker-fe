import { useActivities } from 'hooks/use-activities.js';
import { generateActivityDisplayTitle } from 'utils/activity.js';
import InfiniteScrollList from 'components/InfiniteScrollList.jsx';
import githubIcon from 'assets/github.svg';

const Activities = () => {
  const { activities, fetchNextPage, hasNextPage, isLoading, error } =
    useActivities();

  const renderActivityItem = (activity) => (
    <div key={activity.id} className="p-4 flex items-center space-x-3">
      <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
      <div className="flex-1 flex items-center">
        <p className="text-sm text-gray-900">
          {generateActivityDisplayTitle(activity)}
        </p>
        <p className="text-xs text-gray-500 mt-1">{activity.project_name}</p>
      </div>
    </div>
  );

  return (
    <div className="p-6 h-full flex flex-col">
      <div
        className="bg-white shadow rounded-lg flex-1 overflow-auto scrollbar-hide"
        id="activities-scroll-container"
      >
        <InfiniteScrollList
          items={activities}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isLoading={isLoading}
          error={error}
          renderItem={renderActivityItem}
          loadingText="Loading activities..."
          loadingMoreText="Loading more activities..."
          endMessage="No more activities to load"
          scrollableTarget="activities-scroll-container"
        />
      </div>
    </div>
  );
};

export default Activities;
