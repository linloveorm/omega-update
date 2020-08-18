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
  Divider,
  // Divider,
  // Button,
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
    width: "90%", margin: 10
  },
  
}));

const Emergen = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const axios = require('axios');

  // const [address, setAddress] = useState(null);
  const [detail, setDetail] = useState(null);
  const [detail2, setDetail2] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://omega-next.cmkl.ac.th/api/v1/')
      .then(res => {

        setDetail(res.data.Emergency[0]);
        setDetail2(res.data.Emergency[1]);
      })
      
      
      .catch(err => {
        // console.log(err)
        setError(err.message);
      })
  }, []);


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
              Contact
        
            </Typography>
              
            <Typography
              
              variant="h5"
            >
              Primary Contact
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
        <Divider />
        <Typography
              
              variant="subtitle1"
            >
              Name
            </Typography>
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
              variant="body1"
              gutterBottom
            >
              {/* {moment().format('hh:mm A')} ({user.timezone}) */}
              {detail && `${detail.Firstname} ${detail.Lastname}`}
            </Typography>
            <div>
              <Typography
                variant="subtitle1"
              >
                Relationship
              </Typography>
            
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
                gutterBottom
              >
                {detail && `${detail.Relationship}`}
              </Typography>
            </div>
              <Typography
                variant="subtitle1"
              >
                Phone Number
              </Typography>
            
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
                gutterBottom
              >
                {detail && `${detail.Phone}`}
              </Typography>
              <Typography
                variant="subtitle1"
              >
                Email
              </Typography>
            
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
                gutterBottom
              >
                {detail && `${detail.Email}`}
              </Typography>
             
              <Typography
                
                variant="h5"
              >
                Secondary Contact
              </Typography>
              <Divider/>   
              <Typography
                
                variant="subtitle1"
              >
                Name
              </Typography>           
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
                variant="body1"
                gutterBottom
              >
                {/* {moment().format('hh:mm A')} ({user.timezone}) */}
                {detail2 && `${detail2.Firstname} ${detail2.Lastname}`}
              </Typography>
              <div>
                <Typography
                  variant="subtitle1"
                >
                  Relationship
                </Typography>
              
                <Typography
                  className={classes.dateText}
                  color="textSecondary"
                  variant="body1"
                  gutterBottom
                >
                  {detail2 && `${detail2.Relationship}`}
                </Typography>
              </div>
                <Typography
                  variant="subtitle1"
                >
                  Phone Number
                </Typography>
              
                <Typography
                  className={classes.dateText}
                  color="textSecondary"
                  variant="body1"
                  gutterBottom
                >
                  {detail2 && `${detail2.Phone}`}
                </Typography>
                <Typography
                  variant="subtitle1"
                >
                  Email
                </Typography>
              
                <Typography
                  className={classes.dateText}
                  color="textSecondary"
                  variant="body1"
                  gutterBottom
                >
                  {detail2 && `${detail2.Email}`}
                </Typography>
                            

        {/* <div className={classes.progress}>
          <Typography variant="body1">Profile Completeness: 70%</Typography>
          <LinearProgress
            value={70}
            variant="determinate"
          />
        </div> */}
      </CardContent>
      {/* <Divider /> */}
      <CardActions>
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

Emergen.propTypes = {
  className: PropTypes.string
};

export default Emergen;
