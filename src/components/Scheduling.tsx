import React from 'react';
import { Schedule } from '../types';

interface SchedulingProps {
  schedules?: Schedule[];
}

const Scheduling: React.FC<SchedulingProps> = ({ schedules = [] }) => {
  return (
    <div>
      <h2>Scheduling</h2>
      <ul>
        {schedules.map(schedule => (
          <li key={schedule.id}>
            {schedule.startTime} - {schedule.endTime}: {schedule.days.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scheduling;