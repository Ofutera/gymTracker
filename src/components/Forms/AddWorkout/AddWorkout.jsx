import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Typography , Select, MenuItem, InputLabel} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';


const AddWorkout = () => {
  
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
          New Workout
        </Typography>
        <Controller
          name="workoutName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Workout Name"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.workoutName}
              helperText={errors.workoutName && errors.workoutName.message}
            />
          )}
        />
        <Controller
          name="workoutDate"
          control={control}
          defaultValue={null}
          rules={{ required: 'Workout date is required' }}
          render={({ field }) => (
            <DatePicker
              {...field}
              label="Workout Date"
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  margin="normal"
                  error={!!errors.workoutDate}
                  helperText={errors.workoutDate ? errors.workoutDate.message : ''}
                />
              )}
            />
          )}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Next
        </Button>
      </Box>
  );
};

export default AddWorkout;

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