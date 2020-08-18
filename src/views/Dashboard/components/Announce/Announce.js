import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  LinearProgress
} from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

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
  tableBody: {
    textAlign: 'left',
    paddingLeft: theme.spacing(2)
  },
  paddingSpace: {
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  divPadding: {
    padding: theme.spacing(2),
    
  }
}));

const Announce = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={classes.divPadding}>
      <form>
        <h4>Announcements</h4>
        <table className="table">
          <tbody>
          <tr>
              <td className={classes.tableBody}>11/08/20 17:00</td>
              <td className={classes.tableBody}>CMKL Party on Aug 13,2020</td>
            </tr>
            <tr>
              <td className={classes.tableBody}>13/08/20 12:00</td>
              <td className={classes.tableBody}>Travel around the university</td>
            </tr>
            <tr>
              <td className={classes.tableBody}>14/08/20 14:30</td>
              <td className={classes.tableBody}>Orientation Day on Aug 31,2020</td>
            </tr>
            <tr>
              <td className={classes.tableBody}>20/08/20 12:00</td>
              <td className={classes.tableBody}>Welcome Party on Sep 1,2020</td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

Announce.propTypes = {
  className: PropTypes.string
};

export default Announce;
