import { useAttendance } from '@/hooks/useAttendance';
import { BookOpen, Clock, Building2, Hash } from 'lucide-react';
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';

export default function Classes() {
  const { classes } = useAttendance();

  return (
    <div className="pt-20 pb-12 px-6 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-1">My Classes</h1>
          <p className="text-gray-600">All your courses for this semester</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <motion.div
            key={cls.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 rounded-3xl hover:shadow-xl transition-shadow group"
          >
            <div className={`w-14 h-14 rounded-3xl ${cls.color.replace('bg-', 'bg-')}/30 ${cls.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{cls.name}</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Hash className="w-4 h-4 text-gray-400" />
                <span className="font-medium">{cls.code}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{cls.time}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Building2 className="w-4 h-4 text-gray-400" />
                <span>{cls.room}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="font-medium">{cls.professor}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cls.days.map((day) => (
                  <Badge key={day} variant="present" className="text-xs px-2 py-1">
                    {day}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-sm text-gray-500">{cls.credits} credits</span>
              <span className="text-xs font-medium text-genz-600 bg-genz-50 px-2 py-1 rounded-full">
                Active
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass-card p-8 rounded-3xl text-center">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Need to add a class?</h3>
        <p className="text-gray-500 mb-6">Come back soon, class management is coming in v2!</p>
        <button className="btn-peach">Request Feature</button>
      </div>
    </div>
  );
}