import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { api } from './api/resource';

/**
 * Define your Amplify backend
 * @see https://docs.amplify.aws/gen2/build-a-backend/
 */
export const backend = defineBackend({
  auth,
  data,
  api,
});

/**
 * Developer notes:
 * This file defines the main Amplify backend configuration.
 * It imports and combines various resources (auth, data, api) to create a complete backend setup.
 * Modify this file to add or remove backend resources as needed for your project.
 */
