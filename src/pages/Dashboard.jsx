import StatsCard from 'components/StatsCard.jsx';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Active Projects">
          <p className="text-2xl font-semibold text-gray-900">12</p>
        </StatsCard>
        <StatsCard title="Pending Tasks">
          <p className="text-2xl font-semibold text-gray-900">8</p>
        </StatsCard>
        <StatsCard title="Monthly Revenue">
          <p className="text-2xl font-semibold text-gray-900">$4,250</p>
        </StatsCard>
        <StatsCard title="GitHub Commits">
          <p className="text-2xl font-semibold text-gray-900">47</p>
        </StatsCard>
      </div>
    </div>
  );
};

export default Dashboard;
