import { Typography, Card, Button, useTheme, Container, Box } from '@mui/material';
import CarouselExercises from '../../components/carousel/CarouselExercises';

export default function FebTen() {
  return (
    <>
      <Container>
        <Card sx={{ my: 2, backgroundColor: '#d6efff' }}>
          <Box sx={{ p: 2}}>
            <Typography variant="h2">Monitoring Reactions</Typography>
            <Typography variant="p">
              Summarize each slide in exactly <strong>2</strong> sentences.
            </Typography>
          </Box>
          <CarouselExercises day="febten" num={6} />
        </Card>
      </Container>
    </>      
  );
}
