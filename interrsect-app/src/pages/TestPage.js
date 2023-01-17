import { Helmet } from 'react-helmet-async';
import {
  Button,
  TextField,
  Grid,
  Container,
  Typography,
  Stack,
  CircularProgress,
  Divider,
  Card,
  CardHeader,
} from '@mui/material';
import { useState } from 'react';
import { query } from '../functions/query';

const sampleOne = 'The cat is a purebred. It likes to eat rasins and go for walks. ';
const sampleTwo =
  'The cat, adopted in 2019, is from a shelter that houses previously abandoned animals. It likes to go for walks, especially in the evenings when it is quieter. ';
const sampleThree =
  'The cat loves to eat rasins, especially those from the brand Sun Maid. Most of the meals it has features this snack. ';
const samples = sampleOne + sampleTwo + sampleThree;

export default function TestPage() {
  const [userInput, setUserInput] = useState('');
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Helmet>
        <title>Test Page</title>
      </Helmet>
      <Container maxWidth="lg">
        <Card padding={4} sx={{ my: 2 }}>
          <CardHeader title={'Students say...'} />
          <Stack direction="row" spacing={3} sx={{ p: 4 }}>
            <Typography variant="p" align="center">
              {sampleOne}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="p" align="center">
              {sampleTwo}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="p" align="center">
              {sampleThree}
            </Typography>
          </Stack>
        </Card>
        <Card sx={{ my: 2 }}>
          <CardHeader title={'Your Input'} />
          <Stack sx={{p: 4}} spacing={2}>
            <TextField
              multiline
              variant="filled"
              label="Enter text"
              minRows={3}
              onChange={(update) => {
                setUserInput(update.target.value);
              }}
            />
            <Button
              variant="contained"
              onClick={() => {
                setLoading(true);
                setPrediction('');
                const data = {
                  inputs: samples + userInput,
                  options: {
                    wait_for_model: true,
                  },
                };
                query(data).then((value) => {
                  setPrediction(value);
                  setLoading(false);
                });
              }}
            >
              SUBMIT
            </Button>
            <CircularProgress style={{ display: loading ? 'block' : 'none' }} />
            <Typography>{loading ? 'loading' : 'not loading'}</Typography>
          </Stack>
        </Card>
        <Card sx={{ my: 2 }}>
          <CardHeader title={'BARTxiv says...'} />
          <Typography variant="h5" sx={{ p: 4 }}>
            {prediction}
          </Typography>
        </Card>
      </Container>
    </>
  );
}
