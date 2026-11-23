import { useAttendance } from '@/hooks/useAttendance';
import { useAuth } from '@/hooks/useAuth';
import { Clock, BookOpen, User, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Badge from '@/components/ui/Badge';

export default function Dashboard() {
  const { stats, classes } = useAttendance();
  const { user } = useAuth();

  const upcomingClasses = classes.slice(0, 3);

  return (
    <div className="pt-20 pb-12 px-6 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-1">
            Welcome back, {user?.name} 👋
          </h1>
          <p className="text-gray-600">
            Here&apos;s what&apos;s happening with your attendance today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="present" className="px-4 py-2 text-sm font-medium">
            {stats?.attendanceRate}% Attendance
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 rounded-3xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Classes</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stats?.totalClasses}</p>
            </div>
            <BookOpen className="w-8 h-8 text-genz-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transitionDelay: 0.1 }}
          className="glass-card p-6 rounded-3xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Attended</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stats?.attendedClasses}</p>
            </div>
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transitionDelay: 0.2 }}
          className="glass-card p-6 rounded-3xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Current Streak</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">
                {stats?.currentStreak} days
              </p>
            </div>
            <Clock className="w-8 h-8 text-peach-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transitionDelay: 0.3 }}
          className="glass-card p-6 rounded-3xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Late Arrivals</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{stats?.totalLate}</p>
            </div>
            <AlertCircle className="w-8 h-8 text-yellow-500" />
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 rounded-3xl hover:shadow-xl transition-shadow cursor-pointer group"
          onClick={() => {}}
        >
          <Link to="/attendance" className="block h-full w-full">
            <div className="w-12 h-12 bg-genz-100 text-genz-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Check In</h3>
            <p className="text-sm text-gray-500">Mark your attendance for today</p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transitionDelay: 0.1 }}
          className="glass-card p-8 rounded-3xl hover:shadow-xl transition-shadow cursor-pointer group"
          onClick={() => {}}
        >
          <Link to="/classes" className="block h-full w-full">
            <div className="w-12 h-12 bg-peach-100 text-peach-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">My Classes</h3>
            <p className="text-sm text-gray-500">View your schedule</p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transitionDelay: 0.2 }}
          className="glass-card p-8 rounded-3xl hover:shadow-xl transition-shadow cursor-pointer group"
          onClick={() => {}}
        >
          <Link to="/profile" className="block h-full w-full">
            <div className="w-12 h-12 bg-lavender-100 text-lavender-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <User className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Profile</h3>
            <p className="text-sm text-gray-500">Manage your account</p>
          </Link>
        </motion.div>
      </div>

      {/* Upcoming Classes */}
      <div className="glass-card p-8 rounded-3xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Upcoming Classes</h2>
          <Link to="/classes" className="text-sm text-genz-600 font-medium hover:underline">
            View all
          </Link>
        </div>
        <div className="space-y-4">
          {upcomingClasses.map((cls) => (
            <div
              key={cls.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-2xl ${cls.color} flex items-center justify-center`}>
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{cls.name}</h3>
                  <p className="text-sm text-gray-500">{cls.code} • {cls.room}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">{cls.time}</p>
                <p className="text-xs text-gray-400">{cls.days.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}