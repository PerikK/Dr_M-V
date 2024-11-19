import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const officeImages = [
  {
    url: '/office1.jpg',
    title: 'Reception Area',
    description: 'Our welcoming reception area provides a comfortable space for patients.'
  },
  {
    url: '/office2.jpg',
    title: 'Examination Room',
    description: 'Modern examination rooms equipped with the latest medical technology.'
  },
  {
    url: '/office3.jpg',
    title: 'Waiting Room',
    description: 'Spacious waiting area designed for your comfort.'
  },
  {
    url: '/office4.jpg',
    title: 'Consultation Office',
    description: 'Private consultation space for detailed discussions about your health.'
  }
];

const Office = () => {
  return (
    <Box 
      id="office" 
      sx={{ 
        minHeight: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: 8,
          mx: 'auto',
          width: '80%'
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom align="center" color="primary" sx={{ mb: 6 }}>
          Our Medical Facility
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Take a virtual tour of our state-of-the-art medical facility
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {officeImages.map((image, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}
              >
                <Box
                  sx={{
                    height: 250,
                    width: '100%',
                    backgroundColor: '#f0f0f0',
                    backgroundImage: `url(${image.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mb: 2,
                    borderRadius: 1
                  }}
                />
                <Typography variant="h6" gutterBottom align="center">
                  {image.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {image.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Office;
