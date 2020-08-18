import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import typography from 'theme/typography';

const useStyles = makeStyles(theme => ({
  root: { padding: theme.spacing(5) },
  details: {
    display: 'flex'
  },

  avatar: {
    marginRight: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  profileBox: {
    padding: theme.spacing(3)
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  editButton: {
    width: '90%',
    margin: 10
  },
  continueButton: {
    backgroundColor: '#8B0000',
    borderRadius: '6px',
    width: '40%',
    padding: '5%',
    border: 'none',
    color: '#FFFAFA',
    alignmentBaseline: 'right'
  },
  buttonDiv: {
    textAlign: 'right'
  },
  divPadding:{
    padding: theme.spacing(2)
  }
}));

const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const user = {
    avatar: '/images/avatars/avatar_11.png'
  };

  return (
    <div className={classes.divPadding}>
      <div className="form-inline">
        <div>
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
        </div>
        <div className={classes.profileBox}>
          <div>
            <Typography><h4>Hello,</h4></Typography>
            <Typography>John Doe</Typography>
          </div>
          <div>
            <Typography>EIC Student</Typography>
            <Typography>ID: XXXXXXXXX</Typography>
          </div>
        </div>
      </div>
      <div className={classes.buttonDiv}>
        <button className={classes.continueButton}>View Profile</button>
      </div>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
