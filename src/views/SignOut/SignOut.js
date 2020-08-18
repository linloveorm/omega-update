import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import mainLogo from'./Omega-0001.png';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  FormHelperText,
  Checkbox,
  Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { useAuth0 } from "@auth0/auth0-react";



const SignOut = () => {

  const { logout } = useAuth0();

  return (
    logout()
  );
};

SignOut.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignOut);
