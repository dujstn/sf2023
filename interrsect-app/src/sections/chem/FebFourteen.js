import { Typography, Card, Button, Container, Box } from '@mui/material';
import CarouselExercises from '../../components/carousel/CarouselExercises';

export default function FebFourteen() {
  return (
    <>
      <Container>
        <Card sx={{ my: 2, backgroundColor: '#d6efff' }}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h2" sx={{textAlign: 'center'}}>Reaction Rate Factors</Typography>
          </Box>

          <CarouselExercises day="febfourteen" num={4} />
        </Card>
      </Container>
    </>
  );
}
