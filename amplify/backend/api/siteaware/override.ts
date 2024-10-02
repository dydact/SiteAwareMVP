import { AmplifyApiGraphqlResourceStackTemplate } from '@aws-amplify/cli-extensibility-helper';
import { App, Stack } from 'aws-cdk-lib';
import { aws_logs as logs } from 'aws-cdk-lib';

export function override(resources: AmplifyApiGraphqlResourceStackTemplate) {
  const env = resources.props.env || 'dev';

  // Create a new Log Group with the environment name included
  new logs.LogGroup(resources.stack, 'SiteAwareLogGroup', {
    logGroupName: `/aws/lambda/siteaware-${env}-log-group`,
    retention: logs.RetentionDays.TWO_WEEKS,
  });

  // Developer note:
  // This override adds a CloudWatch Log Group with a name that includes the environment.
  // This helps prevent naming conflicts across different environments.
}

