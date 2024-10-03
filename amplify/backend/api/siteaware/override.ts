import { AmplifyApiGraphQlResourceStackTemplate } from '@aws-amplify/cli-extensibility-helper';
import * as cdk from 'aws-cdk-lib';

export function override(
  resources: AmplifyApiGraphQlResourceStackTemplate
) {
  const stack = resources as unknown as cdk.Stack;
  const env = stack.node.tryGetContext('env') || 'dev';

  // Create a new Log Group with the environment name included
  new cdk.aws_logs.LogGroup(stack, 'SiteAwareLogGroup', {
    logGroupName: `/aws/lambda/siteaware-${env}-log-group`,
    retention: cdk.aws_logs.RetentionDays.TWO_WEEKS,
  });

  // Developer note:
  // This override adds a CloudWatch Log Group with a name that includes the environment.
  // This helps prevent naming conflicts across different environments.
}

