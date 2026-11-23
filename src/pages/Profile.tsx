import { useAuth } from '@/hooks/useAuth';
import { User, Mail, GraduationCap, Settings as SettingsIcon } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <div className="pt-20 pb-12 px-6 max-w-3xl mx-auto space-y-8">
      <div className="glass-card p-8 rounded-3xl text-center">
        <div className="w-24 h-24 rounded-full bg-genz-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
          {user?.avatar ? (
            <img src={user.avatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
          ) : (
            <User className="w-12 h-12 text-white" />
          )}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{user?.name}</h2>
        <p className="text-genz-600 font-medium">{user?.studentId}</p>
        <p className="text-gray-500 mt-2">{user?.major} • Year {user?.year}</p>
        <div className="flex justify-center gap-4 mt-6">
          <Button variant="outline" className="w-full max-w-xs">
            Edit Profile
          </Button>
          <Button variant="danger" onClick={logout} className="w-full max-w-xs">
            Logout
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card padding="lg">
          <div className="flex items-center gap-4 mb-6">
            <Mail className="w-5 h-5 text-genz-600" />
            <h3 className="text-lg font-bold text-gray-900">Contact Info</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <span className="text-gray-600 text-sm">Email</span>
              <span className="text-sm font-medium">{user?.email}</span>
            </div>
          </div>
        </Card>

        <Card padding="lg">
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap className="w-5 h-5 text-peach-600" />
            <h3 className="text-lg font-bold text-gray-900">Academic Info</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <span className="text-gray-600 text-sm">Major</span>
              <span className="text-sm font-medium">{user?.major}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <span className="text-gray-600 text-sm">Year</span>
              <span className="text-sm font-medium">{user?.year}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <span className="text-gray-600 text-sm">Student ID</span>
              <span className="text-sm font-medium">{user?.studentId}</span>
            </div>
          </div>
        </Card>
      </div>

      <Card padding="lg">
        <div className="flex items-center gap-4 mb-6">
          <SettingsIcon className="w-5 h-5 text-lavender-600" />
          <h3 className="text-lg font-bold text-gray-900">Preferences</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div>
              <p className="text-sm font-medium text-gray-900">Notifications</p>
              <p className="text-xs text-gray-500">Get notified before class</p>
            </div>
            <button className="w-10 h-5 rounded-full bg-genz-500 relative">
              <span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
            </button>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div>
              <p className="text-sm font-medium text-gray-900">Dark Mode</p>
              <p className="text-xs text-gray-500">Coming soon</p>
            </div>
            <button className="w-10 h-5 rounded-full bg-gray-200 relative disabled:opacity-50" disabled>
              <span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}