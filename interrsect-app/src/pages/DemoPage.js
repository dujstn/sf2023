import { Helmet } from 'react-helmet-async';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useState } from 'react';
import Sandbox from '../sections/demo/sandbox';

export default function DemoPage() {
  const [exp, setExp] = useState('sand');

  const handleChange = (event, mode) => {
    setExp(mode);
  };

  return (
    <>
      <Helmet>
        <title>Test Page</title>
      </Helmet>
      <ToggleButtonGroup onChange={handleChange} exclusive color="primary" value={exp}>
        <ToggleButton value="sand">SANDBOX</ToggleButton>
        <ToggleButton value="mode">TRY IT YOURSELF</ToggleButton>
      </ToggleButtonGroup>
      <Sandbox />
    </>
  );
}
