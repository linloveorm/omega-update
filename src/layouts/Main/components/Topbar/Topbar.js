import React from 'react';
// import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
// import InputIcon from '@material-ui/icons/Input';
import mainLogo from './Omega-01.png';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#C62026',
    boxShadow: 'none',
    colors: 'white'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  // const [notifications] = useState([]);

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <RouterLink to="/dashboard">
          <img
            alt="Logo"
            height={70}
            src={mainLogo}
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Chip
          icon={<FaceIcon />}
          label="User"
          onClick={handleClick}
        />
        {/* <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
          >
            <InputIcon />
          </IconButton>
        </Hidden> */}
        
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
