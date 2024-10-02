import { PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { s3Client, s3Config } from '../config/s3Config';

export const uploadFile = async (key: string, body: Buffer | Blob | ReadableStream) => {
  const command = new PutObjectCommand({
    Bucket: s3Config.accessPointAlias,
    Key: key,
    Body: body,
  });

  try {
    const response = await s3Client.send(command);
    return response;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

export const getFile = async (key: string) => {
  const command = new GetObjectCommand({
    Bucket: s3Config.accessPointAlias,
    Key: key,
  });

  try {
    const response = await s3Client.send(command);
    return response.Body;
  } catch (error) {
    console.error('Error getting file:', error);
    throw error;
  }
};