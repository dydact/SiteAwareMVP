import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { storage } from './storage/resource';
import { api } from './api/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  storage,
  api,
  data,
});

export default backend;
