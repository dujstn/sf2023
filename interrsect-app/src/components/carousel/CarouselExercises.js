import { Box, Button, Container, TextField, Typography, Alert, Card, Paper } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import NewCarousel from 'react-material-ui-carousel';
import { useState } from 'react';
import db from '../../firebase';
import useResponsive from '../../hooks/useResponsive';

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
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(false);
  const nums = [...Array(num).keys()];
  const isNarrow = useResponsive('up', 'lg');

  return (
    <>
      <NewCarousel
        onChange={handleChange}
        autoPlay={false}
        cycleNavigation={false}
        navButtonsAlwaysVisible
        navButtonsWrapperProps={{
          style: {
            top: '2',
            bottom: '2',
          },
        }}
      >
        {nums.map((num) => (
          <Container sx={{ display: 'flex', flexDirection: 'column' }}>
            <Card
              component="img"
              src={`/assets/images/${day}/${num}.png`}
              sx={{ maxWidth: isNarrow ? 'sm' : 'xs', display: 'flex', alignSelf: 'center' }}
            />
          </Container>
        ))}
      </NewCarousel>
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4" sx={{ alignSelf: 'center', textAlign: 'center' }}>
          Summarize each slide in exactly <strong>2</strong> sentences.
        </Typography>
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
          <Alert severity={success ? 'success' : 'error'}>
            {success ? 'Entry successfully recorded. Thanks!' : 'Error submitting entry. Try again.'}
          </Alert>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
}
