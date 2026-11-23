import { useAttendance } from '@/hooks/useAttendance';
import { useToast } from '@/hooks/useToast';
import { Clock, CheckCircle2, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function Attendance() {
  const { classes, checkIn } = useAttendance();
  const toast = useToast();

  const handleCheckIn = (classId: string) => {
    checkIn(classId);
    toast.success('You&apos;re marked present! 🎉');
  };

  return (
    <div className="pt-20 pb-12 px-6 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-1">
            Check In to Class
          </h1>
          <p className="text-gray-600">Mark your attendance before class starts</p>
        </div>
        <Button variant="primary" className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          Check In Now
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Classes */}
        <div className="lg:col-span-2 space-y-4">
          {classes.map((cls) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 rounded-3xl flex items-center justify-between group hover:border-genz-200 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl ${cls.color} flex items-center justify-center shadow-lg`}>
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{cls.name}</h3>
                  <p className="text-sm text-gray-500">{cls.code} • {cls.room}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">{cls.time}</p>
                <Badge variant="present" className="mt-1">
                  Scheduled
                </Badge>
                <button
                  onClick={() => handleCheckIn(cls.id)}
                  className="mt-4 w-full bg-genz-600 hover:bg-genz-700 text-white text-sm font-medium py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Mark Present
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card padding="lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Today&apos;s Summary</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-genz-50 rounded-xl">
                <span className="text-gray-600">Classes Today</span>
                <span className="font-bold text-genz-600">{classes.length}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                <span className="text-gray-600">Checked In</span>
                <span className="font-bold text-green-600">0</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl">
                <span className="text-gray-600">Remaining</span>
                <span className="font-bold text-red-600">{classes.length}</span>
              </div>
            </div>
          </Card>

          <Card padding="lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Tips</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Check in before class starts
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">ℹ</span>
                Late check-ins are recorded
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500">★</span>
                Maintain your streak!
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}