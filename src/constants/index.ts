export const APP_NAME = 'La Peace';
export const APP_TAGLINE = 'Attendance, reimagined for Gen Z.';

export const ATTENDANCE_STATUS = {
  present: { label: 'Present', color: 'bg-green-100 text-green-700', border: 'border-green-200' },
  absent: { label: 'Absent', color: 'bg-red-100 text-red-700', border: 'border-red-200' },
  late: { label: 'Late', color: 'bg-yellow-100 text-yellow-700', border: 'border-yellow-200' },
  excused: { label: 'Excused', color: 'bg-blue-100 text-blue-700', border: 'border-blue-200' },
} as const;

export const COLORS = ['genz-500', 'peach-500', 'lavender-500', 'emerald-500', 'rose-500', 'indigo-500'];

export const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

import { User, Class } from '@/types';

export const MOCK_USER: User = {
  id: '1',
  name: 'Alex Rivera',
  email: 'alex@university.edu',
  studentId: 'CS2024001',
  major: 'Computer Science',
  year: '2',
  role: 'student',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
};

export const MOCK_CLASSES: Class[] = [
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