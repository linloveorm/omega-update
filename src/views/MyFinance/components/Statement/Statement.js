import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  Typography,
  Divider,
  Button
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
// import typography from 'theme/typography';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import MoneyIcon from '@material-ui/icons/Money';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  pos: {
    marginTop: 5,
    paddingLeft: theme.spacing(1),
    textAlign: 'left'
  },
  pos2: {
    marginTop: 5,
    marginLeft: 15
  },
  Divider: {
    marginTop: 7
  },
  Makepayment: {
    marginTop: 20,

    backgroundColor: '#8B0000',

    width: '20%',

    color: '#FFFFFF',
    margin: 10
  },
  viewDetail: {
    marginTop: 20,
    width: '15%',

    margin: 10
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
  currentBalance: {
    padding: theme.spacing(2),
    fontSize: '30px'
  },
  paddingButton: {
    textAlign: 'right'
  },
  alignCurrent: {
    alignmentBaseline: 'right',
    paddingRight: theme.spacing(2),
    marginTop: 5,
    marginLeft: 15
  },
  upcommingStyle: {
    color: '#807F7F',
    textAlign: 'left'
  },
  balanceStyle: {
    color: '#8B0000',
    textAlign: 'left',
    fontSize: '20px'
  },
  flexAlignment: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  divUpcomming: {
    alignItems: 'flex-end'
  },
  arrowStyle: {
    fontSize: '30px',
    paddingLeft: theme.spacing(1)
  },
  collapsStyle: {
    color: '#807F7F',
    padding: theme.spacing(2)
  },
  tableHeader: {
    textAlign: 'left',
    color:'#807F7F',
    
    
  },
}));

const Statement = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <div>
          <CardHeader
            // subheader="Amount Due 8/11/2020"

            title="Total Amount Due"
          />

          <div className="form-row">
            <div className={classes.flexAlignment}>
              <div>
                <Typography>
                  <div className={classes.currentBalance}>฿123,456.00</div>
                </Typography>
              </div>
              <div>
                <div className={classes.upcommingStyle}>Upcomming Due Date</div>
                <div className={classes.balanceStyle}>8/31/2020</div>
              </div>
            </div>
          </div>
        </div>
        <Divider className={classes.Divider} />
        <div>
          <div className="form-inline">
            <ArrowRightIcon
              aria-controls="detailOfAmountDue"
              aria-expanded="false"
              className={classes.arrowStyle}
              data-toggle="collapse"
              href="#detailOfAmountDue"
              role="button"
            />
            <Typography
              className={classes.pos}
              color="textSecondary"
            >
              Amount Due
            </Typography>
            <Typography
              className={classes.pos}
              color="textSecondary"
            >
              8/11/2020
            </Typography>
            <div className={classes.alignCurrent}>
              <Typography>฿123,456.00</Typography>
            </div>
          </div>
          <div
            className="collapse"
            id="detailOfAmountDue"
          >
            <div className={classes.collapsStyle}>
              <table className="table">
                <thead>
                  <tr>
                    <th
                      className={classes.tableHeader}
                      scope="col"
                    >
                      Details
                    </th>
                    <th
                      className={classes.tableHeader}
                      scope="col"
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.tableHeader}>Printing Charge</td>
                    <td className={classes.tableHeader}>10 Baht</td>
                  </tr>

                  <tr>
                    <td className={classes.tableHeader}>
                      Official Transcript Charge
                    </td>
                    <td className={classes.tableHeader}>100 Baht</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Divider className={classes.Divider} />
        <div>
          <div className="form-inline">
            <ArrowRightIcon
              aria-controls="detailOfAmountDue"
              aria-expanded="false"
              className={classes.arrowStyle}
              data-toggle="collapse"
              href="#detailOfAmountOverDue"
              role="button"
            />
            <Typography
              className={classes.pos}
              color="textSecondary"
            >
              Amount Overdue
            </Typography>

            <Typography className={classes.alignCurrent}>฿0.00</Typography>
          </div>
          <div
            className="collapse"
            id="detailOfAmountOverDue"
          >
            <div className={classes.collapsStyle}>You have no amount overdue</div>
          </div>
        </div>
        {/* <div className={classes.paddingButton}>
          <div className="form-inline flex-row-reverse">
            <Button
              className={classes.Makepayment}
              color="primary"
              padding="full"
              variant="contained"
            >
              Make Payment
            </Button>
          </div>
        </div> */}
      </form>
    </Card>
  );
};

Statement.propTypes = {
  className: PropTypes.string
};

export default Statement;
