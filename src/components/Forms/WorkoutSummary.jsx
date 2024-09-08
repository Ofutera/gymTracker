import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";

const WorkoutSummary = ({
  locationAndDate,
  selectedExercises,
  exercisesData,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const formattedDate = locationAndDate.date
    ? dayjs(locationAndDate.date).format("YYYY-MM-DD")
    : "No date set";

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(formattedDate);
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 3 }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Your workout summary
      </Typography>
      <Box>
        <Typography>Location & Date:</Typography>
        <Typography>
          {locationAndDate.location} | {formattedDate}
        </Typography>
      </Box>
      <Box compotnent="ul">
        {selectedExercises.length > 0 ? (
          <Box>
            <Typography>Exercises: {selectedExercises.length}</Typography>
            <Typography>Rounds:</Typography>
            <Typography>Reps:</Typography>
          </Box>
        ) : (
          <Typography>
            To add some more stats, select at least one exercise in the previous
            step.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default WorkoutSummary;
