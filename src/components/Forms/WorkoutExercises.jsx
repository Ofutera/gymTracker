import React from "react";
import { useForm } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import AddIcon from "@mui/icons-material/Add";

const WorkoutExercises = ({
  selectedExercises,
  setSelectedExercises,
  exercisesData,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleSelectExercise = (key) => {
    setSelectedExercises((prevSelectedExercises) =>
      prevSelectedExercises.includes(key)
        ? prevSelectedExercises.filter((selectedKey) => selectedKey !== key)
        : [...prevSelectedExercises, key]
    );
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 3 }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        What did you train?
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {exercisesData.map((data) => {
          const isSelected = selectedExercises.includes(data.key);

          return (
            <ListItem key={data.key}>
              <Chip
                icon={<AddIcon fontSize="small" />}
                label={data.label}
                onClick={() => handleSelectExercise(data.key)}
                color={isSelected ? "primary" : "default"}
                variant={isSelected ? "filled" : "outlined"}
              />
            </ListItem>
          );
        })}
      </Box>
    </Box>
  );
};

export default WorkoutExercises;
