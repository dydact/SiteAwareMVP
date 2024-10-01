import React, { useState } from 'react';

interface TimeEntry {
  id: string;
  task: string;
  duration: number;
}

interface TimeTrackingProps {
  entries?: TimeEntry[];
}

const TimeTracking: React.FC<TimeTrackingProps> = ({ entries = [] }) => {
  const [task, setTask] = useState('');
  const [duration, setDuration] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle time entry submission
  };

  return (
    <div>
      <h2>Time Tracking</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task"
          required
        />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          placeholder="Duration (minutes)"
          required
        />
        <button type="submit">Add Entry</button>
      </form>
      <ul>
        {entries.map(entry => (
          <li key={entry.id}>{entry.task}: {entry.duration} minutes</li>
        ))}
      </ul>
    </div>
  );
};

export default TimeTracking;