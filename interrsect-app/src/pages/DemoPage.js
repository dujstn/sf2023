import { Helmet } from 'react-helmet-async';
import { ToggleButtonGroup, ToggleButton, Typography, Grid } from '@mui/material';
import { useState } from 'react';
import Sandbox from '../sections/demo/Sandbox';
import Presets from '../sections/demo/Presets';

export default function DemoPage() {
  const [exp, setExp] = useState('pre');

  const handleChange = (event, mode) => {
    if (mode !== null) {
      setExp(mode);
    }
  };

  return (
    <>
      <Helmet>
        <title>Demo</title>
      </Helmet>
      <Typography variant="h1">
        <Typography variant="h1" fontFamily="consolas" color="#F35938">
          interrsect-app
        </Typography>{' '}
        summarizes notes.
      </Typography>
      <Grid container alignItems={'center'} direction="column">
        <Grid item>
          <ToggleButtonGroup onChange={handleChange} exclusive color="primary" value={exp}>
            <ToggleButton value="pre">PRESETS</ToggleButton>
            <ToggleButton value="sand">TRY IT YOURSELF</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        {exp === 'pre' ? <Presets /> : <></>}
        {exp === 'sand' ? <Sandbox /> : <></>}
      </Grid>
    </>
  );
}
