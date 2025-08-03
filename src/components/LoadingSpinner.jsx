const LoadingSpinner = ({ text, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      {text && <p className="mt-2 text-sm text-gray-500">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
