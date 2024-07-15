import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Typography , Select, MenuItem, InputLabel} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';


const WorkoutExercises = () => {
  
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };


  return (
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 3 }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Step 2 - Workout exercises
        </Typography>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Exercise</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Exercise"
              // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
      </Box>
  );
};

export default WorkoutExercises;

// move to step 2
{/* <FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Exercise</InputLabel>
<Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  // value={age}
  label="Exercise"
  // onChange={handleChange}
>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Select>
</FormControl> */}