import { useLocation } from 'react-router';

const pageNames = {
  '/dashboard': 'Dashboard',
  '/projects': 'Projects',
  '/tasks': 'Tasks',
  '/invoices': 'Invoices',
};

export default function Header() {
  const location = useLocation();
  const pageName = pageNames[location.pathname] || 'Page';

  return (
    <div className="flex items-center bg-white border-b border-gray-200 col-start-2">
      <div className="flex items-center px-6">
        <h2 className="text-xl font-semibold text-gray-900">{pageName}</h2>
      </div>
    </div>
  );
}
