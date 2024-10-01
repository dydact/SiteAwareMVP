import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

interface Organization {
  id: string;
  name: string;
  // Add other organization properties
}

interface User {
  id: string;
  name: string;
  email: string;
  // Add other user properties
}

interface Role {
  id: string;
  name: string;
  // Add other role properties
}

interface Client {
  id: string;
  name: string;
  // Add other client properties
}

interface Project {
  id: string;
  name: string;
  // Add other project properties
}

interface TimeEntry {
  id: string;
  projectId: string;
  userId: string;
  duration: number;
  // Add other time entry properties
}

interface Invoice {
  id: string;
  clientId: string;
  amount: number;
  // Add other invoice properties
}

export const organizationApi = {
  getOrganizations: () => api.get<Organization[]>('/organizations'),
  getOrganization: (id: string) => api.get<Organization>(`/organizations/${id}`),
  createOrganization: (data: Partial<Organization>) => api.post<Organization>('/organizations', data),
  updateOrganization: (id: string, data: Partial<Organization>) => api.put<Organization>(`/organizations/${id}`, data),
  deleteOrganization: (id: string) => api.delete(`/organizations/${id}`),
};

export const userApi = {
  getUsers: () => api.get<User[]>('/users'),
  getUser: (id: string) => api.get<User>(`/users/${id}`),
  createUser: (data: Partial<User>) => api.post<User>('/users', data),
  updateUser: (id: string, data: Partial<User>) => api.put<User>(`/users/${id}`, data),
  deleteUser: (id: string) => api.delete(`/users/${id}`),
  getUserRole: (id: string) => api.get<Role>(`/users/${id}/role`),
  updateUserRole: (id: string, roleId: string) => api.put(`/users/${id}/role`, { roleId }),
};

export const roleApi = {
  getRoles: () => api.get<Role[]>('/roles'),
  getRole: (id: string) => api.get<Role>(`/roles/${id}`),
  createRole: (data: Partial<Role>) => api.post<Role>('/roles', data),
  updateRole: (id: string, data: Partial<Role>) => api.put<Role>(`/roles/${id}`, data),
  deleteRole: (id: string) => api.delete(`/roles/${id}`),
};

export const privilegeApi = {
  getPrivileges: (organizationId: string) => api.get(`/organizations/${organizationId}/privileges`),
  updatePrivilege: (organizationId: string, roleId: string, resource: string, action: string, allowed: boolean) => 
    api.put(`/organizations/${organizationId}/privileges`, { roleId, resource, action, allowed }),
};

export const clientApi = {
  getClients: () => api.get<Client[]>('/clients'),
  getClient: (id: string) => api.get<Client>(`/clients/${id}`),
  createClient: (data: Partial<Client>) => api.post<Client>('/clients', data),
  updateClient: (id: string, data: Partial<Client>) => api.put<Client>(`/clients/${id}`, data),
  deleteClient: (id: string) => api.delete(`/clients/${id}`),
};

export const projectApi = {
  getProjects: () => api.get<Project[]>('/projects'),
  getProject: (id: string) => api.get<Project>(`/projects/${id}`),
  createProject: (data: Partial<Project>) => api.post<Project>('/projects', data),
  updateProject: (id: string, data: Partial<Project>) => api.put<Project>(`/projects/${id}`, data),
  deleteProject: (id: string) => api.delete(`/projects/${id}`),
};

export const timeEntryApi = {
  getTimeEntries: () => api.get<TimeEntry[]>('/time-entries'),
  getTimeEntry: (id: string) => api.get<TimeEntry>(`/time-entries/${id}`),
  createTimeEntry: (data: Partial<TimeEntry>) => api.post<TimeEntry>('/time-entries', data),
  updateTimeEntry: (id: string, data: Partial<TimeEntry>) => api.put<TimeEntry>(`/time-entries/${id}`, data),
  deleteTimeEntry: (id: string) => api.delete(`/time-entries/${id}`),
};

export const invoiceApi = {
  getInvoices: () => api.get<Invoice[]>('/invoices'),
  getInvoice: (id: string) => api.get<Invoice>(`/invoices/${id}`),
  createInvoice: (data: Partial<Invoice>) => api.post<Invoice>('/invoices', data),
  updateInvoice: (id: string, data: Partial<Invoice>) => api.put<Invoice>(`/invoices/${id}`, data),
  deleteInvoice: (id: string) => api.delete(`/invoices/${id}`),
};

export const authApi = {
  login: (credentials: { email: string; password: string }) => api.post('/auth/login', credentials),
  getCurrentUser: () => api.get<User>('/auth/me'),
};