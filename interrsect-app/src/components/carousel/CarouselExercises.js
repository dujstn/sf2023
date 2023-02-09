import { Box, Button, TextField, Typography } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import db from '../../firebase';

async function submitData(day, index, input) {
  try {
    const docRef = await addDoc(collection(db, day), {
      exercise: index,
      summary: input,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export default function CarouselExercises({ day, num, ...other }) {
  const handleChange = (index, event) => {
    setIndex(index);
    setInput('');
  };
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const nums = [...Array(num).keys()];
  return (
    <>
      <Carousel onChange={handleChange} emulateTouch showStatus={false} useKeyboardArrows>
        {nums.map((num) => (
          <Box component="img" src={`/assets/images/${day}/${num}.png`} sx={{ maxWidth: 'sm' }} />
        ))}
      </Carousel>
      <TextField
        fullWidth
        variant="filled"
        label="Summarize..."
        value={input}
        onChange={(update) => setInput(update.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => {
          submitData(day, index, input);
          setInput('');
        }}
      >
        SUBMIT
      </Button>
    </>
  );
}
