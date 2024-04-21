// CurrentJobs.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

// Sample data for current jobs
const sampleJobs = [
  { id: 1, customer: 'John Doe', car: 'Honda Civic', status: 'In Progress' },
  { id: 2, customer: 'Jane Smith', car: 'Toyota Corolla', status: 'Awaiting Parts' },
  { id: 3, customer: 'Emily Johnson', car: 'Ford Focus', status: 'Service Completed' },
  { id: 4, customer: 'Michael Brown', car: 'Chevrolet Malibu', status: 'In Progress' },
  { id: 5, customer: 'Sarah Davis', car: 'Nissan Sentra', status: 'Inspection' },
];

const CurrentJobs = () => {
  return (
    <div>
      {sampleJobs.map((job) => (
        <Card key={job.id} style={{ margin: '16px 0' }}>
          <CardContent>
            <Typography variant="h5">Job for {job.customer}</Typography>
            <Typography color="textSecondary">{job.car}</Typography>
            <Typography color="textSecondary">Status: {job.status}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CurrentJobs;
