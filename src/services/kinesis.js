import { Analytics } from 'aws-amplify';

const env = import.meta.env.VITE_ENVIRONMENT || 'dev'; // For Vite

export const kinesisService = {
  recordEvent: async (streamName, data) => {
    try {
      await Analytics.record(
        {
          streamName: `${streamName}-${env}`, // Stream name with environment suffix
          data: data,
          partitionKey: 'partition-' + Date.now(),
        },
        'AWSKinesis'
      );
      console.log('Successfully recorded event to Kinesis');
    } catch (error) {
      console.error('Error recording event to Kinesis:', error);
      throw error;
    }
  },

  // Add more Kinesis-related functions as needed
}