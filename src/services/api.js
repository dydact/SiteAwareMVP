import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_AWS_API_ENDPOINT;

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

// Dummy data generator functions
const generateDummyRevenueData = (startDate, endDate) => {
  const data = [];
  let currentDate = new Date(startDate);
  while (currentDate <= new Date(endDate)) {
    data.push({
      date: currentDate.toISOString().split('T')[0],
      amount: Math.random() * 10000,
      clientName: `Client ${Math.floor(Math.random() * 5) + 1}`,
      serviceName: `Service ${Math.floor(Math.random() * 3) + 1}`,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return data;
};

const generateDummyBillingData = (startDate, endDate) => {
  return Array(10).fill().map(() => ({
    id: Math.random().toString(36).substr(2, 9),
    clientName: `Client ${Math.floor(Math.random() * 5) + 1}`,
    amount: Math.random() * 5000,
    date: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())).toISOString().split('T')[0],
  }));
};

const generateDummySchedulingData = (startDate, endDate) => {
  return Array(20).fill().map(() => ({
    id: Math.random().toString(36).substr(2, 9),
    employeeName: `Employee ${Math.floor(Math.random() * 10) + 1}`,
    hours: Math.floor(Math.random() * 8) + 1,
    hourlyRate: Math.floor(Math.random() * 20) + 15,
    date: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())).toISOString().split('T')[0],
  }));
};

// API functions
export const organizationApi = {
  getOrganizations: () => api.get('/organizations'),
  getOrganization: (id) => api.get(`/organizations/${id}`),
  createOrganization: (data) => api.post('/organizations', data),
  updateOrganization: (id, data) => api.put(`/organizations/${id}`, data),
  deleteOrganization: (id) => api.delete(`/organizations/${id}`),
};

export const userApi = {
  getUsers: () => api.get('/users'),
  getUser: (id) => api.get(`/users/${id}`),
  createUser: (data) => api.post('/users', data),
  updateUser: (id, data) => api.put(`/users/${id}`, data),
  deleteUser: (id) => api.delete(`/users/${id}`),
  getUserRole: (id) => api.get(`/users/${id}/role`),
  updateUserRole: (id, roleId) => api.put(`/users/${id}/role`, { roleId }),
};

export const roleApi = {
  getRoles: () => api.get('/roles'),
  getRole: (id) => api.get(`/roles/${id}`),
  createRole: (data) => api.post('/roles', data),
  updateRole: (id, data) => api.put(`/roles/${id}`, data),
  deleteRole: (id) => api.delete(`/roles/${id}`),
};

export const privilegeApi = {
  getPrivileges: (organizationId) => api.get(`/organizations/${organizationId}/privileges`),
  updatePrivilege: (organizationId, roleId, resource, action, allowed) => 
    api.put(`/organizations/${organizationId}/privileges`, { roleId, resource, action, allowed }),
};

export const clientApi = {
  getClients: () => Promise.resolve(Array(5).fill().map((_, i) => ({ id: i + 1, name: `Client ${i + 1}` }))),
  getClient: (id) => api.get(`/clients/${id}`),
  createClient: (data) => api.post('/clients', data),
  updateClient: (id, data) => api.put(`/clients/${id}`, data),
  deleteClient: (id) => api.delete(`/clients/${id}`),
};

export const projectApi = {
  getProjects: () => api.get('/projects'),
  getProject: (id) => api.get(`/projects/${id}`),
  createProject: (data) => api.post('/projects', data),
  updateProject: (id, data) => api.put(`/projects/${id}`, data),
  deleteProject: (id) => api.delete(`/projects/${id}`),
};

export const timeEntryApi = {
  getTimeEntries: () => api.get('/time-entries'),
  getTimeEntry: (id) => api.get(`/time-entries/${id}`),
  createTimeEntry: (data) => api.post('/time-entries', data),
  updateTimeEntry: (id, data) => api.put(`/time-entries/${id}`, data),
  deleteTimeEntry: (id) => api.delete(`/time-entries/${id}`),
};

export const invoiceApi = {
  getInvoices: () => Promise.resolve(generateDummyBillingData(new Date(), new Date(new Date().setDate(new Date().getDate() + 30)))),
  createInvoice: (data) => Promise.resolve({ id: Math.random().toString(36).substr(2, 9), ...data }),
};

export const authApi = {
  getCurrentUser: () => api.get('/api/current-user'),
  // Other auth methods...
};

export const analyticsApi = {
  // Add analytics-related functions here
};

export const billingApi = {
  getBillingData: (startDate, endDate) => 
    Promise.resolve(generateDummyBillingData(new Date(startDate), new Date(endDate))),
};

export const chatApi = {
  // Add chat-related functions here
};

export const payrollApi = {
  getPayrollSummary: (startDate, endDate) => api.get('/payroll/summary', { params: { startDate, endDate } }),
  exportToQuickBooks: (payrollData) => api.post('/payroll/export/quickbooks', payrollData),
  exportToXero: (payrollData) => api.post('/payroll/export/xero', payrollData),
  exportToSage: (payrollData) => api.post('/payroll/export/sage', payrollData),
};

export const medicaidApi = {
  getBillingData: () => Promise.resolve(generateDummyBillingData(new Date(), new Date(new Date().setDate(new Date().getDate() + 30)))),
  submitBilling: (data) => Promise.resolve({ success: true, message: 'Billing submitted successfully' }),
};

export const serviceApi = {
  getServices: () => Promise.resolve(Array(3).fill().map((_, i) => ({ id: i + 1, name: `Service ${i + 1}` }))),
};

export const documentationApi = {
  getDocumentation: (clientId, serviceId, date) => 
    Promise.resolve({ isComplete: Math.random() > 0.3 }),
};

export const revenueApi = {
  getRevenueData: (startDate, endDate, filter) => 
    Promise.resolve(generateDummyRevenueData(startDate, endDate)),
  parseRemittanceFile: (file) => 
    Promise.resolve(generateDummyRevenueData(new Date(), new Date(new Date().setDate(new Date().getDate() + 30)))),
};

export const schedulingApi = {
  getSchedulingData: (startDate, endDate) => 
    Promise.resolve(generateDummySchedulingData(new Date(startDate), new Date(endDate))),
};


// Export individual functions
export const getClients = clientApi.getClients;
export const createClient = clientApi.createClient;
export const getJobs = projectApi.getProjects;
export const createJob = projectApi.createProject;
export const getPricing = () => api.get('/pricing');
export const updatePricing = (data) => api.put('/pricing', data);
export const register = userApi.createUser;
export const getUsers = userApi.getUsers;
export const createUser = userApi.createUser;
export const getVideoStreams = () => api.get('/video-streams');
export const analyzeVideo = (data) => api.post('/analyze-video', data);