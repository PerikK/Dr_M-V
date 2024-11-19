import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-scroll';

const NavigationButton = ({ targetSection, direction = 'down', tooltipText }) => {
  return (
    <Tooltip title={tooltipText}>
      <IconButton
        component={Link}
        to={targetSection}
        smooth={true}
        duration={500}
        sx={{
          position: 'absolute',
          bottom: direction === 'down' ? 30 : 'auto',
          top: direction === 'up' ? 30 : 'auto',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.dark',
            transform: 'translateX(-50%) scale(1.1)',
          },
          transition: 'all 0.3s ease',
          width: '48px',
          height: '48px',
          zIndex: 1000,
        }}
      >
        {direction === 'down' ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default NavigationButton;
