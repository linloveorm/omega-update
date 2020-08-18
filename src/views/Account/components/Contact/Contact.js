import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  // Avatar,
  Typography,
  // // Divider,
  Button
  // LinearProgress
} from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },

  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  editButton: {
    width: '90%',
    margin: 10
  },
  Butt: {
    width: '90%',
    align: 'center'
  }
}));

const Contact = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const axios = require('axios');

  // const [address, setAddress] = useState(null);
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://omega-next.cmkl.ac.th/api/v1/')
      .then(res => {
        setDetail(res.data.Contact);
      })

      .catch(err => {
        // console.log(err)
        setError(err.message);
      });
  }, []);
  console.log('test: ' + detail);

  // const user = {
  //   name: 'Shen Zhi',
  //   city: 'Los Angeles',
  //   country: 'USA',
  //   timezone: 'GTM-7',
  //   avatar: '/images/avatars/avatar_11.png'
  // };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography
              gutterBottom
              variant="h4"
            >
              Contact Information
            </Typography>
            {/* <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {user.city}, {user.country}
            </Typography> */}
            {/* <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {moment().format('hh:mm A')} ({user.timezone})
              
            </Typography> */}
          </div>
          {/* <Avatar
            className={classes.avatar}
            src={user.avatar}
          /> */}
        </div>

        <Typography variant="subtitle1">Primary Phone</Typography>
        {/* <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {user.city}, {user.country}
            </Typography> */}
        <Typography
          className={classes.dateText}
          color="textSecondary"
          gutterBottom
          variant="body1"
        >
          {/* {moment().format('hh:mm A')} ({user.timezone}) */}
          {detail && `${detail.Phone_number}`}
        </Typography>

        <Typography variant="subtitle1">Secondary Phone</Typography>
        {/* <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {user.city}, {user.country}
            </Typography> */}
        <Typography
          className={classes.dateText}
          color="textSecondary"
          gutterBottom
          variant="body1"
        >
          {/* {moment().format('hh:mm A')} ({user.timezone}) */}
          {detail && `${detail.Phone_number}`}
        </Typography>

        <div>
          <Typography variant="subtitle1">Personal Email</Typography>

          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            {detail && `${detail.Personnal_email}`}
          </Typography>
        </div>

        {/* <div className={classes.progress}>
          <Typography variant="body1">Profile Completeness: 70%</Typography>
          <LinearProgress
            value={70}
            variant="determinate"
          />
        </div> */}
      </CardContent>
      

      {/* <Button className={classes.Butt} variant="outlined" color="primary" >
            Make Payment
      </Button> */}

      {/* <Divider /> */}
      <CardActions>
        {/* <Button className={classes.Butt} variant="outlined" color="primary" >
              
        </Button> */}
        {/* <Button
          className={classes.uploadButton}
          color="primary"
          variant="text"
        >
          Edit Profile
        </Button> */}
        {/* <Button className={classes.editButton} variant="outlined" color="primary" >
          Edit Profile
        </Button> */}
        {/* <Button variant="text">Remove picture</Button> */}
      </CardActions>
    </Card>
  );
};

Contact.propTypes = {
  className: PropTypes.string
};

export default Contact;
