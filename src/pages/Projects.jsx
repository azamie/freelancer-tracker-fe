export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      client: 'TechCorp',
      status: 'Active',
      progress: 75,
    },
    {
      id: 2,
      name: 'Mobile App UI',
      client: 'StartupXYZ',
      status: 'In Progress',
      progress: 45,
    },
    {
      id: 3,
      name: 'Website Redesign',
      client: 'Local Business',
      status: 'Completed',
      progress: 100,
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          New Project
        </button>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">All Projects</h2>
        </div>

        <div className="divide-y divide-gray-200">
          {projects.map((project) => (
            <div key={project.id} className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {project.name}
                </h3>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    project.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : project.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-3">
                Client: {project.client}
              </p>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {project.progress}% complete
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
