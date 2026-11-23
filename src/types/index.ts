export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  studentId: string;
  major: string;
  year: '1' | '2' | '3' | '4';
  role: 'student' | 'professor' | 'admin';
}

export interface Class {
  id: string;
  name: string;
  code: string;
  color: string;
  professor: string;
  time: string;
  days: string[];
  room: string;
  credits: number;
}

export interface AttendanceRecord {
  id: string;
  classId: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  checkedInAt?: string;
  notes?: string;
}

export interface Stats {
  totalClasses: number;
  attendedClasses: number;
  attendanceRate: number;
  currentStreak: number;
  totalLate: number;
  totalAbsent: number;
}

export type RoutePath = '/' | '/attendance' | '/classes' | '/profile' | '/settings';