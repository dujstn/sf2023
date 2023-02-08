import { useState } from 'react';
import {
  Card,
  ToggleButton,
  Button,
  Grid,
  ToggleButtonGroup,
  Box,
  Typography,
  Container,
  Divider,
  createTheme,
  ThemeProvider,
  LinearProgress,
  ListItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { query } from '../../functions/query';

import presetConfig from './config';

const theme = createTheme({
  palette: {
    primary: {
      main: '#388e3c',
    },
  },
});
const UncasedButton = styled(ToggleButton)(() => ({
  textTransform: 'none',
}));

export default function Presets() {
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);
  const [texts, setTexts] = useState(() => [0, 1, 4]);
  const handleClick = (event, index) => {
    setTexts(index);
  };

  return (
    <>
      <Container>
        <Card sx={{ my: 2, p: 4 }}>
          <Typography variant="h2">Step 1: Select</Typography>
          <ThemeProvider theme={theme}>
            <ToggleButtonGroup orientation="vertical" onChange={handleClick} value={texts} color="primary">
              {presetConfig.map((entry) => (
                <UncasedButton
                  value={entry.index}
                  sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}
                >
                  <Box>
                    <Typography sx={{ fontFamily: 'monospace' }}>{entry.index + 1}</Typography>
                  </Box>
                  <Divider orientation="vertical" flexItem sx={{ mx: 3 }} />
                  <Box sx={{ flexWrap: 'wrap', flexGrow: 1 }}>
                    <Typography>{entry.text}</Typography>
                  </Box>
                </UncasedButton>
              ))}
            </ToggleButtonGroup>
          </ThemeProvider>
          <Button
            variant="contained"
            onClick={() => {
              setLoading(true);
              setPrediction('');
              const input = [];
              texts.forEach((item) => input.push(presetConfig[item].text));
              const data = {
                inputs: input.join(' '),
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
          {loading ? <LinearProgress sx={{ mt: 1 }} /> : <></>}
        </Card>
        <Card sx={{ p: 4, my: 2 }}>
          <Typography variant="h2">Step 2: View the Results</Typography>
          {prediction.split('. ').map((sentence) => (
            <ListItem sx={{ display: 'list-item' }}> {sentence}</ListItem>
          ))}
        </Card>
      </Container>
    </>
  );
}
