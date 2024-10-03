import { defineData } from '@aws-amplify/cli-extensibility-helper';

const schema = `
  type Todo @model {
    id: ID!
    content: String!
  }
`;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'API_KEY',
  },
});

/**
 * Developer notes:
 * This file defines the data schema and configuration for your Amplify backend.
 * Modify the schema and options as needed for your project.
 */
