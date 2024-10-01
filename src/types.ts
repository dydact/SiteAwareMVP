export interface Client {
  name: string;
  treatmentStartDate: string;
  progressTimeline: ProgressItem[];
}

export interface ProgressItem {
  status: 'completed' | 'in_progress' | 'pending';
  description: string;
}

export interface TreatmentPlan {
  id: string;
  activities: Activity[];
}

export interface Activity {
  id: string;
  name: string;
  description: string;
}

export interface Schedule {
  id: string;
  startTime: string;
  endTime: string;
  days: string[]; // e.g., ['Monday', 'Wednesday', 'Friday']
}

// Define other interfaces for Organization, Job, etc.