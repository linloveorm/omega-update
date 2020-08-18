import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  Divider,
  Button,
  Typography
} from '@material-ui/core';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import MoneyIcon from '@material-ui/icons/Money';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  },
  walletBalance: {
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),

    fontSize: '30px'
  },
  Divider: {
    marginTop: 9
  },
  paymentMethod: {
    fontSize: '14px',
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1)
  },
  paymentSetting: {
    marginTop: '9%',
    marginLeft: '2%',
    width: '45%'
  },
  addBalance: {
    marginTop: '14%',
    width: '40%',
    marginLeft: '2%',
    marginRight: '2%'
  },
  paymentMethodHistory: {
    float: 'right',
    right: theme.spacing(2)
  },
  setFlexBetween: {
    justifyContent: 'space-between'
  }
}));

const Current = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardHeader title="Wallet Balance" />
        <div className={classes.walletBalance}>฿30,000.00</div>
        <Divider className={classes.Divider} />
        <div className={classes.setFlexBetween}>
          <div className="form-inline ">
            <div className={classes.paymentMethod}>
              <b>Payment Method</b>
            </div>
            <div className={classes.paymentMethodHistory}>
              <Typography>Credit Card *-1234</Typography>
            </div>
          </div>
        </div>
        <div className={classes.paddingButton}>
          <div className="form-inline flex-row-reverse">
            <Button
              className={classes.addBalance}
              color="primary"
              padding="full"
              variant="outlined"
            >
              Add Balance
            </Button>
            
          </div>
        </div>
      </form>
    </Card>
  );
};

Current.propTypes = {
  className: PropTypes.string
};

export default Current;
