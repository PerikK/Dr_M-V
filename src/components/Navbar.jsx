import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <AppBar position="fixed" color="default" elevation={2} sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: '#2c3e50', fontWeight: 'bold' }}
          >
            Dr. Smith
          </Typography>
          <div>
            <Button
              component={Link}
              to="biography"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              color="inherit"
              sx={{ mx: 1 }}
            >
              Biography
            </Button>
            <Button
              component={Link}
              to="office"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              color="inherit"
              sx={{ mx: 1 }}
            >
              Our Office
            </Button>
            <Button
              component={Link}
              to="articles"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              color="inherit"
              sx={{ mx: 1 }}
            >
              Articles
            </Button>
            <Button
              component={Link}
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              color="inherit"
              sx={{ mx: 1 }}
            >
              Contact
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
