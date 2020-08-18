import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button, Card } from '@material-ui/core';
import { Details, History, Note } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  con: {
    // height: 300,
  },
  enrollButton: {
    alignmentBaseline: 'center',
    backgroundColor: '#8B0000',
    borderRadius: '6px',
    width: '30%',
    padding: '14px',
    border: 'none',
    color: '#FFFAFA'
  },
  enrollButtonDiv: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    textAlign: 'center'
  },
  quoteText: {
    textAlign: 'center',
    paddingBottom: theme.spacing(3)
  },
  paddingSpace: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  buttonSpace: {
    paddingBottom: theme.spacing(2)
  },
  Toppadding: {
    paddingTop: theme.spacing(1)
  },
  divH6Left: {
    textAlign: 'left',
    fontSize: '14 px',
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(2),

    color: '#000000'
  },
  paddingCard: {
    paddingTop: theme.spacing(2)
  },
  divH4Left: {
    textAlign: 'left',
    fontSize: '18px',
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),

    color: '#000000'
  },
  cardSize: {
    margin: '3'
  },
  tableHeader: {
    textAlign: 'center'
  },
  notePadding:{
    padding:theme.spacing(2)
  }
}));

const Enrollments = () => {
  const classes = useStyles();
  const [isEnroll, setEnroll] = useState(true);


  const handleChange = event => {
    setEnroll(event.target.status);
  };

  const checkEnroll = () => {
    if (isEnroll) {
      return (
        <div>
          <Card>
            <div className={classes.paddingSpace}>
              <div className={classes.Toppadding}>
                You have no enrollment for Fall 2020
              </div>
              <div className={classes.buttonSpace}>
                <div>
                  <Typography>
                    <div className={classes.enrollButtonDiv}>
                      <button
                        className={classes.enrollButton}
                        id="enrollStatus"
                        onClick={handleChange}
                        type="button"
                      >
                        Enroll
                      </button>
                    </div>
                  </Typography>
                </div>
              </div>
            </div>
          </Card>
          <div className={classes.paddingCard}>
            <Card>
              <div className={classes.paddingSpace}>
                <div className="form-inline">
                  <div className={classes.divH4Left}>
                    <b>Important dates:</b>
                  </div>
                  <div className={classes.divH4Left}>Fall 2020</div>
                </div>
                <div className={classes.notePadding}>
                  <Note />
                </div>
              </div>
            </Card>
          </div>
          <div className={classes.paddingCard}>
            <Card>
              <div className={classes.paddingSpace}>
                <div className={classes.divH4Left}>
                  <b>Enrollment History</b>
                </div>
                <div className={classes.divH6Left}>Fall 2020</div>
                <div className={classes.notePadding}>
                  <History />
                </div>
              </div>
            </Card>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Details />
        </div>
      );
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.cardSize}>
        <Typography
          className={classes.quoteText}
          variant="h1"
        >
          My Enrollment
        </Typography>
        <div className={classes.enrollButtonDiv}>{checkEnroll()}</div>
      </div>
    </div>
  );
};

export default Enrollments;
