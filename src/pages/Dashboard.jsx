import StatsCard from 'components/StatsCard.jsx';
import LoadingSpinner from 'components/LoadingSpinner.jsx';
import { useUserSummary } from 'hooks/use-user.js';
import { formatCurrency } from 'utils/currency.js';

const Dashboard = () => {
  const { data: summary, isLoading, error } = useUserSummary();

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center py-12">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <p className="text-red-600">Failed to load dashboard data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Active Projects">
          <p className="text-2xl font-semibold text-gray-900">
            {summary?.activeProjects}
          </p>
        </StatsCard>
        <StatsCard title="Pending Tasks">
          <p className="text-2xl font-semibold text-gray-900">
            {summary?.pendingTasks}
          </p>
        </StatsCard>
        <StatsCard title="Monthly Revenue">
          <p className="text-2xl font-semibold text-gray-900">
            {formatCurrency(summary?.monthlyRevenue)}
          </p>
        </StatsCard>
        <StatsCard title="Weekly GitHub Releases">
          <p className="text-2xl font-semibold text-gray-900">
            {summary?.weeklyGithubReleases}
          </p>
        </StatsCard>
      </div>
    </div>
  );
};

export default Dashboard;
