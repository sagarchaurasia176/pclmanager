import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

export function MainComponent() {
  const [selectedItem, setSelectedItem] = useState('dashboard');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" component="h1">
        {selectedItem}
      </Typography>
      
      <div>Placeholder for content based on selectedItem</div>
    </Box>
  );
}

export default MainComponent;
