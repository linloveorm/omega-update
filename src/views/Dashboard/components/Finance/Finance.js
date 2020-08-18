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
    width: '45%',
    padding: '5%',
    
    border: 'none',
    color: '#FFFAFA',
    alignmentBaseline: 'right'
  },
  buttonDiv: {
    textAlign: 'right'
  },
  divPadding: {
    padding: theme.spacing(2)
  }
}));

const Finance = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  

  return (
    <div className={classes.divPadding}>
      <form>
        <h4>Finance</h4>
        <table className="table">
          <tbody>
            <tr>
              <td className={classes.tableBody}>
                <b>Amount Due</b>
              </td>
              <td className={classes.tableBody}>฿0.00</td>
            </tr>
            <tr>
              <td className={classes.tableBody}>
                <b>Wallet Balance</b>
              </td>
              <td className={classes.tableBody}>฿30,000.00</td>
            </tr>
          </tbody>
        </table>
      </form>

      <div className={classes.buttonDiv}>
        <button className={classes.continueButton}>See Finance</button>
      </div>
    </div>
  );
};

Finance.propTypes = {
  className: PropTypes.string
};

export default Finance;
