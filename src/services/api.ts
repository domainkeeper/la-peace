import { User, Class, AttendanceRecord, Stats } from '@/types';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  async getUser(): Promise<User> {
    await delay(400);
    return {
      id: '1',
      name: 'Alex Rivera',
      email: 'alex@university.edu',
      studentId: 'CS2024001',
      major: 'Computer Science',
      year: '2',
      role: 'student',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    };
  },

  async getClasses(): Promise<Class[]> {
    await delay(500);
    return [
      {
        id: '1',
        name: 'Introduction to Psychology',
        code: 'PSY 101',
        color: 'bg-genz-500',
        professor: 'Dr. Sarah Chen',
        time: '9:00 AM - 10:15 AM',
        days: ['Mon', 'Wed', 'Fri'],
        room: 'Building A, Room 201',
        credits: 3,
      },
      {
        id: '2',
        name: 'Data Structures & Algorithms',
        code: 'CS 201',
        color: 'bg-peach-500',
        professor: 'Prof. Marcus Wong',
        time: '10:30 AM - 11:45 AM',
        days: ['Tue', 'Thu'],
        room: 'Tech Center, Room 305',
        credits: 4,
      },
      {
        id: '3',
        name: 'Digital Art & Design',
        code: 'ART 150',
        color: 'bg-lavender-500',
        professor: 'Prof. Elena Vega',
        time: '1:00 PM - 2:15 PM',
        days: ['Mon', 'Wed'],
        room: 'Arts Building, Room 102',
        credits: 3,
      },
      {
        id: '4',
        name: 'Environmental Science',
        code: 'ENV 101',
        color: 'bg-emerald-500',
        professor: 'Dr. James Carter',
        time: '2:30 PM - 3:45 PM',
        days: ['Tue', 'Thu'],
        room: 'Science Hall, Room 150',
        credits: 3,
      },
    ];
  },

  async getAttendanceRecords(): Promise<AttendanceRecord[]> {
    await delay(400);
    return [
      { id: '1', classId: '1', date: '2026-11-20', status: 'present', checkedInAt: '2026-11-20T08:58:00Z' },
      { id: '2', classId: '2', date: '2026-11-21', status: 'late', checkedInAt: '2026-11-21T10:35:00Z' },
      { id: '3', classId: '3', date: '2026-11-20', status: 'present', checkedInAt: '2026-11-20T12:55:00Z' },
      { id: '4', classId: '4', date: '2026-11-21', status: 'absent' },
    ];
  },

  async getStats(): Promise<Stats> {
    await delay(300);
    return {
      totalClasses: 4,
      attendedClasses: 3,
      attendanceRate: 75,
      currentStreak: 5,
      totalLate: 1,
      totalAbsent: 1,
    };
  },

  async checkIn(classId: string): Promise<AttendanceRecord> {
    await delay(600);
    return {
      id: crypto.randomUUID(),
      classId,
      date: new Date().toISOString(),
      status: 'present',
      checkedInAt: new Date().toISOString(),
    };
  },
};