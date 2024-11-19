import React from 'react';
import { Container, Typography, Box, Paper, Avatar } from '@mui/material';

const Biography = () => {
  return (
    <Box 
      id="biography" 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
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
        <Paper 
          elevation={0}
          sx={{ 
            p: 4,
            bgcolor: 'background.paper',
            borderRadius: 2,
          }}
        >
          <Box 
            display="flex" 
            flexDirection={{ xs: 'column', md: 'row' }} 
            alignItems="center" 
            justifyContent="center"
            gap={4}
          >
            <Avatar
              sx={{
                width: 250,
                height: 250,
                boxShadow: 3
              }}
              alt="Dr. Maria Vagia"
              src="/doctor-placeholder.jpg"
            />
            <Box maxWidth="600px">
              <Typography variant="h3" component="h1" gutterBottom color="text.primary" align="center">
                Dr. Maria Vagia
              </Typography>
              <Typography variant="h6" gutterBottom color="text.secondary" align="center">
                Board Certified Family Physician
              </Typography>
              <Typography variant="body1" paragraph align="center">
                Dr. Sarah Smith brings over 15 years of experience in family medicine, specializing in
                preventive care and chronic disease management. After graduating with honors from
                Harvard Medical School, she completed her residency at Mayo Clinic.
              </Typography>
              <Typography variant="body1" paragraph align="center">
                Her approach to healthcare emphasizes the importance of the doctor-patient
                relationship and comprehensive, personalized care plans. Dr. Smith is known for her
                compassionate care and dedication to staying current with the latest medical
                advancements.
              </Typography>
              <Typography variant="body1" align="center">
                She is a member of the American Academy of Family Physicians and has received
                numerous awards for her contributions to community health initiatives.
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Biography;
