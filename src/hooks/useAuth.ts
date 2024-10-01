import { useState, useEffect } from 'react';
import { authApi } from '../services/api';

// User interface
interface User {
  id: string;
  name: string;
  email: string;
}

// Custom hook for authentication
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Effect to fetch the current user on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await authApi.getCurrentUser();
        setUser(response.data);
        setIsAuthenticated(true);
      } catch (err) {
        setError(err as Error);
        setIsAuthenticated(false);
      }
    };

    fetchUser();
  }, []);

  // Function to handle user login
  const login = async (email: string, password: string) => {
    try {
      const response = await authApi.login({ email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      setIsAuthenticated(true);
    } catch (err) {
      setError(err as Error);
    }
  };

  // Function to handle user logout
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  return { user, isAuthenticated, error, login, logout };
};