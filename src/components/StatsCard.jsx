const StatsCard = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      {children}
    </div>
  );
};

export default StatsCard;
