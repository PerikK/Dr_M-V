import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

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
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: 8,
          mb: 4
        }}
      >
        <Typography variant="h3" component="h2" align="center" gutterBottom color="text.primary">
          Our Office
        </Typography>
        <Grid container spacing={4}>
          {officeImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper 
                elevation={3}
                sx={{
                  p: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    marginBottom: '1rem',
                    borderRadius: '4px'
                  }}
                />
                <Typography variant="h6" gutterBottom color="text.primary" align="center">
                  {image.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {image.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Link
            to='articles'
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
                  transform: 'rotate(90deg)',
                  transition: 'transform 0.3s'
                }
              }}
            >
              <Typography>Articles</Typography>
              <HiArrowNarrowRight 
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

export default Office;
