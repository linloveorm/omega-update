import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {
    background: '#CF272F',
    boxShadow: 'none'
  }
}));

const Topbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      // color="primary"
      position="fixed"
    >
      <Toolbar >
        <RouterLink to="/">
          {/* <img
            alt="Logo"
            src={mainLogo}
          /> */}
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;