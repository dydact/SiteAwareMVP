import { defineBackend, Backend } from '@aws-amplify/cli-extensibility-helper';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { api } from './api/resource';

interface BackendResources {
  auth: typeof auth;
  data: typeof data;
  api: typeof api;
}

export const backend: Backend<BackendResources> = defineBackend({
  auth,
  data,
  api,
});

/**
 * Developer notes:
 * This is the main entry point for your Amplify backend configuration.
 * It combines auth, data, and api resources into a single backend definition.
 */