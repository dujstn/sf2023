import { Typography, Button, Card, CardHeader} from '@mui/material';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Typography variant="h1">About This Project</Typography>
    </>
  );
}
