import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControl from "@mui/material/FormControl";

const WorkoutDetails = ({ setLocationAndDate }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleDateAndLocation = (field, value) => {
    setLocationAndDate((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 3 }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Step 1 - Workout details
      </Typography>
      <Controller
        name="workoutLocation"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Location"
            onChange={(e) => {
              field.onChange(e);
              handleDateAndLocation("location", e.target.value);
            }}
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors.workoutLocation}
            helperText={
              errors.workoutLocation && errors.workoutLocation.message
            }
          />
        )}
      />
      <Controller
        name="workoutDate"
        control={control}
        defaultValue={null}
        rules={{ required: "Workout date is required" }}
        render={({ field }) => (
          <DatePicker
            {...field}
            label="Workout Date"
            onChange={(value) => {
              field.onChange(value);
              handleDateAndLocation("date", value);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                margin="normal"
                error={!!errors.workoutDate}
                helperText={
                  errors.workoutDate ? errors.workoutDate.message : ""
                }
              />
            )}
          />
        )}
      />
    </Box>
  );
};

export default WorkoutDetails;
