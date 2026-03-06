import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="bg-background-light dark:bg-background-dark transition-colors duration-300 antialiased text-right min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
