
const { Workout } = require('../models');

const workoutData = [
  {
    workout_name: 'Bench press',
    workout_image: 'bench-press.jpeg',
    workout_url: 'https://www.youtube.com/watch?v=Qjxrp9Hwv_Q',
    weight: 100,
    reps: 12 ,
    sets: 3,
    category_id: 1
  },

  {
    workout_name: 'Overhead Press',
    workout_image: 'shoulder-press.webp',
    workout_url: 'https://www.youtube.com/watch?v=8E4oWpi0RkA',
    weight: 50,
    reps : 10 ,
    sets: 3,
    category_id: 1,
  },
  {
    workout_name: 'Tricep Press Down',
    workout_image: 'tricep-press-down.jpg',
    workout_url: 'https://www.youtube.com/watch?v=HIKzvHkibWc',
    weight:80,
    reps : 10 ,
    sets: 3,
    category_id: 1,
  },
  {
    workout_name: 'Barbell Squat',
    workout_image: 'barbell-squat.jpeg',
    workout_url: 'https://www.youtube.com/watch?v=tVB1q8zkP3o',
    weight:120,
    reps : 12,
    sets: 3,
    category_id: 1,
  },
  {
    workout_name: 'Bicep Curls',
    workout_image: 'bicep-curls.jpeg',
    workout_url: 'https://www.youtube.com/watch?v=3OZ2MT_5r3Q',
    weight: 45,
    reps : 10 ,
    sets: 4,
    category_id: 1,
  },
  {
    workout_name: 'Deadlifts',
    workout_image: 'deadlifts.jpg',
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/10/hammer-curl/'
,
    weight :125,
    reps : 8,
    sets: 3,
    category_id: 1,
  },
  {
    workout_name: 'Bench Press',
    workout_image: 'bench-press.jpeg',
    workout_url: 'https://www.youtube.com/watch?v=Qjxrp9Hwv_Q'
,
    weight: 150,
    reps : 8,
    sets: 3,
    category_id: 2,
  },
  {
    workout_name: 'Face-pulls',
    workout_image: 'face-pulls.jpeg',
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/11/back-squat/'
,
    weight:40,
    reps : 10 ,
    sets: 4,
    category_id: 2,
  },
  {
    workout_name: 'Deadlifts',
    workout_image: 'deadlifts.jpg',
    workout_url: 'https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/366/bulgarian-split-squat/'
,
    weight: 125,
    reps : 8,
    sets: 3,
    category_id: 2,
  },
  {
    workout_name: 'Overhead press',
    workout_image: 'overhead-press.jpeg',
    workout_url: 'https://www.youtube.com/watch?v=8E4oWpi0RkA'
,
    weight: 90,
    reps : 6 ,
    sets: 3,
    category_id: 2,
  },
  {
    workout_name: 'Bicep Curls',
    workout_image: 'bicep-curls.jpeg',
    workout_url: 'https://www.youtube.com/watch?v=3OZ2MT_5r3Q'
,
    weight: 45,
    reps : 10 ,
    sets: 3,
    category_id: 2,
  },
  {
    workout_name: 'Bent over rows',
    workout_image: 'bent-over-rows.jpeg',
    workout_url: 'https://www.youtube.com/watch?v=-xlBxIMqh3A',
    weight:100,
    reps : 10 ,
    sets: 3,
    category_id: 2,
  },
  {
    workout_name: 'Barbell Squat',
    workout_image: 'barbell-squat.jpeg',
    workout_url: 'https://www.youtube.com/watch?v=tVB1q8zkP3o',
    weight:125,
    reps : 10 ,
    sets: 3,
    category_id: 3,
  },
  {
    workout_name: 'Lunges',
    workout_image: 'lunges.jpeg',
    workout_url: 'https://www.youtube.com/watch?v=Wb8Yr3Nx7dE',
    weight:30,
    reps : 10 ,
    sets: 2,
    category_id: 3,
  },
  {
    workout_name: 'Calf-Raises',
    workout_image: 'calf-raises.jpeg',
    workout_url: 'https://www.youtube.com/watch?v=MAMzF7iZNkc',
    weight: 35,
    reps : 15 ,
    sets: 3,
    category_id: 3,
  },
  {
    workout_name: 'Glute Raises',
    workout_image: 'glute-raises.webp',
    workout_url: 'https://www.youtube.com/watch?v=Fk1OfkMmVt4',
    weight: 70,
    reps : 15,
    sets: 3,
    category_id: 3,
  },
  {
    workout_name: 'Leg curls',
    workout_image: 'leg-curls.png',
    workout_url: 'https://www.youtube.com/watch?v=jxctD6fL_FQ',
    weight : 45,
    reps : 12 ,
    sets: 3,
    category_id: 3,
  },
  {
    workout_name: 'Leg extensions',
    workout_image: 'leg-extensions.jpeg',
    workout_url: 'https://www.youtube.com/watch?v=yR_LqZYSIgM',
    weight: 50,
    reps : 10,
    sets: 3,
    category_id: 3,
  },
  
];

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;