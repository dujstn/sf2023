import { Card, Typography, Grid, Button, Box, Divider } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function ChemPage() {
  const [isViewing, setView] = useState(false);
  return (
    <>
      <Helmet>
        <title>Chemistry 12</title>
      </Helmet>
      <Typography variant="h1">Chemistry 12</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ padding: 2 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Unit 1 - Kinetics
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="p">February 10: Monitoring Reactions</Typography>
              <Button variant="outlined" href="/dashboard/chemtwelve/feb-10" sx={{ alignSelf: 'flex-end' }}>
                View
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ padding: 2 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Unit 1 - Kinetics
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="p">February 10: Monitoring Reactions</Typography>
              <Button variant="outlined" href="/dashboard/chemtwelve/feb-14" sx={{ alignSelf: 'flex-end' }}>
                View
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
      <Outlet />
    </>
  );
}
