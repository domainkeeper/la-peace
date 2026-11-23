import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthStore';
import Dashboard from '@/pages/Dashboard';
import Attendance from '@/pages/Attendance';
import Classes from '@/pages/Classes';
import Profile from '@/pages/Profile';
import Settings from '@/pages/Settings';
import NotFound from '@/pages/NotFound';
function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div className="min-h-screen bg-genz-50">
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/attendance" replace />
          }
        />
        <Route path="/attendance" element={isAuthenticated ? <Attendance /> : <Navigate to="/" replace />} />
        <Route path="/classes" element={isAuthenticated ? <Classes /> : <Navigate to="/" replace />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" replace />} />
        <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;