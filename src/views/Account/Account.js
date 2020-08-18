import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Typography, CardActions, Button} from '@material-ui/core';
import { AccountProfile, Contact, Address, Emergen } from './components';
// import { height } from '@material-ui/system';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  con: {
    // height: 300,
  },
  editButton: {
    right:-26
    // top: -40,
    // right: -800
   
  }
}));

const Account = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
                className={classes.quoteText}
                variant="h1"
                gutterBottom
              >
                My Profile
            <Button className={classes.editButton} variant="outlined" color="primary" href="/settings" placement="top-end">
              Edit Profile
            </Button>
        <CardActions>
          {/* <Button
            className={classes.uploadButton}
            color="primary"
            variant="text"
          >
            Edit Profile
          </Button> */}
          
          {/* <Button variant="text">Remove picture</Button> */}
        </CardActions>
      </Typography>

          
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={6}
          md={6}
          xl={4}
          xs={12}
        >
          <AccountProfile />
        </Grid>
        
        <Grid
          item
          lg={4}
          md={6}
          xl={8}
          xs={12}
        
          className={classes.con}
        >
          <Contact />
        </Grid>
        {/* <Grid
          item
          lg={2}
          md={3}
          xl={3}
          xs={2}
        >
          <Button className={classes.editButton} variant="outlined" color="primary" href="/settings" placement="top-end">
              Edit Profile
            </Button>
        </Grid> */}
        <Grid
          item
          lg={6}
          md={6}
          xl={8}
          xs={12}
        >
          <Emergen />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={8}
          xs={12}
        >
          <Address />
        </Grid>
        
        {/* <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          <AccountDetails />
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Account;
