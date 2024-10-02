// api.ts
import axios, { AxiosResponse } from 'axios';
import { User } from '../types';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});


// Interfaces for other entities (Organization, Role, Client, etc.) - add as needed


export const authApi = {
  login: (credentials: { email: string; password: string }) => api.post('/auth/login', credentials),
  getCurrentUser: (): Promise<AxiosResponse<User>> => api.get('/api/current-user'), // Use api instance for consistent base URL
};


// Other API modules (organizationApi, userApi, etc.) - keep your existing code