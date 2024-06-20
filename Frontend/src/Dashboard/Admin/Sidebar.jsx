import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"; // Added ListItemButton import

export function Sidebar() {
  return (
    <List>
      <ListItem key="dashboard" disablePadding>
        <ListItemButton>
          <ListItemText primary="Admin Dashboard" />
        </ListItemButton>
      </ListItem>
      <ListItem key="Treq" disablePadding>
        <ListItemButton>
          <ListItemText primary="Team Requests" />
        </ListItemButton>
      </ListItem>
      <ListItem key="GuideAllo" disablePadding>
        <ListItemButton>
          <ListItemText primary="Guide Allocation" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default Sidebar;
