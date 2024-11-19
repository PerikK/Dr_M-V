import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Modal,
  IconButton,
  Paper
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const articles = [
  {
    title: 'Understanding Preventive Care',
    summary: 'Learn about the importance of regular check-ups and preventive measures.',
    content: `Preventive care is crucial for maintaining good health and detecting potential health issues early. Regular check-ups, screenings, and lifestyle modifications can significantly impact your long-term health outcomes. This article discusses key preventive care measures and their benefits.

Key points:
• Regular health screenings
• Importance of vaccinations
• Lifestyle modifications
• Early detection benefits`
  },
  {
    title: 'Managing Chronic Conditions',
    summary: 'Effective strategies for managing long-term health conditions.',
    content: `Chronic conditions require ongoing medical attention and lifestyle adjustments. This comprehensive guide covers various aspects of managing chronic conditions effectively, from medication adherence to lifestyle modifications and regular monitoring.

Topics covered:
• Medication management
• Lifestyle adjustments
• Regular monitoring
• Support systems`
  },
  {
    title: 'Healthy Living Guidelines',
    summary: 'Essential tips for maintaining a healthy lifestyle in today\'s busy world.',
    content: `Maintaining a healthy lifestyle is essential for overall well-being. This article provides practical guidelines for incorporating healthy habits into your daily routine, covering nutrition, exercise, sleep, and stress management.

Guidelines include:
• Balanced nutrition
• Regular exercise
• Adequate sleep
• Stress management techniques`
  },
  {
    title: 'Healthy Living Guidelines',
    summary: 'Essential tips for maintaining a healthy lifestyle in today\'s busy world.',
    content: `Maintaining a healthy lifestyle is essential for overall well-being. This article provides practical guidelines for incorporating healthy habits into your daily routine, covering nutrition, exercise, sleep, and stress management.

Guidelines include:
• Balanced nutrition
• Regular exercise
• Adequate sleep
• Stress management techniques`
  }
];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '80%', md: '60%' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxHeight: '90vh',
  overflow: 'auto',
  borderRadius: 2
};

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleOpen = (article) => setSelectedArticle(article);
  const handleClose = () => setSelectedArticle(null);

  return (
    <Box 
      id="articles" 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
        py: 8,
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          mx: 'auto',
          width: '80%'
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom align="center" color="text.primary" sx={{ mb: 6 }}>
          Health Articles
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Stay informed with our latest medical insights and health tips
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 2 }} justifyContent="center">
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                  <Typography variant="h6" component="h3" gutterBottom color="text.primary">
                    {article.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {article.summary}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                  <Button 
                    size="large" 
                    color="primary"
                    onClick={() => handleOpen(article)}
                    variant="outlined"
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Modal
          open={selectedArticle !== null}
          onClose={handleClose}
          aria-labelledby="article-modal-title"
        >
          <Paper sx={modalStyle}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
              <Typography id="article-modal-title" variant="h5" component="h2" color="text.primary">
                {selectedArticle?.title}
              </Typography>
              <IconButton onClick={handleClose} size="small">
                <CloseIcon />
              </IconButton>
            </Box>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              {selectedArticle?.content}
            </Typography>
          </Paper>
        </Modal>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Link
            to='contact'
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
              <Typography>Contact</Typography>
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

export default Articles;
