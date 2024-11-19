import React from 'react';
import { Container, Typography, Box, Grid, Paper, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-scroll';
import { HiArrowNarrowUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <Box 
      id="contact" 
      sx={{ 
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
        py: 8,
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          my: 8
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom align="center" color="primary" sx={{ mb: 6 }}>
          Contact Us
        </Typography>
        
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                textAlign: 'center',
                backgroundColor: 'transparent',
                '&:hover': {
                  '& .MuiIconButton-root': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    transform: 'scale(1.1)',
                  }
                }
              }}
            >
              <IconButton 
                sx={{ 
                  mb: 3, 
                  p: 3,
                  transition: 'all 0.3s ease',
                  backgroundColor: 'primary.light',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                  }
                }}
                size="large"
                component="a"
                href="mailto:dr.smith@example.com"
              >
                <EmailIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <Typography variant="h6" gutterBottom>
                Email
              </Typography>
              <Typography variant="body1" color="text.secondary">
                dr.smith@example.com
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                textAlign: 'center',
                backgroundColor: 'transparent',
                '&:hover': {
                  '& .MuiIconButton-root': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    transform: 'scale(1.1)',
                  }
                }
              }}
            >
              <IconButton 
                sx={{ 
                  mb: 3,
                  p: 3,
                  transition: 'all 0.3s ease',
                  backgroundColor: 'primary.light',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                  }
                }}
                size="large"
                component="a"
                href="tel:+1234567890"
              >
                <PhoneIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <Typography variant="h6" gutterBottom>
                Phone
              </Typography>
              <Typography variant="body1" color="text.secondary">
                (123) 456-7890
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                textAlign: 'center',
                backgroundColor: 'transparent',
                '&:hover': {
                  '& .MuiIconButton-root': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    transform: 'scale(1.1)',
                  }
                }
              }}
            >
              <IconButton 
                sx={{ 
                  mb: 3,
                  p: 3,
                  transition: 'all 0.3s ease',
                  backgroundColor: 'primary.light',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                  }
                }}
                size="large"
                component="a"
                href="https://facebook.com/drsmith"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <Typography variant="h6" gutterBottom>
                Facebook
              </Typography>
              <Typography variant="body1" color="text.secondary">
                @drsmith
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Link
            to='biography'
            smooth
            duration={500}
            style={{
              textDecoration: 'none'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: 3,
                py: 1.5,
                my: 1,
                borderRadius: 1,
                cursor: 'pointer',
                color: 'white',
                background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
                '&:hover .arrow-icon': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s'
                }
              }}
            >
              <Typography>Back to Top</Typography>
              <HiArrowNarrowUp 
                size={25} 
                className="arrow-icon" 
                style={{ 
                  marginLeft: '12px',
                  transition: 'transform 0.3s'
                }} 
              />
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
