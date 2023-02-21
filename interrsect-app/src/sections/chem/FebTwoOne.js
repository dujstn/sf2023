import { Typography, Card, Button, useTheme, Container, Box } from '@mui/material';
import CarouselExercises from '../../components/carousel/CarouselExercises';

export default function FebTen() {
  return (
    <>
      <Container>
        <Card sx={{ my: 2, backgroundColor: '#d6efff' }}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              Mechanisms & Catalysts
            </Typography>
          </Box>
          <CarouselExercises day="febtwoone" num={4} />
        </Card>
      </Container>
    </>
  );
}
