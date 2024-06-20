// MainComponent.jsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import Dashboard from './Dashboard';
import GuideAllocation from './GuideAllocation';
import TeamRequest from './TeamRequest';

function MainComponent({ selectedItem }) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" component="h1">
        {selectedItem}
      </Typography>
      {selectedItem === 'dashboard' && <Dashboard />}
      {selectedItem === 'treq' && <TeamRequest />}
      {selectedItem === 'GuideAllo' && <GuideAllocation />}
    </Box>
  );
}

export default MainComponent;
