import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
        
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" >
            Spring Boot React Full Stack App
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
