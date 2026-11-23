import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthStore';
import { cn } from '@/utils/cn';
import { User, Home, Clock, BookOpen, User as UserIcon, Settings as SettingsIcon } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/attendance', label: 'Attendance', icon: Clock },
  { path: '/classes', label: 'Classes', icon: BookOpen },
  { path: '/profile', label: 'Profile', icon: UserIcon },
  { path: '/settings', label: 'Settings', icon: SettingsIcon },
];

export default function Navbar() {
  const location = useLocation();
  const { user, logout } = useAuthStore();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gradient tracking-tight">
          <div className="w-8 h-8 bg-genz-600 rounded-2xl flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <span className="font-display">La Peace</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200',
                  isActive
                    ? 'bg-genz-600 text-white shadow-lg shadow-genz-500/40'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-genz-600'
                )}
              >
                <Icon className={cn('w-5 h-5', isActive ? 'text-white' : 'text-gray-400')} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <div className="flex items-center gap-3 p-2 bg-gray-100 rounded-xl">
              {user?.avatar && (
                <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
              )}
              <div>
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.studentId}</p>
              </div>
            </div>
          </div>
          <button
            onClick={logout}
            className="md:hidden p-2 text-gray-600 hover:text-genz-600"
            title="Logout"
          >
            <UserIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}