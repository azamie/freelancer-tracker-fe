export default function Tasks() {
  const tasks = [
    {
      id: 1,
      title: 'Design homepage mockup',
      project: 'E-commerce Platform',
      priority: 'High',
      dueDate: '2025-08-05',
    },
    {
      id: 2,
      title: 'Implement user authentication',
      project: 'Mobile App UI',
      priority: 'Medium',
      dueDate: '2025-08-07',
    },
    {
      id: 3,
      title: 'Write API documentation',
      project: 'E-commerce Platform',
      priority: 'Low',
      dueDate: '2025-08-10',
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          New Task
        </button>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Current Tasks</h2>
        </div>

        <div className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <div key={task.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Project: {task.project}
                  </p>
                  <p className="text-sm text-gray-500">
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      task.priority === 'High'
                        ? 'bg-red-100 text-red-800'
                        : task.priority === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {task.priority}
                  </span>

                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
