import React from "react";
import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const WorkoutStats = ({ selectedExercises, exercisesData }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
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
        Add some more stats
      </Typography>
      <Box compotnent="ul">
        {selectedExercises.map((exerciseKey) => {
          const exercise = exercisesData.find((ex) => ex.key === exerciseKey);
          return (
            <Box key={exerciseKey}>
              {exercise
                ? exercise.label
                : `Exercise with key ${exerciseKey} not found`}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default WorkoutStats;
