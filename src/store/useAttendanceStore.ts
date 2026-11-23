import { create } from 'zustand';
import { Class, AttendanceRecord, Stats } from '@/types';

interface AttendanceState {
  classes: Class[];
  records: AttendanceRecord[];
  stats: Stats | null;
  setClasses: (classes: Class[]) => void;
  setRecords: (records: AttendanceRecord[]) => void;
  setStats: (stats: Stats) => void;
  checkIn: (classId: string) => void;
}

export const useAttendanceStore = create<AttendanceState>((set, get) => ({
  classes: [],
  records: [],
  stats: null,
  setClasses: (classes) => set({ classes }),
  setRecords: (records) => set({ records }),
  setStats: (stats) => set({ stats }),
  checkIn: (classId) => {
    const { records } = get();
    const now = new Date().toISOString();
    const existing = records.find((r) => r.classId === classId);
    if (existing) {
      set({
        records: records.map((r) =>
          r.classId === classId ? { ...r, status: 'present', checkedInAt: now } : r
        ),
      });
    } else {
      set({
        records: [
          ...records,
          { id: crypto.randomUUID(), classId, date: now, status: 'present', checkedInAt: now },
        ],
      });
    }
  },
}));