import {
  Button,
  TextField,
  Container,
  Typography,
  Stack,
  LinearProgress,
  Divider,
  Card,
  CardHeader,
  Box,
  ListItem,
  Alert,
} from '@mui/material';
import { useState } from 'react';
import { query } from '../../functions/query';
import useResponsive from '../../hooks/useResponsive';

export default function Sandbox() {
  const sampleOne = 'The cat is a purebred. It likes to eat fruit and go for walks. ';
  const sampleTwo =
    'The cat, adopted in 2019, is from a shelter that houses previously abandoned animals. It likes to go for walks, especially in the evenings when it is quieter. ';
  const sampleThree =
    'The cat loves to eat fruit, especially apples and oranges. Most of the meals it has features this snack. ';
  const samples = sampleOne + sampleTwo + sampleThree;
  const [userInput, setUserInput] = useState('');
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);
  const isNarrow = useResponsive('up', 'lg');
  return (
    <>
      <Container>
        <Card sx={{ my: 2 }}>
          <CardHeader title={'Students describe a cat...'} />
          <Stack direction={isNarrow ? 'row' : 'column'} spacing={3} sx={{ p: 4 }}>
            <Typography variant="p" align="center">
              {sampleOne}
            </Typography>
            <Divider orientation={isNarrow ? 'vertical' : 'horizontal'} flexItem />
            <Typography variant="p" align="center">
              {sampleTwo}
            </Typography>
            <Divider orientation={isNarrow ? 'vertical' : 'horizontal'} flexItem />
            <Typography variant="p" align="center">
              {sampleThree}
            </Typography>
          </Stack>
        </Card>
        <Card sx={{ my: 2 }}>
          <CardHeader title={"Now it's your turn!"} />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              multiline
              variant="filled"
              label="Add on to this description..."
              minRows={1}
              sx={{ m: 4, flex: 1 }}
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
                  parameters: {
                    temperature: 2.0,
                  },
                  options: {
                    wait_for_model: true,
                  },
                };
                query(data).then((value) => {
                  console.log(value);
                  setPrediction(value);
                  setLoading(false);
                });
              }}
            >
              SUBMIT
            </Button>
            {loading ? <LinearProgress sx={{ mt: 1 }} /> : <></>}
          </Box>
        </Card>
        <Alert severity="info">The first run may take more time than usual due to the model warming up!</Alert>
        <Card sx={{ my: 2 }}>
          <CardHeader title={'See the summary:'} />
          {prediction.split('. ').map((sentence) => (
            <ListItem sx={{ display: 'list-item' }}>{sentence}</ListItem>
          ))}
        </Card>
      </Container>
    </>
  );
}
