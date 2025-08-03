import { Outlet } from 'react-router';
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';

const Layout = () => {
  return (
    <div className="h-screen bg-gray-50 grid grid-cols-[256px_1fr] grid-rows-[64px_1fr]">
      <Sidebar />
      <Header />
      <main className="overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
