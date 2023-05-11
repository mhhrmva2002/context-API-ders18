import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" style={{display:"flex" , justifyContent:"space-around"}}>
          <Typography variant="h6" color="inherit">
           <Link to='/'> Home</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link to='/basket'> Basket</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}