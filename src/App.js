import React from 'react';
import './App.css';
import Home from '../src/pages/Home/Home'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     <Home />
     </LocalizationProvider>
  );
}

export default App;


