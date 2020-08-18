// import React, { useState } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
// import { UsersToolbar, UsersTable } from './components';
// import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();

  // const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      {/* <UsersToolbar />
      <div className={classes.content}>
        <UsersTable users={users} />
      </div> */}
      <Typography
                className={classes.quoteText}
                variant="h1"
              >
                My Profile
      </Typography>
      
    </div>
  );
};

export default UserList;
