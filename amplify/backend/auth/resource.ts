import * as cdk from 'aws-cdk-lib';

export function auth(stack: cdk.Stack, id: string) {
  // Example: Adding a custom attribute to the user pool
  const userPool = new cdk.aws_cognito.UserPool(stack, id, {
    // ...standard Cognito UserPool configuration
    customAttributes: {
      // Example Custom Attribute
      'company': new cdk.aws_cognito.StringAttribute({ mutable: true }),
    },
  });

  return userPool; // Return the resource if you need to reference it elsewhere
}
