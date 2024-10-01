import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Organization API
const organizationApi = {
  getOrganizations: () => api.get('/organizations'),
  getOrganization: (id) => api.get(`/organizations/${id}`),
  createOrganization: (data) => api.post('/organizations', data),
  updateOrganization: (id, data) => api.put(`/organizations/${id}`, data),
  deleteOrganization: (id) => api.delete(`/organizations/${id}`),
};

// User API
const userApi = {
  getUsers: () => api.get('/users'),
  getUser: (id) => api.get(`/users/${id}`),
  createUser: (data) => api.post('/users', data),
  updateUser: (id, data) => api.put(`/users/${id}`, data),
  deleteUser: (id) => api.delete(`/users/${id}`),
  getUserRole: (id) => api.get(`/users/${id}/role`),
  updateUserRole: (id, roleId) => api.put(`/users/${id}/role`, { roleId }),
};

// Role API
const roleApi = {
  getRoles: () => api.get('/roles'),
  getRole: (id) => api.get(`/roles/${id}`),
  createRole: (data) => api.post('/roles', data),
  updateRole: (id, data) => api.put(`/roles/${id}`, data),
  deleteRole: (id) => api.delete(`/roles/${id}`),
};

// Privilege API
const privilegeApi = {
  getPrivileges: (organizationId) => api.get(`/organizations/${organizationId}/privileges`),
  updatePrivilege: (organizationId, roleId, resource, action, allowed) => 
    api.put(`/organizations/${organizationId}/privileges`, { roleId, resource, action, allowed }),
};

// Client API
const clientApi = {
  getClients: () => api.get('/clients'),
  getClient: (id) => api.get(`/clients/${id}`),
  createClient: (data) => api.post('/clients', data),
  updateClient: (id, data) => api.put(`/clients/${id}`, data),
  deleteClient: (id) => api.delete(`/clients/${id}`),
};

// Project API
const projectApi = {
  getProjects: () => api.get('/projects'),
  getProject: (id) => api.get(`/projects/${id}`),
  createProject: (data) => api.post('/projects', data),
  updateProject: (id, data) => api.put(`/projects/${id}`, data),
  deleteProject: (id) => api.delete(`/projects/${id}`),
};

// Time Entry API
const timeEntryApi = {
  getTimeEntries: () => api.get('/time-entries'),
  getTimeEntry: (id) => api.get(`/time-entries/${id}`),
  createTimeEntry: (data) => api.post('/time-entries', data),
  updateTimeEntry: (id, data) => api.put(`/time-entries/${id}`, data),
  deleteTimeEntry: (id) => api.delete(`/time-entries/${id}`),
};

// Invoice API
const invoiceApi = {
  getInvoices: () => api.get('/invoices'),
  getInvoice: (id) => api.get(`/invoices/${id}`),
  createInvoice: (data) => api.post('/invoices', data),
  updateInvoice: (id, data) => api.put(`/invoices/${id}`, data),
  deleteInvoice: (id) => api.delete(`/invoices/${id}`),
};

export {
  organizationApi,
  userApi,
  roleApi,
  privilegeApi,
  clientApi,
  projectApi,
  timeEntryApi,
  invoiceApi,
};

export const authApi = {
  getCurrentUser: () => axios.get('/api/current-user'),
  // Other API methods...
}