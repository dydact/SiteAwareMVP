import { Analytics } from 'aws-amplify';
import { clientApi } from './api';

export const videoAnalysisService = {
  analyzeStream: async (streamId) => {
    try {
      // This is a placeholder for the actual video analysis logic
      // In a real implementation, this would likely call an external API or ML service
      const analysisResult = await mockVideoAnalysis(streamId);
      
      // Process the analysis results
      const events = processAnalysisResults(analysisResult);
      
      // Log events to Kinesis
      await logEventsToKinesis(events);
      
      return events;
    } catch (error) {
      console.error('Error analyzing video stream:', error);
      throw error;
    }
  },
};

async function mockVideoAnalysis(streamId) {
  // This is a mock function. In reality, this would be a call to your video analysis API
  return {
    streamId,
    timestamp: new Date().toISOString(),
    detectedFaces: ['face123', 'face456'],
    detectedActivities: ['sitting', 'talking'],
  };
}

async function processAnalysisResults(analysisResult) {
  const events = [];
  const clients = await clientApi.getAll();

  for (const faceId of analysisResult.detectedFaces) {
    const client = clients.find(c => c.faceId === faceId);
    if (client) {
      events.push({
        type: 'PRESENCE_DETECTED',
        clientId: client.id,
        timestamp: analysisResult.timestamp,
      });

      // Check if this is a clock-in or clock-out event
      const isScheduledNow = isClientScheduledNow(client, analysisResult.timestamp);
      if (isScheduledNow) {
        events.push({
          type: 'CLOCK_IN',
          clientId: client.id,
          timestamp: analysisResult.timestamp,
        });
      }

      // Check if the detected activities match the client's treatment plan
      for (const activity of analysisResult.detectedActivities) {
        if (isActivityInTreatmentPlan(client, activity)) {
          events.push({
            type: 'ACTIVITY_DETECTED',
            clientId: client.id,
            activityName: activity,
            timestamp: analysisResult.timestamp,
          });
        }
      }
    }
  }

  return events;
}

function isClientScheduledNow(client, timestamp) {
  const date = new Date(timestamp);
  const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
  const time = date.toTimeString().slice(0, 5); // HH:MM format

  return client.schedules.some(schedule => 
    schedule.days.includes(day) &&
    schedule.startTime <= time &&
    time <= schedule.endTime
  );
}

function isActivityInTreatmentPlan(client, activity) {
  return client.treatmentPlan.activities.some(a => a.name.toLowerCase() === activity.toLowerCase());
}

async function logEventsToKinesis(events) {
  for (const event of events) {
    await Analytics.record({
      streamName: import.meta.env.VITE_KINESIS_STREAM_NAME,
      data: event,
      partitionKey: 'partition-' + Date.now()
    }, 'AWSKinesis');
  }
}