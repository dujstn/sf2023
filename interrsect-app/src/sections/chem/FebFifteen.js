import { Typography, Card, Button, Container, Box } from '@mui/material';
import CarouselExercises from '../../components/carousel/CarouselExercises';

export default function FebFourteen() {
  return (
    <>
      <Container>
        <Card sx={{ my: 2, backgroundColor: '#d6efff' }}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              Collision Theory
            </Typography>
          </Box>
          <CarouselExercises day="febfifteen" num={8} />
        </Card>
      </Container>
    </>
  );
}
