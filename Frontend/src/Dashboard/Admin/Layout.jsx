// Layout.jsx

import React, { useState } from 'react';
import { CssBaseline, Drawer, Box, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import MainComponent from './MainComponent';

const drawerWidth = 240;

const layoutStyle = {
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  main: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    marginLeft: drawerWidth,
  },
};

function Layout() {
  const [selectedItem, setSelectedItem] = useState('dashboard'); // Ensure useState is imported correctly

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Box style={layoutStyle.root}>
      <CssBaseline />
      <Drawer variant="permanent" style={layoutStyle.drawer}>
        <Sidebar selectedItem={selectedItem} onItemClick={handleItemClick} />
      </Drawer>
      <Box component="main" style={layoutStyle.main}>
        <Toolbar />
        <MainComponent selectedItem={selectedItem} />
      </Box>
    </Box>
  );
}

export default Layout;
