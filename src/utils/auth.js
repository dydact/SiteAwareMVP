export const setToken = (token) => {
  localStorage.setItem('token', token)
}

export const getToken = () => {
  return localStorage.getItem('token')
}

export const removeToken = () => {
  localStorage.removeItem('token')
}

export const isAuthenticated = () => {
  const token = getToken()
  return !!token
}

import { Auth } from 'aws-amplify';

export async function signUp(username, password, email, name) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
        name,
      },
    });
    return user;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
}

export async function signIn(username, password) {
  try {
    const user = await Auth.signIn(username, password);
    return user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
}

// Add more auth-related utility functions as needed

// Developer note:
// This file contains utility functions for common authentication operations.
// These functions wrap the Amplify Auth methods to provide a consistent interface
// and centralized error handling for auth operations throughout the application.