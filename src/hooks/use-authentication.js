import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { loginUser, logoutUser } from 'apis/authentication.js';

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (data.accessTokenExpiresAt) {
        localStorage.setItem('accessTokenExpiresAt', data.accessTokenExpiresAt);
      }
      if (data.refreshTokenExpiresAt) {
        localStorage.setItem(
          'refreshTokenExpiresAt',
          data.refreshTokenExpiresAt,
        );
      }
      navigate('/dashboard');
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();

  const clearAuthAndRedirect = () => {
    localStorage.removeItem('accessTokenExpiresAt');
    localStorage.removeItem('refreshTokenExpiresAt');
    navigate('/login');
  };

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: clearAuthAndRedirect,
    onError: (error) => {
      console.error('Logout failed:', error);
      clearAuthAndRedirect();
    },
  });
};
