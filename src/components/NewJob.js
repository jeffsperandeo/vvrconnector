import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const NewJob = ({ open, onClose }) => {
  const [jobDetails, setJobDetails] = useState({
    customer: '',
    car: '',
    status: 'In Progress', // default status for a new job
  });

  const handleSubmit = () => {
    console.log('New Job Details:', jobDetails);
    onClose(); // Close the dialog upon submission
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Job</DialogTitle>
      <DialogContent>
        <TextField
          label="Customer Name"
          fullWidth
          margin="normal"
          value={jobDetails.customer}
          onChange={(e) => setJobDetails({ ...jobDetails, customer: e.target.value })}
        />
        <TextField
          label="Car Model"
          fullWidth
          margin="normal"
          value={jobDetails.car}
          onChange={(e) => setJobDetails({ ...jobDetails, car: e.target.value })}
        />
        {/* Add other fields as necessary */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewJob;
