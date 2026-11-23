import { useAuthStore } from '@/store/useAuthStore';

export function useAuth() {
  const { user, isAuthenticated, login, logout } = useAuthStore();

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
}