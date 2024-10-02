import { S3Client } from '@aws-sdk/client-s3';

export const s3Config = {
  region: import.meta.env.VITE_S3_REGION,
  accessPointAlias: import.meta.env.VITE_S3_ACCESS_POINT_ALIAS,
};

export const s3Client = new S3Client({
  region: s3Config.region,
  endpoint: `https://${s3Config.accessPointAlias}.s3-accesspoint.${s3Config.region}.amazonaws.com`,
});