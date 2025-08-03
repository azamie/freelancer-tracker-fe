import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'apis/authentication.js';

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // Handle successful login - cookies are set automatically by the server
      localStorage.setItem('isAuthenticated', 'true');
      // Store user info in localStorage if needed
      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      navigate('/dashboard');
    },
    onError: (error) => {
      console.error('Login failed:', error);
      // Handle login error (show toast, etc.)
    },
  });
};
