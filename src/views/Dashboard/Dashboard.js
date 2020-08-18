import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Typography, Card } from '@material-ui/core';
// import { NextCalendar } from 'Next-Calendar';
// import { Calendar, globalizeLocalizer } from 'react-big-calendar'
// import globalize from 'globalize'
// import {date} from 'onNavigate'

import { Profile, Finance, Announce } from './components';

// const localizer = globalizeLocalizer(globalize)
// const myEventsList = Event (
//   {title: "Ted Talk",
//   start: date,
//   end: date,
//   allDay: true}

// )

// const MyCalendar = props => (
//   <div>
//     <Calendar
//       localizer={localizer}
//       events={myEventsList}
//       startAccessor="start"
//       endAccessor="end"
//       style={{ height: 500 }}
//     />
//   </div>
// )



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  paddingCard: {
    padding: theme.spacing(2)
  },
  marginCardProfile: {
    margin: theme.spacing(2),
    width: '30%'
  },
  marginCardAnounce: {
    margin: theme.spacing(2),
    width: '50%'
  },
  marginCardFinance: {
    margin: theme.spacing(2),
    width: '30%'
  },
  marginCardCalendar: {
    margin: theme.spacing(2),
    width: '50%'
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.quoteText}
        variant="h1"
      >
        Dashboard
      </Typography>
      <div className="form-inline">
        <Typography
          className={classes.marginCardProfile}
          variant="body1"
        >
          <Card className={classes.paddingCard}>
            <Profile />
          </Card>
        </Typography>
        <Typography className={classes.marginCardAnounce}>
          <Card className={classes.paddingCard}>
            <Announce />
          </Card>
        </Typography>
      </div>
      <div className="form-inline">
        <Typography
          className={classes.marginCardCalendar}
          variant="body1"
        >
          <Card className={classes.paddingCard}>
            <h4>Academic Calendar</h4>
          </Card>
        </Typography>
        <Typography className={classes.marginCardFinance}>
          <Card className={classes.paddingCard}>
            <Finance/>
          </Card>
        </Typography>
      </div>
      {/* <Grid>
        <NextCalendar/>
      </Grid> */}
    </div>
  );
};

export default Dashboard;
