import { Stack } from 'aws-cdk-lib';
import { defineBackend, Backend } from '@aws-amplify/cli-extensibility-helper';

interface BackendResources {
  auth: any;
  data: any;
  api: any;
}

export const override = (stack: Stack, backend: Backend<BackendResources>) => {
  // Your custom stack overrides
};

/**
 * Developer notes:
 * This file allows you to override the default CloudFormation stack configuration.
 * Use this to add custom resources or modify existing ones.
 */