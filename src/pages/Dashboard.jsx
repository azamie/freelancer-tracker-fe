export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Active Projects</h3>
          <p className="text-2xl font-semibold text-gray-900">12</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Pending Tasks</h3>
          <p className="text-2xl font-semibold text-gray-900">8</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Monthly Revenue</h3>
          <p className="text-2xl font-semibold text-gray-900">$4,250</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">GitHub Commits</h3>
          <p className="text-2xl font-semibold text-gray-900">47</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">E-commerce Platform</span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                Active
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Mobile App UI</span>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                In Progress
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Upcoming Deadlines
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Project Alpha - Phase 2
              </span>
              <span className="text-xs text-red-600">2 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Client Review Meeting
              </span>
              <span className="text-xs text-orange-600">5 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
