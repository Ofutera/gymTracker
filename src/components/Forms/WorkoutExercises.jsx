import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';


const WorkoutExercises = () => {
  
  const { handleSubmit, control, formState: { errors } } = useForm();
  const [chipData, setChipData] = useState([
    { key: 0, label: 'Leg extensions' },
    { key: 1, label: 'Leg press' },
    { key: 2, label: 'Rows' },
    { key: 3, label: 'Pushups' },
    { key: 4, label: 'Staggered squats' },
    { key: 5, label: 'Dips' },
    { key: 6, label: 'Staggered deadlifts' },
    { key: 7, label: 'Pulldown front' },
    { key: 8, label: 'Pulldown back' },
    { key: 9, label: 'Bench press' },
    { key: 10, label: 'Diamond pushups' },
    { key: 11, label: 'Shoulder pushup bar' },
    { key: 12, label: 'Cable cross' },
    { key: 13, label: 'Biceps curls' },
    { key: 14, label: 'Pullups' },
  ]);


const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

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
          What did you train?
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            p: 0.5,
            m: 0,
          }}
          component="ul"
        >
        {chipData.map((data) => {
          let icon;

          return (
            <ListItem key={data.key}>
              <Chip
                icon={<AddIcon fontSize="small" />}
                label={data.label}
              />
            </ListItem>
          );
        }     
        )}
        </Box>
      </Box>
    );
  };

export default WorkoutExercises;