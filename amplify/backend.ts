import { AmplifyBackend, AmplifyBackendProps } from '@aws-amplify/backend';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { auth } from './auth/resource';
import { data } from './data/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
export class Backend extends AmplifyBackend {
  constructor(scope: Construct, props?: Partial<AmplifyBackendProps>) {
    super(scope, props);

    // Retrieve the environment from context or default to 'dev'
    const app = this.node.root as cdk.App;
    const env = app.node.tryGetContext('env') || 'dev';

    // Create your custom stack
    new SiteAwareStack(this, `SiteAwareStack-${env}`, {
      env: { 
        account: process.env.CDK_DEFAULT_ACCOUNT, 
        region: process.env.CDK_DEFAULT_REGION 
      },
      // Add any other props needed for your SiteAwareStack
    });

    // ... existing code ...
  }
}

// Define your SiteAwareStack if it's not already defined
export class SiteAwareStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const env = this.node.tryGetContext('env') || 'dev';

    new cdk.aws_logs.LogGroup(this, 'SiteAwareLogGroup', {
      logGroupName: `/aws/lambda/siteaware-${env}-log-group`,
      retention: cdk.aws_logs.RetentionDays.TWO_WEEKS
    });

    // Add any other resources specific to your SiteAware stack here
  }
}

const backend = defineBackend({
  auth,
  data,
});

const app = backend.createStack(cdk.App);
const env = app.node.tryGetContext('env') || 'dev';

new SiteAwareStack(app, `SiteAwareStack-${env}`, {
  env: { 
    account: process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEFAULT_REGION 
  },
});
