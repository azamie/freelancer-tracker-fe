import { Navigate } from 'react-router-dom';
import { isAuthenticated } from 'utils/authentication';

export default function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
}
