import { Navigate } from 'react-router-dom';

// For now, simple mock auth check - replace with actual auth logic later
const isAuthenticated = () => {
  // TODO: Implement real auth check (cookie, token, etc.)
  return localStorage.getItem('isAuthenticated') === 'true';
};

export default function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
}
