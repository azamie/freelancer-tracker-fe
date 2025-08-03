import { useProjects } from 'hooks/use-projects.js';
import InfiniteScrollList from 'components/InfiniteScrollList.jsx';
import { formatDate } from 'utils/date.js';
import { PROJECT_STATUS_CONFIG } from 'constants/project.js';

const Projects = () => {
  const queryResult = useProjects();

  const renderProject = (project) => (
    <div key={project.id} className="p-6">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            {project.name}
          </h3>
          <span
            className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${PROJECT_STATUS_CONFIG[project.status].color}`}
          >
            {PROJECT_STATUS_CONFIG[project.status].label}
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
    <div className="p-6 h-full flex flex-col">
      <div
        className="bg-white shadow rounded-lg flex-1 overflow-auto scrollbar-hide"
        id="projects-scroll-container"
      >
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
          scrollableTarget="projects-scroll-container"
        />
      </div>
    </div>
  );
};

export default Projects;
