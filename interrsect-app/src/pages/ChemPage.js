import SimpleBar from 'simplebar-react';
import {
  Card,
  Typography,
  Grid,
  Button,
  Box,
  Divider,
  Alert,
  Container,
  ImageList,
  ImageListItem,
} from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Scrollbar from '../components/scrollbar';

export default function ChemPage() {
  return (
    <>
      <Helmet>
        <title>Chemistry 12</title>
      </Helmet>

      <Typography variant="h1" sx={{ p: 2 }}>
        Chemistry 12
      </Typography>
      <Alert severity="warning" sx={{ p: 2 }}>
        By using this page, you have <strong>filled out the permission form</strong> and consent to the usage of
        inputted data for research.
      </Alert>
      <SimpleBar>
        <Box sx={{ display: 'flex', gap: 4, my: 2 }}>
          <Grid item sx={{ minWidth: 300 }}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                February 15
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="p">Collision Theory</Typography>
                <Button variant="outlined" href="/dashboard/chemtwelve/feb-15" sx={{ alignSelf: 'flex-end', mt: 2 }}>
                  View
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item sx={{ minWidth: 300 }}>
            <Card sx={{ padding: 2 }}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                February 14
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="p">Reaction Rate Factors</Typography>
                <Button variant="outlined" href="/dashboard/chemtwelve/feb-14" sx={{ alignSelf: 'flex-end', mt: 2 }}>
                  View
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item sx={{ minWidth: 300 }}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h3" sx={{ mb: 2 }}>
                February 10
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="p">Monitoring Reactions</Typography>
                <Button variant="outlined" href="/dashboard/chemtwelve/feb-10" sx={{ alignSelf: 'flex-end', mt: 2 }}>
                  View
                </Button>
              </Box>
            </Card>
          </Grid>
        </Box>
      </SimpleBar>

      <Divider sx={{ my: 2 }} />
      <Outlet />
    </>
  );
}
