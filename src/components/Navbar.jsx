import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from '@mui/material';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showInDrawer, setShowInDrawer] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 375px)');
    const updateToggleLocation = (e) => {
      setShowInDrawer(e.matches);
    };
    
    setShowInDrawer(mediaQuery.matches);
    
    mediaQuery.addListener(updateToggleLocation);
    
    return () => mediaQuery.removeListener(updateToggleLocation);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ['biography', 'office', 'articles', 'contact'];

  const drawer = (
    <Box
      sx={{
        width: 240,
        bgcolor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        height: '100%',
        pt: 2,
        position: 'relative'
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          position: 'absolute',
          left: 8,
          top: 8,
          color: 'text.primary',
          transform: 'rotate(180deg)',  
          '&:hover': {
            transform: 'rotate(180deg) translateX(5px)',  
            transition: 'transform 0.3s'
          }
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <List sx={{ mt: 5 }}>
        {menuItems.map((item) => (
          <ListItem key={item}>
            <Link
              to={item}
              smooth
              duration={500}
              style={{
                cursor: 'pointer',
                textDecoration: 'none',
                width: '100%'
              }}
              onClick={handleDrawerToggle}
            >
              <ListItemText
                primary={item.charAt(0).toUpperCase() + item.slice(1)}
                sx={{
                  color: 'text.primary',
                  '& .MuiTypography-root': {
                    '&:hover': {
                      color: theme.palette.primary.main
                    }
                  }
                }}
              />
            </Link>
          </ListItem>
        ))}
        {showInDrawer && (
          <ListItem sx={{ justifyContent: 'center', mt: 2 }}>
            <ThemeToggle />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'rgba(0, 0, 0, 0.9)'
          : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 0.8,
            color: 'text.primary',
            fontSize: { xs: '1rem', sm: '1.25rem' }
          }}
        >
          Dr. Maria Vagia
        </Typography>
        {isMobile ? (
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 3
          }}>
            {!showInDrawer && <ThemeToggle />}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                color: 'text.primary'
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                duration={500}
                style={{
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >
                <Typography
                  sx={{
                    color: 'text.primary',
                    textTransform: 'capitalize',
                    '&:hover': {
                      color: theme.palette.primary.main
                    }
                  }}
                >
                  {item}
                </Typography>
              </Link>
            ))}
            <ThemeToggle />
          </Box>
        )}
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            bgcolor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)'
          }
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
