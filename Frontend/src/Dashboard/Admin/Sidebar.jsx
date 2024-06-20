// Sidebar.jsx

import React from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

function Sidebar({ selectedItem, onItemClick }) {
  const handleItemClick = (item) => {
    onItemClick(item);
  };

  return (
    <List>
      <ListItem key="dashboard" disablePadding>
        <ListItemButton onClick={() => handleItemClick('dashboard')} selected={selectedItem === 'dashboard'}>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>
      <ListItem key="treq" disablePadding>
        <ListItemButton onClick={() => handleItemClick('treq')} selected={selectedItem === 'treq'}>
          <ListItemText primary="TeamRequest" />
        </ListItemButton>
      </ListItem>
      <ListItem key="GuideAllo" disablePadding>
        <ListItemButton onClick={() => handleItemClick('GuideAllo')} selected={selectedItem === 'GuideAllo'}>
          <ListItemText primary="GuideAllocation" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default Sidebar;
