import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeToggle = ({ toggleTheme }) => {
  const theme = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      sx={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        '&:hover': {
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
        },
        zIndex: 2000,
        padding: '12px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
      }}
    >
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon sx={{ fontSize: '1.2rem' }} />
      ) : (
        <Brightness4Icon sx={{ fontSize: '1.2rem' }} />
      )}
    </IconButton>
  );
};

export default ThemeToggle;
