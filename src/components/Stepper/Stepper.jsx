import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WorkoutDetails from "../Forms/WorkoutDetails";
import WorkoutExercises from "../Forms/WorkoutExercises";
import WorkoutStats from "../Forms/WorkoutStats";

const STEPS = ["Workout details", "Workout exercises", "Summary"];
const EXERCISES_DATA = [
  { key: 0, label: "Leg extensions" },
  { key: 1, label: "Leg press" },
  { key: 2, label: "Rows" },
  { key: 3, label: "Pushups" },
  { key: 4, label: "Staggered squats" },
  { key: 5, label: "Dips" },
  { key: 6, label: "Staggered deadlifts" },
  { key: 7, label: "Pulldown front" },
  { key: 8, label: "Pulldown back" },
  { key: 9, label: "Bench press" },
  { key: 10, label: "Diamond pushups" },
  { key: 11, label: "Shoulder pushup bar" },
  { key: 12, label: "Cable cross" },
  { key: 13, label: "Biceps curls" },
  { key: 14, label: "Pullups" },
];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [selectedExercises, setSelectedExercises] = useState([]);

  const totalSteps = () => {
    return STEPS.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          STEPS.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {STEPS.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <Box>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {activeStep === 0 && <WorkoutDetails />}
              {activeStep === 1 && (
                <WorkoutExercises
                  selectedExercises={selectedExercises}
                  setSelectedExercises={setSelectedExercises}
                  exercisesData={EXERCISES_DATA}
                />
              )}
              {activeStep === 2 && (
                <WorkoutStats
                  selectedExercises={selectedExercises}
                  exercisesData={EXERCISES_DATA}
                />
              )}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== STEPS.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>
          </Box>
        )}
      </div>
    </Box>
  );
}
