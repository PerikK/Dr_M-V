import React from 'react';
import { Container, Typography, Box, Grid, Paper, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {
  return (
    <Box 
      id="contact" 
      sx={{ 
        minHeight: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container 
        maxWidth="md" 
        sx={{ 
          py: 8,
          mx: 'auto',
          width: '80%'
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
      </Container>
    </Box>
  );
};

export default Contact;
