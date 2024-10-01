export const env = import.meta.env.VITE_ENVIRONMENT || 'dev'; // For Vite

// If you're using Create React App or another setup
// export const env = process.env.REACT_APP_ENV || 'dev';

export const API_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
export const IS_PRODUCTION = import.meta.env.PROD;