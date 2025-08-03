import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useLogout } from 'hooks/use-authentication.js';
import { useUser } from 'hooks/use-user.js';
import {
  MdDashboard,
  MdFolder,
  MdCheckBox,
  MdAttachMoney,
} from 'react-icons/md';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: MdDashboard },
  { name: 'Projects', href: '/projects', icon: MdFolder },
  { name: 'Tasks', href: '/tasks', icon: MdCheckBox },
  { name: 'Invoices', href: '/invoices', icon: MdAttachMoney },
];

const Sidebar = () => {
  const location = useLocation();
  const logoutMutation = useLogout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const { data: userInfo } = useUser();
  const userEmail = userInfo?.email || 'user@example.com';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="h-full bg-white shadow-lg flex flex-col row-span-2 border-r border-gray-200 w-64">
      <div className="flex h-16 items-center justify-center border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">Freelancer Hub</h1>
      </div>

      <nav className="mt-4 flex-1">
        <div className="space-y-1 px-4">
          {navigation.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'bg-indigo-100 text-indigo-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <IconComponent className="mr-3 text-lg" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="relative px-4 pb-4" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        >
          <div className="flex items-center min-w-0 flex-1">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-indigo-600 font-medium text-sm">
                {userEmail.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="truncate text-sm">{userEmail}</span>
          </div>
        </button>

        {isMenuOpen && (
          <div className="absolute bottom-full left-4 right-4 mb-2 bg-white border border-gray-200 rounded-md shadow-lg">
            <button
              onClick={handleLogout}
              disabled={logoutMutation.isPending}
              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md disabled:opacity-50"
            >
              {logoutMutation.isPending ? 'Signing out...' : 'Sign out'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
