import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="pt-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
        <AlertTriangle className="w-10 h-10 text-red-500" />
      </div>
      <h1 className="text-5xl font-display font-bold text-gray-900 mb-2">404</h1>
      <p className="text-xl text-gray-500 mb-8">Page not found</p>
      <p className="text-gray-400 mb-10">
        Looks like this page took a nap. Let&apos;s get you back on track.
      </p>
      <Button variant="peach" className="flex items-center gap-2" onClick={() => navigate('/')}>
        Back to Dashboard
      </Button>
    </div>
  );
}