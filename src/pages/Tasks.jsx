import { useState } from 'react';
import { useTasks } from 'hooks/use-tasks.js';
import { useProjects } from 'hooks/use-projects.js';
import InfiniteScrollList from 'components/InfiniteScrollList.jsx';
import { formatDate } from 'utils/date.js';
import { TASK_STATUS_CONFIG, TASK_TYPE_CONFIG } from 'constants/task.js';

const Tasks = () => {
  const [selectedProjectIds, setSelectedProjectIds] = useState([]);
  const tasksQuery = useTasks(selectedProjectIds);
  const projectsQuery = useProjects();

  const handleProjectFilter = (projectId) => {
    setSelectedProjectIds((prev) => {
      if (prev.includes(projectId)) {
        return prev.filter((id) => id !== projectId);
      } else {
        return [...prev, projectId];
      }
    });
  };

  const clearFilters = () => {
    setSelectedProjectIds([]);
  };

  const renderTask = (task) => {
    const taskTypeConfig = TASK_TYPE_CONFIG[task.taskType];
    const TaskTypeIcon = taskTypeConfig.icon;

    return (
      <div key={task.id} className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div
                className={`flex items-center gap-1 ${taskTypeConfig.color}`}
              >
                <TaskTypeIcon className="w-3 h-3" />
                <span className="text-xs font-medium">
                  {taskTypeConfig.label}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">{task.name}</h3>
            </div>
            <div className="flex items-center flex-wrap gap-2 mb-3">
              <span
                className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${TASK_STATUS_CONFIG[task.status].color}`}
              >
                {TASK_STATUS_CONFIG[task.status].label}
              </span>
              {task.project && (
                <span className="text-sm text-indigo-600 font-medium">
                  {task.project.name}
                </span>
              )}
            </div>
          </div>
        </div>

        {task.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {task.description}
          </p>
        )}

        <div className="flex justify-between items-center text-xs text-gray-500">
          <div>
            <span className="font-medium">Created:</span>{' '}
            {formatDate(task.created)}
          </div>
          <div>
            <span className="font-medium">Modified:</span>{' '}
            {formatDate(task.modified)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
      </div>

      <div className="mb-6 bg-white p-4 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          Filter by Projects
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={clearFilters}
            className={`px-3 py-1 text-xs rounded-full border ${
              selectedProjectIds.length === 0
                ? 'bg-indigo-100 text-indigo-800 border-indigo-200'
                : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
            }`}
          >
            All Tasks
          </button>
          {projectsQuery.projects.map((project) => (
            <button
              key={project.id}
              onClick={() => handleProjectFilter(project.id)}
              className={`px-3 py-1 text-xs rounded-full border ${
                selectedProjectIds.includes(project.id)
                  ? 'bg-indigo-100 text-indigo-800 border-indigo-200'
                  : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
              }`}
            >
              {project.name}
            </button>
          ))}
        </div>
      </div>

      <div
        className="bg-white shadow rounded-lg flex-1 overflow-auto scrollbar-hide"
        id="tasks-scroll-container"
      >
        <InfiniteScrollList
          items={tasksQuery.tasks}
          fetchNextPage={tasksQuery.fetchNextPage}
          hasNextPage={tasksQuery.hasNextPage}
          isLoading={tasksQuery.isLoading}
          error={tasksQuery.error}
          renderItem={renderTask}
          loadingText="Loading tasks..."
          loadingMoreText="Loading more tasks..."
          endMessage="No more tasks to load"
          scrollableTarget="tasks-scroll-container"
        />
      </div>
    </div>
  );
};

export default Tasks;
