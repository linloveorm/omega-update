import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Table } from 'react-bootstrap';
import {
  Card,
  // Icon,
  // CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  TextField
  // CardHeader,
  // Button,
  // LinearProgress
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import ProgressBar from 'react-bootstrap/ProgressBar';

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
  modalButton: {
    borderRadius: 'none',

    border: 'none'
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
    color: '#000000',
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

    color: '#8B0000'
  },
  divH4Left: {
    textAlign: 'left',
    fontSize: '18px',
    padding: theme.spacing(2),

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
    fontSize: '14 px',
    paddingLeft: theme.spacing(1),

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
  barColor: {
    backgroundColor: '#8B0000',
    color: '#FFFAFA'
  },
  paddingProgressBar: {
    padding: theme.spacing(2)
  },
  marginProgressBar: {
    marginBottom: theme.spacing(3)
  },
  hyperLinkColor: {
    color: '#8B0000'
  },
  tableHeader: {
    textAlign: 'left'
  },
  modalPosition: {
    marginTop: '20%'
  },
  notePadding: {
    padding: theme.spacing(2)
  }
}));

const DropCourse = props => {
  // const axios = require('axios');
  const { className, ...rest } = props;
  const classes = useStyles();

  
  return (
    <div>
      <div>
        <Typography>
          <Typography className={classes.divH3Left}>
            <b>Select Classes to drop</b>
          </Typography>
          <Typography className={classes.textCenter}>
            Fall 2020 | Postgraduate | Electric and Computer Engineering
          </Typography>

          <div>
            <table className="table">
              <thead>
                <tr>
                  <th
                    className={classes.tableHeader}
                    scope="col"
                  >
                    Drop
                  </th>
                  <th
                    className={classes.tableHeader}
                    scope="col"
                  >
                    Course ID
                  </th>
                  <th
                    className={classes.tableHeader}
                    scope="col"
                  >
                    Course Name
                  </th>
                  <th
                    className={classes.tableHeader}
                    scope="col"
                  >
                    Instructor
                  </th>
                  <th
                    className={classes.tableHeader}
                    scope="col"
                  >
                    Schedule
                  </th>
                  <th
                    className={classes.tableHeader}
                    scope="col"
                  >
                    Unit
                  </th>
                  <th
                    className={classes.tableHeader}
                    scope="col"
                  >
                    Room
                  </th>
                  <th
                    className={classes.tableHeader}
                    scope="col"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    className={classes.tableHeader}
                    scope="row"
                  >
                    <input type="checkbox" />
                  </th>
                  <td className={classes.tableHeader}>18-900</td>
                  <td className={classes.tableHeader}>
                    <a
                      className={classes.hyperLinkColor}
                      data-target="#myModal"
                      data-toggle="modal"
                      href="#"
                    >
                      Research, Entrepreneurship and Innovation
                    </a>
                  </td>
                  <td className={classes.tableHeader}>Dr. XXXXX XXXXXXXX</td>
                  <td className={classes.tableHeader}>
                    Mon/Wed 10:30 am - 11:50 am
                  </td>
                  <td className={classes.tableHeader}>12</td>
                  <td className={classes.tableHeader}>TBA</td>
                  <td className={classes.tableHeader}>Open</td>
                </tr>
              
                <tr>
                  <th
                    className={classes.tableHeader}
                    scope="row"
                  >
                    <input type="checkbox" />
                  </th>
                  <td className={classes.tableHeader}>18-900</td>
                  <td className={classes.tableHeader}>
                    <a
                      className={classes.hyperLinkColor}
                      data-target="#myModal"
                      data-toggle="modal"
                      href="#"
                    >
                      Research, Entrepreneurship and Innovation
                    </a>
                  </td>
                  <td className={classes.tableHeader}>Dr. XXXXX XXXXXXXX</td>
                  <td className={classes.tableHeader}>
                    Mon/Wed 10:30 am - 11:50 am
                  </td>
                  <td className={classes.tableHeader}>12</td>
                  <td className={classes.tableHeader}>TBA</td>
                  <td className={classes.tableHeader}>Open</td>
                </tr>
              </tbody>
            </table>

            
          </div>
        </Typography>
      </div>

      
    </div>
  );
};

export default DropCourse;
