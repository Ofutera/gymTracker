import React from "react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

// TODO:
// - make section for each exercise collapsible,
// - handle user input data

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
        {selectedExercises.length > 0 ? (
          selectedExercises.map((exerciseKey) => {
            const exercise = exercisesData.find((ex) => ex.key === exerciseKey);
            return (
              <Box key={exerciseKey}>
                {exercise && (
                  <>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {exercise.label}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          flexBasis: "50%",
                        }}
                      >
                        round 1:
                      </Typography>
                      <Box
                        sx={{
                          width: "fit-content",
                          display: "flex",
                          justifyContent: "flex-end",
                          flexBasis: "50%",
                        }}
                      >
                        <TextField
                          size="small"
                          label="reps"
                          id="outlined-start-adornment"
                          sx={{ m: 1 }}
                          InputLabelProps={{
                            sx: {
                              fontSize: "0.9rem", // Adjust the font size here
                            },
                          }}
                        />
                        <TextField
                          size="small"
                          id="outlined-start-adornment"
                          sx={{ m: 1 }}
                          InputLabelProps={{
                            sx: {
                              fontSize: "0.9rem", // Adjust the font size here
                            },
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">kg</InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          flexBasis: "50%",
                        }}
                      >
                        round 2:
                      </Typography>
                      <Box
                        sx={{
                          width: "fit-content",
                          display: "flex",
                          justifyContent: "flex-end",
                          flexBasis: "50%",
                        }}
                      >
                        <TextField
                          size="small"
                          label="reps"
                          id="outlined-start-adornment"
                          sx={{ m: 1 }}
                          InputLabelProps={{
                            sx: {
                              fontSize: "0.9rem", // Adjust the font size here
                            },
                          }}
                        />
                        <TextField
                          size="small"
                          id="outlined-start-adornment"
                          sx={{ m: 1 }}
                          InputLabelProps={{
                            sx: {
                              fontSize: "0.9rem", // Adjust the font size here
                            },
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">kg</InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          flexBasis: "50%",
                        }}
                      >
                        round 3:
                      </Typography>
                      <Box
                        sx={{
                          width: "fit-content",
                          display: "flex",
                          justifyContent: "flex-end",
                          flexBasis: "50%",
                        }}
                      >
                        <TextField
                          size="small"
                          label="reps"
                          id="outlined-start-adornment"
                          sx={{ m: 1 }}
                          InputLabelProps={{
                            sx: {
                              fontSize: "0.9rem", // Adjust the font size here
                            },
                          }}
                        />
                        <TextField
                          size="small"
                          id="outlined-start-adornment"
                          sx={{ m: 1 }}
                          InputLabelProps={{
                            sx: {
                              fontSize: "0.9rem", // Adjust the font size here
                            },
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">kg</InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          flexBasis: "50%",
                        }}
                      >
                        round 4:
                      </Typography>
                      <Box
                        sx={{
                          width: "fit-content",
                          display: "flex",
                          justifyContent: "flex-end",
                          flexBasis: "50%",
                        }}
                      >
                        <TextField
                          size="small"
                          label="reps"
                          id="outlined-start-adornment"
                          sx={{ m: 1 }}
                          InputLabelProps={{
                            sx: {
                              fontSize: "0.9rem", // Adjust the font size here
                            },
                          }}
                        />
                        <TextField
                          size="small"
                          id="outlined-start-adornment"
                          sx={{ m: 1 }}
                          InputLabelProps={{
                            sx: {
                              fontSize: "0.9rem", // Adjust the font size here
                            },
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">kg</InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            );
          })
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

export default WorkoutStats;
