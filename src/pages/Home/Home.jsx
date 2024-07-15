import * as React from 'react';
import Header from '../../../src/components/Header/Header'
import AddWorkout from '../../../src/components/Forms/AddWorkout'
// import WorkoutDetails from '../../components/Forms/WorkoutDetails'
// import WorkoutExercises from '../../components/Forms/WorkoutExercises'

export default function Home() {
  return (
    <>
    <Header />
    <AddWorkout />
    {/* <WorkoutDetails />
    <WorkoutExercises /> */}
    </>
  );
}
