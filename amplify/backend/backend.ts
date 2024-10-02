import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import { api } from './api/resource';

// Developer note: This file imports the backend resources.
// Since Amplify CLI manages the backend stack, you don't need to define a custom backend here.
// Instead, use override files to customize resources.