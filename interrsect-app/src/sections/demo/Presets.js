import { useState, useEffect, useRef } from 'react';
import {
  Card,
  ToggleButton,
  Button,
  ToggleButtonGroup,
  Typography,
  Container,
  LinearProgress,
  ListItem,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardHeader,
  Box,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { query } from '../../functions/query';
import useResponsive from '../../hooks/useResponsive';

import presetConfig from './config';

const GreenToggleButton = styled(ToggleButton)({
  '&.Mui-selected, &.Mui-selected:hover': {
    color: 'white',
    backgroundColor: '#8fd691',
  },
});

export default function Presets() {
  const isNarrow = useResponsive('up', 'lg');
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);
  const [texts, setTexts] = useState(0);
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState('struc');
  const handleClick = (event, index) => {
    if (index !== null) {
      setTexts(index);
    }
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setBody(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Container>
        <Card sx={{ my: 2 }}>
          <CardHeader title={'Step 1: Select your summary'} />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <ToggleButtonGroup
              value={texts}
              onChange={handleClick}
              exclusive
              orientation={isNarrow ? 'horizontal' : 'vertical'}
              sx={{ my: 2, p: 2 }}
            >
              <GreenToggleButton value={0} sx={{ flex: 1, p: 3 }}>
                <Card sx={{ flex: 1 }}>
                  <CardContent>
                    <Typography variant="h5">Long paragraphs & articles</Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={handleClickOpen('struc')}>See full text</Button>
                  </CardActions>
                </Card>
              </GreenToggleButton>
              <GreenToggleButton value={1} sx={{ flex: 1, p: 3 }}>
                <Card sx={{ flex: 1 }}>
                  <CardContent>
                    <Typography variant="h5">Unstructured text (notes)</Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={handleClickOpen('unstruc')}>See full text</Button>
                  </CardActions>
                </Card>
              </GreenToggleButton>
            </ToggleButtonGroup>
            <Button
              variant="contained"
              onClick={() => {
                setLoading(true);
                setPrediction('');
                const data = {
                  inputs: texts === 0 ? presetConfig[0].text : presetConfig[1].text,
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
          </Box>
        </Card>
        <Alert severity="info">The first run may take more time than usual due to the model warming up!</Alert>
        <Card sx={{ my: 2 }}>
          <CardHeader title={'Step 2: View your summary'} />
          <Container sx={{ p: 4 }}>
            {prediction.split('. ').map((sentence) => (
              <ListItem sx={{ display: 'list-item' }}> {sentence}</ListItem>
            ))}
          </Container>
        </Card>
        <Dialog open={open} onClose={handleClose} scroll="body">
          <DialogTitle>{body === 'struc' ? 'Long Paragraphs & Articles' : 'Unstructured Text (Notes)'}</DialogTitle>
          <DialogContent>{body === 'struc' ? presetConfig[0].text : presetConfig[1].text}</DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>CLOSE</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}
