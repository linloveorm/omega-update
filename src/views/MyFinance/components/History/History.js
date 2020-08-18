import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, Typography, IconButton } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import typography from 'theme/typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import MoneyIcon from '@material-ui/icons/Money';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  pos: {
    marginTop: 5,
    marginLeft: 15
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
    width: '90%',
    margin: 10
  },
  margin: {
    marginTop: 20,
    width: '90%',
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
  },
  monthDropdowns: {
    paddingLeft: theme.spacing(2)
  },
  alignMonth: {
    textAlign: 'center'
  },
  alignForm: {
    paddingLeft: theme.spacing(2)
  },
  formControl: {
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const History = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [month, setMonth] = React.useState('');

  const handleChange = event => {
    setMonth(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <div className="form-inline justify-content-center">
          <CardHeader
            // subheader="Amount Due 8/11/2020"

            title="Transaction History"
          />
          <div>Filter by </div>
          <div className={classes.alignForm}>
            <div className="dropdown">
              <button
                aria-expanded="false"
                aria-haspopup="true"
                className="btn inline black"
                data-toggle="dropdown"
                id="dropdownMenuButton"
                type="button"
              >
                Month
                <ArrowDropDownIcon/>
              </button>
              
              <div
                aria-labelledby="dropdownMenuButton"
                className="dropdown-menu"
              >
                <a
                  className="dropdown-item"
                  href="#"
                >
                  May 2020
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                >
                  June 2020
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                >
                  July 2020
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.notePadding}>
          <table className="table">
            <thead>
              <tr>
                <th
                  className={classes.tableHeader}
                  scope="col"
                >
                  Date
                </th>
                <th
                  className={classes.tableHeader}
                  scope="col"
                >
                  Due/Payment
                </th>
                <th
                  className={classes.tableHeader}
                  scope="col"
                >
                  Description
                </th>
                <th
                  className={classes.tableHeader}
                  scope="col"
                >
                  Amount Due
                </th>
                <th
                  className={classes.tableHeader}
                  scope="col"
                >
                  Amount Paid
                </th>
                <th
                  className={classes.tableHeader}
                  scope="col"
                >
                  Due Remainding
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={classes.tableHeader}>8/12/20</td>
                <td className={classes.tableHeader}>Due</td>
                <td className={classes.tableHeader}>Fall 2020 Tuition</td>
                <td className={classes.tableHeader}>+฿123,456.00</td>
                <td className={classes.tableHeader}> </td>
                <td className={classes.tableHeader}>฿123,456.00</td>
              </tr>

              <tr>
                <td className={classes.tableHeader}>8/12/20</td>
                <td className={classes.tableHeader}>Paid</td>
                <td className={classes.tableHeader}>Fall 2020 Tuition</td>
                <td className={classes.tableHeader} />
                <td className={classes.tableHeader}>-฿XXX,XXX.XX</td>
                <td className={classes.tableHeader}>฿0.00</td>
              </tr>

              <tr>
                <td className={classes.tableHeader}>8/12/20</td>
                <td className={classes.tableHeader}>Due</td>
                <td className={classes.tableHeader}>Fall 2020 Tuition</td>
                <td className={classes.tableHeader}>+฿XXX,XXX.XX</td>
                <td className={classes.tableHeader}> </td>
                <td className={classes.tableHeader}>฿XXX,XXX.XX</td>
              </tr>

              <tr>
                <td className={classes.tableHeader}>8/12/20</td>
                <td className={classes.tableHeader}>Due</td>
                <td className={classes.tableHeader}>Fall 2020 Tuition</td>
                <td className={classes.tableHeader}>+฿XXX,XXX.XX</td>
                <td className={classes.tableHeader}> </td>
                <td className={classes.tableHeader}>฿XXX,XXX.XX</td>
              </tr>

              <tr>
                <td className={classes.tableHeader}>8/12/20</td>
                <td className={classes.tableHeader}>Due</td>
                <td className={classes.tableHeader}>Fall 2020 Tuition</td>
                <td className={classes.tableHeader}>+฿XXX,XXX.XX</td>
                <td className={classes.tableHeader}> </td>
                <td className={classes.tableHeader}>฿XXX,XXX.XX</td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </Card>
  );
};

History.propTypes = {
  className: PropTypes.string
};

export default History;
