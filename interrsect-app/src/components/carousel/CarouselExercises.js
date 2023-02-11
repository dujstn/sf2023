import { Box, Button, Container, TextField, Typography, Alert } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import db from '../../firebase';

export default function CarouselExercises({ day, num, ...other }) {
  async function submitData(day, index, input) {
    try {
      const docRef = await addDoc(collection(db, day), {
        exercise: index,
        summary: input,
      });
      console.log('Document written with ID: ', docRef.id);
      setSuccess(true);
    } catch (e) {
      console.error('Error adding document: ', e);
      setSuccess(false);
    }
  }
  const handleChange = (index, event) => {
    setIndex(index);
    setInput('');
  };
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);
  const nums = [...Array(num).keys()];
  return (
    <>
      <Carousel onChange={handleChange} emulateTouch showStatus={false} useKeyboardArrows showThumbs={false}>
        {nums.map((num) => (
          <Box component="img" src={`/assets/images/${day}/${num}.png`} sx={{ maxWidth: 'sm' }} />
        ))}
      </Carousel>
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          fullWidth
          multiline
          variant="filled"
          label="Summarize..."
          value={input}
          onChange={(update) => {
            setInput(update.target.value);
            setLoading(false);
          }}
        />
        <Button
          sx={{ my: 2 }}
          variant="contained"
          onClick={() => {
            setLoading(false);
            submitData(day, index, input);
            setInput('');
            setLoading(true);
          }}
        >
          SUBMIT
        </Button>
        {loading ? (
          <Alert severity={setSuccess ? 'success' : 'error'}>
            {setSuccess ? 'Entry successfully recorded. Thanks!' : 'Error submitting entry. Try again.'}
          </Alert>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}
