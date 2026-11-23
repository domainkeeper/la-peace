import { useAttendanceStore } from '@/store/useAttendanceStore';
import { api } from '@/services/api';
import { useEffect } from 'react';

export function useAttendance() {
  const { classes, records, stats, setClasses, setRecords, setStats, checkIn } =
    useAttendanceStore();

  useEffect(() => {
    const loadData = async () => {
      const [classData, recordData, statsData] = await Promise.all([
        api.getClasses(),
        api.getAttendanceRecords(),
        api.getStats(),
      ]);
      setClasses(classData);
      setRecords(recordData);
      setStats(statsData);
    };
    loadData();
  }, [setClasses, setRecords, setStats]);

  const handleCheckIn = async (classId: string) => {
    try {
      await api.checkIn(classId);
      checkIn(classId);
    } catch (error) {
      console.error('Check-in failed:', error);
    }
  };

  return {
    classes,
    records,
    stats,
    checkIn: handleCheckIn,
  };
}