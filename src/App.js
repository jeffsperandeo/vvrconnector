import React, { useState } from 'react';
import './App.css';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Switch,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Card,
  CardContent,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

// Sample jobs data
const sampleJobs = [
  { id: 1, customer: 'John Doe', car: 'Honda Civic', status: 'In Progress' },
  { id: 2, customer: 'Jane Smith', car: 'Toyota Corolla', status: 'Awaiting Parts' },
  { id: 3, customer: 'Emily Johnson', car: 'Ford Focus', status: 'Service Completed' },
  { id: 4, customer: 'Michael Brown', car: 'Chevrolet Malibu', status: 'In Progress' },
  { id: 5, customer: 'Sarah Davis', car: 'Nissan Sentra', status: 'Inspection' },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState('');

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#ebe1cb' : '#879773',
      },
      background: {
        default: darkMode ? '#333333' : '#ebe1cb',
        paper: darkMode ? '#424242' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
        secondary: darkMode ? '#dddddd' : '#555555',
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const toggleNewJobDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const startListening = () => {
    setIsListening(true);
    console.log('Listening for speech...');
    setTranscription('Transcribing speech...');
  };

  const stopListening = () => {
    setIsListening(false);
    console.log('Stopped listening.');
    setTranscription('');
  };

  const handleSubmitNewJob = () => {
    console.log('New job submitted');
    toggleNewJobDialog();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Mechanic Dashboard
            </Typography>
            <Typography component="div">
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange} />
          </Toolbar>
        </AppBar>

        <Typography variant="h4" component="h1" gutterBottom>
          Current Jobs
        </Typography>
        {sampleJobs.map((job) => (
          <Card key={job.id} style={{ marginBottom: 16 }}>
            <CardContent>
              <Typography variant="h5">{job.customer}</Typography>
              <Typography color="textSecondary">{job.car}</Typography>
              <Typography color="textSecondary">{job.status}</Typography>
            </CardContent>
          </Card>
        ))}

        <Button variant="contained" color="primary" onClick={toggleNewJobDialog} style={{ marginBottom: 16 }}>
          Start New Job
        </Button>

        {isListening ? (
          <IconButton onClick={stopListening} color="secondary" style={{ marginBottom: 16 }}>
            <MicOffIcon />
          </IconButton>
        ) : (
          <IconButton onClick={startListening} color="primary" style={{ marginBottom: 16 }}>
            <MicIcon />
          </IconButton>
        )}

        <Typography variant="body1" style={{ marginBottom: 16 }}>
          {transcription}
        </Typography>

        <Dialog open={isDialogOpen} onClose={toggleNewJobDialog}>
          <DialogTitle>Add New Job</DialogTitle>
          <DialogContent>
            <TextField autoFocus margin="dense" label="Job Title" fullWidth variant="standard" />
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleNewJobDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmitNewJob} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
}

export default App;
