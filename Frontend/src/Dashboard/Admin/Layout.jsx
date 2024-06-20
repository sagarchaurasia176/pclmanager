// Layout.jsx

import React from 'react';
import { CssBaseline, Drawer, Box, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import MainComponent from './MainComponent';

export function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
        <Sidebar />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <MainComponent />
      </Box>
    </Box>
  );
}
