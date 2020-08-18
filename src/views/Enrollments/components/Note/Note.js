import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Table } from 'react-bootstrap';
import { Card, CardHeader, Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },

  continueButton: {
    alignmentBaseline: 'center',
    backgroundColor: '#8B0000',
    borderRadius: '6px',
    width: '30%',
    padding: '14px',
    border: 'none',
    color: '#FFFAFA'
  },
  finishButton: {
    alignmentBaseline: 'center',
    backgroundColor: '#8B0000',
    borderRadius: '6px',

    padding: '14px',
    border: 'none',
    color: '#FFFAFA'
  },
  cancelButton: {
    alignmentBaseline: 'center',
    backgroundColor: '#C0C0C0',
    borderRadius: '6px',

    padding: '14px',
    border: 'none',
    color: '#FFFAFA'
  },
  searchBtn: {
    backgroundColor: '#8B0000',
    borderRadius: '6px',

    border: 'none',
    color: '#FFFAFA',
    padding: '10px'
  },
  divSearchBtn: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1)
  },
  continueButtonDiv: {
    padding: theme.spacing(1),
    textAlign: 'center'
  },
  textCenter: {
    textAlign: 'center',
    padding: theme.spacing(3),
    color: '#8B0000',
    fontSize: '16px'
  },
  divH2Left: {
    textAlign: 'left',
    fontSize: '26px',
    color: '#8B0000',
    padding: theme.spacing(2)
  },
  divH3Left: {
    textAlign: 'left',
    fontSize: '20px',
    padding: theme.spacing(2),

    color: '#000000'
  },
  divH4Left: {
    textAlign: 'left',
    fontSize: '18px',
    paddingLeft: theme.spacing(2),

    color: '#8B0000'
  },
  divH5Left: {
    textAlign: 'center',
    fontSize: '16px',
    paddingLeft: theme.spacing(2),

    color: '#8B0000'
  },

  divH6Left: {
    textAlign: 'left',
    fontSize: '12 px',
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: '#8B0000'
  },
  divPadding: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  inputBox: {
    width: '80%',
    height: '150%'
  },
  successIcon: {
    colors: '#20BF00'
  },
  errorIcon: {
    colors: '#8B0000'
  },
  TopBottomSpacing: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  tableBody:{
    textAlign:'left',
    paddingLeft: theme.spacing(2),
    
  },
  paddingSpace: {
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}))

const Note = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <form>
      <div >
        <table className="table">
          <thead >
            <tr>
              <th className={classes.tableBody} scope="col">Schedule</th>
              <th className={classes.tableBody} scope="col">Title</th>
             
            </tr>
          </thead>
          <tbody >
            <tr>
              <td className={classes.tableBody}>August 24 – 30</td>
              <td className={classes.tableBody}>Course registration</td>
              
            </tr>
            <tr>
              <td className={classes.tableBody}>September 14</td>
              <td className={classes.tableBody}>Course Add Deadline</td>
              
            </tr>
            <tr>
              <td className={classes.tableBody}>October 12</td>
              <td className={classes.tableBody}>Course Drop Deadline*Assign Withdrawal Grade after this date</td>
              
            </tr>
            <tr>
              <td className={classes.tableBody}>November 9</td>
              <td className={classes.tableBody}>Course Withdrawal Grade Deadline*No Course Withdrawal after this date</td>
              
            </tr>
            <tr>
              <td className={classes.tableBody}>November 16 – 20</td>
              <td className={classes.tableBody}>Spring 2021 Registration Week</td>
              
            </tr>
          </tbody>
          
          
          
        </table>
      </div>

      
    </form>
  );
};

export default Note;
