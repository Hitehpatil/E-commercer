import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, Badge, IconButton } from '@mui/material';
import { ShoppingCart, Home } from '@mui/icons-material';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ 
            flexGrow: 1, 
            textDecoration: 'none', 
            color: 'inherit',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Home sx={{ mr: 1 }} />
          E-Commerce Store
        </Typography>
        <IconButton
          component={Link}
          to="/cart"
          color="inherit"
        >
          <Badge badgeContent={itemCount} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;