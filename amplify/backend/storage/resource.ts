import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export function storage(stack: cdk.Stack, id: string) {
  // Example: Creating an S3 bucket
  new s3.Bucket(stack, id, {
    // ...your S3 bucket configuration
  });
}
