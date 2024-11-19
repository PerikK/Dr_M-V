import { useState, useMemo } from 'react'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import Navbar from './components/Navbar'
import Biography from './components/Biography'
import Office from './components/Office'
import Articles from './components/Articles'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import { lightTheme, darkTheme } from './theme'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useMemo(
    () => isDarkMode ? darkTheme : lightTheme,
    [isDarkMode]
  );

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeToggle toggleTheme={toggleTheme} />
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        minHeight: '100vh',
        width: '100vw',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}>
        <Box 
          sx={{ 
            scrollBehavior: 'smooth', 
            scrollSnapType: 'y mandatory',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1400px',
          }}
        >
          <Navbar />
          <Box sx={{ scrollSnapAlign: 'start', width: '100%' }}><Biography /></Box>
          <Box sx={{ scrollSnapAlign: 'start', width: '100%' }}><Office /></Box>
          <Box sx={{ scrollSnapAlign: 'start', width: '100%' }}><Articles /></Box>
          <Box sx={{ scrollSnapAlign: 'start', width: '100%' }}><Contact /></Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
