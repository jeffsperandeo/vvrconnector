import React from 'react';
import CurrentJobs from './CurrentJobs';

const Home = () => {
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Welcome to the Mechanic Dashboard
      </Typography>
      <CurrentJobs />
    </div>
  );
};

export default Home;
