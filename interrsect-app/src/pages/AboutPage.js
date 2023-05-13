import { Typography, Button, Card, Container, Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About interrsect-app" />
      </Helmet>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h1" sx={{ p: 2 }}>
          Having trouble taking notes?
        </Typography>
        <Typography variant="h3" sx={{ p: 2 }} color="#25a6ff">
          Interrsect was created to help you out.
        </Typography>
        <Card sx={{ p: 2 }}>
          <Typography variant="body1" fontSize={18} sx={{ my: 2 }}>
            Let's get it straight: taking notes in class isn't easy. Doing it well takes more than just memorizing what
            to write - you also have to make good sense of these ideas and write them down fast enough.
          </Typography>
          <Typography variant="body1" fontSize={24} sx={{ my: 2 }}>
            <strong>Let's forget these skills.</strong>
          </Typography>
          <Typography variant="body1" fontSize={18}>
            With Interrsect, you can focus on your teacher instead of writing perfect notes. Interrsect uses one of the
            best natural language models to condense your notes, filtering out unnecessary information and connecting
            ideas. Never worry about missing a slide again: used with your friends, Interrsect finds the best of your
            group's ideas to create better notes for everyone.
          </Typography>
        </Card>
        <Button variant="contained" sx={{ my: 4 }} size="large" href="/dashboard/demo">
          <Typography variant="button" sx={{ m: 5 }}>
            Try it out here!
          </Typography>
        </Button>
        <Box component="img" src="/assets/logo2.svg" />
        <Typography>Created by Justin Du, 2023. </Typography>
      </Container>
    </>
  );
}
