import { useProjects } from 'hooks/use-projects.js';
import InfiniteScrollList from 'components/InfiniteScrollList.jsx';

export default function Projects() {
  const queryResult = useProjects();

  const getStatusColor = (status) => {
    switch (status) {
      case 'UNSTARTED':
        return 'bg-gray-100 text-gray-800';
      case 'IN_PROGRESS':
        return 'bg-blue-100 text-blue-800';
      case 'ON_HOLD':
        return 'bg-yellow-100 text-yellow-800';
      case 'COMPLETED':
        return 'bg-green-100 text-green-800';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'UNSTARTED':
        return 'Unstarted';
      case 'IN_PROGRESS':
        return 'In Progress';
      case 'ON_HOLD':
        return 'On Hold';
      case 'COMPLETED':
        return 'Completed';
      case 'CANCELLED':
        return 'Cancelled';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const renderProject = (project) => (
    <div key={project.id} className="p-6">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            {project.name}
          </h3>
          <span
            className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}
          >
            {getStatusLabel(project.status)}
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex justify-between items-center text-xs text-gray-500">
        <div>
          <span className="font-medium">Start:</span>{' '}
          {formatDate(project.startDate)}
        </div>
        <div>
          <span className="font-medium">End:</span>{' '}
          {formatDate(project.endDate)}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Projects</h1>

      <div className="bg-white shadow rounded-lg">
        <InfiniteScrollList
          items={queryResult.projects}
          fetchNextPage={queryResult.fetchNextPage}
          hasNextPage={queryResult.hasNextPage}
          isLoading={queryResult.isLoading}
          isFetchingNextPage={queryResult.isFetchingNextPage}
          error={queryResult.error}
          renderItem={renderProject}
          loadingText="Loading projects..."
          loadingMoreText="Loading more projects..."
          endMessage="No more projects to load"
        />
      </div>
    </div>
  );
}
