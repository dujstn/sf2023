import { Typography, Card, Button, Container, Box } from '@mui/material';
import CarouselExercises from '../../components/carousel/CarouselExercises';

export default function FebFourteen() {
  return (
    <>
      <Container>
        <Card sx={{ my: 2, backgroundColor: '#d6efff' }}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h2">Reaction Rate Factors</Typography>
            <Typography variant="p">
              Summarize each slide in exactly <strong>2</strong> sentences.
            </Typography>
          </Box>
          <CarouselExercises day="febfourteen" num={4} />
        </Card>
      </Container>
    </>
  );
}
