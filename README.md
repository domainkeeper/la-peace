# La Peace 🕊️

**Attendance, reimagined for Gen Z.**

A modern, college-focused attendance UI app built with React, TypeScript, Tailwind CSS, and Framer Motion. Designed for students who want a clean, delightful experience tracking their class attendance.

---

## 🚀 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | [React 19](https://react.dev/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Routing | [React Router DOM v7](https://reactrouter.com/) |
| State Management | [Zustand](https://zustand-demo.pmnd.rs/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Notifications | [React Hot Toast](https://react-hot-toast.com/) |
| Date Utils | [date-fns](https://date-fns.org/) |

---

## 📁 Project Architecture

```
la-peace/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, icons, static media
│   │   ├── images/
│   │   └── icons/
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Base primitives (Button, Input, Card, Badge, Avatar)
│   │   ├── layout/         # Layout shells (Navbar, Sidebar, Footer)
│   │   ├── attendance/     # Attendance-specific components
│   │   └── common/         # Shared cross-cutting components
│   ├── pages/              # Route-level page components
│   │   ├── Dashboard.tsx
│   │   ├── Attendance.tsx
│   │   ├── Classes.tsx
│   │   ├── Profile.tsx
│   │   ├── Settings.tsx
│   │   └── NotFound.tsx
│   ├── hooks/              # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useAttendance.ts
│   │   └── useToast.ts
│   ├── services/           # API / data layer
│   │   └── api.ts
│   ├── store/              # Zustand state stores
│   │   ├── useAuthStore.ts
│   │   └── useAttendanceStore.ts
│   ├── types/              # TypeScript interfaces & types
│   │   └── index.ts
│   ├── utils/              # Pure utility functions
│   │   ├── cn.ts           # Tailwind class merger (clsx + tailwind-merge)
│   │   └── dateUtils.ts
│   ├── constants/          # App-wide constants
│   │   └── index.ts
│   ├── styles/             # Global CSS & Tailwind directives
│   │   └── index.css
│   ├── App.tsx             # Root app + routing
│   └── main.tsx            # Entry point
├── index.html              # HTML entry
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies & scripts
└── README.md               # Project documentation
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js v18+
- npm v10+

### Getting Started

```bash
# Clone the repository
git clone https://github.com/domainkeeper/la-peace.git
cd la-peace

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`.

---

## 🎨 Design System

### Colors
- **Gen Z Blue** (`genz-500`): Primary brand color
- **Peach** (`peach-500`): Secondary / accent
- **Lavender** (`lavender-500`): Tertiary / accents

### Components
All base UI components live in `src/components/ui/` and follow a consistent variant pattern.

### Animation
Page transitions and element entrances use Framer Motion with `motion` components. Check `tailwind.config.js` for custom keyframes (fade-in, slide-up, gentle bounce, soft pulse).

---

## 📱 Features (Architecture)

| Feature | Status | Description |
|---------|--------|-------------|
| Student Dashboard | ✅ | Overview with stats, streak, upcoming classes |
| Attendance Check-in | ✅ | Mark present for classes with toast confirmation |
| Class Schedule | ✅ | View all enrolled classes with details |
| Profile Management | ✅ | View & edit student profile |
| Settings | 🔲 | App preferences (placeholder) |
| Persistent Auth | ✅ | Zustand + localStorage persistence |
| Responsive Design | ✅ | Mobile-first with Tailwind breakpoints |
| Dark Mode | 🔲 | Planned for v2 |
| Class Creation | 🔲 | Planned for v2 |

---

## 🧠 Key Design Decisions

1. **Zustand over Redux**: Lightweight, minimal boilerplate, built-in persistence middleware.
2. **React Router v7**: File-friendly, modern routing with nested route support ready.
3. **Tailwind CSS**: Utility-first styling that matches the Gen Z aesthetic (rounded corners, gradients, glassmorphism).
4. **TypeScript Strict**: Full type safety across components, stores, and API contracts.
5. **Mock API Layer**: `src/services/api.ts` simulates backend calls with delays — ready to swap for real endpoints.

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License

---

**Made with ❤️ for college students everywhere.**