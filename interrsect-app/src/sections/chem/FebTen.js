import { Typography, Card, Button, useTheme, Container } from '@mui/material';
import CarouselExercises from '../../components/carousel/CarouselExercises';

export default function FebTen() {
  const theme = useTheme();
  return (
    <>
      <Container>
        <Card sx={{ my: 2, p: 4, maxWidth: 'lg', backgroundColor: '#d6efff' }}>
          <Typography variant="h2">Monitoring Reactions</Typography>
          <Typography variant="p">
            Summarize each slide in exactly <strong>2</strong> sentences.
          </Typography>
          <CarouselExercises day="febten" num={6} />
        </Card>
      </Container>
    </>
  );
}
