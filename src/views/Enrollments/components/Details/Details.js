import React, { useState, useEffect, Component } from 'react';
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
  TextField,
  // CardHeader,
  // Button,
  // LinearProgress,
  Link
} from '@material-ui/core';
import ProgressBar from 'react-bootstrap/ProgressBar';

import AddCourse from './components/AddCourse/AddCourse';
import ConfirmCourse from './components/ConfirmCourse/ConfirmCourse';
import Final from './components/Final/Final';
import DropCourse from './components/DropCourse/DropCourse';
import CourseResult from './components';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';

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

const Details = props => {
  // const axios = require('axios');
  const { className, ...rest } = props;
  const classes = useStyles();
  const [enrollPage, setEnrollPage] = useState(1);

  const [isAdd, setAdd] = useState(true);
  const [isDrop, setDrop] = useState(true);
  const [isCancelAdd, setCancelAdd] = useState(true);
  const [isCancelDrop, setCancelDrop] = useState(true);
  const [isChangeState, getChangeState] = useState(false);
  const [dropState, getDropState] = useState(true);
  const [isModal, setModal] = useState(true);

  const [activeStep, setActiveStrp] = useState(1);


  const handleEnrollPage = event => {
    setEnrollPage(prevState => prevState + 1);
  };

  const handleMadal = event => {
    setDrop(true);
    setEnrollPage(5);
  };

  const handleDrop = event => {
    setEnrollPage(5);
    // setDrop(false);
  };
  const handleAddCourse = event => {
    setEnrollPage(1);
    setAdd(false);
  };
  const handleCancelAdd = event => {
    setCancelAdd(false);
  };

  const handleCancelDrop = event => {
    setCancelDrop(false);
  };

  const handleDropCoursePage = event => {
    setDrop(true);
    setEnrollPage(2);
  };

  const enrollmentStep = () => {
    if (enrollPage == 1) {
      return (
        <div>
          <div className={classes.paddingProgressBar}>
            <ProgressBar
              label={'1/3'}
              now={35}
              variant="danger"
            />
            <div>
              <AddCourse updateEnrollState={getChangeState} />
            </div>
          </div>
          <div className={classes.continueButtonDiv}>
            <button
              className={classes.continueButton}
              id="enrollStatus"
              onClick={handleEnrollPage}
              type="button"
            >
              Continue
            </button>
          </div>
        </div>
      );
    } else if (enrollPage == 2) {
      return (
        <div>
          <div className={classes.paddingProgressBar}>
            <ProgressBar
              label={'2/3'}
              now={70}
              variant="danger"
            />
            <div>
              <ConfirmCourse updateEnrollState={getChangeState} />
            </div>
          </div>
          <div className="form-inline justify-content-center">
            <div className={classes.continueButtonDiv}>
              <button
                className={classes.finishButton}
                id="enrollStatus"
                onClick={handleEnrollPage}
                type="button"
              >
                Confirm Enrollment
              </button>
            </div>
            {getCancelCourse()}
          </div>
        </div>
      );
    } else if (enrollPage == 3) {
      return (
        <div>
          <div className={classes.paddingProgressBar}>
            <ProgressBar
              label={'3/3'}
              now={100}
              variant="danger"
            />
            <div>
              <CourseResult updateEnrollState={getChangeState} />
            </div>
          </div>
          <div className={classes.continueButtonDiv}>
            <button
              className={classes.continueButton}
              id="enrollStatus"
              onClick={handleEnrollPage}
              type="button"
            >
              Done
            </button>
          </div>
        </div>
      );
    } else if (enrollPage == 4) {
      return (
        <div>
          <div className={classes.paddingProgressBar}>
            <div>
              <Final updateEnrollState={getChangeState} />
            </div>
          </div>
          <div className="form-inline justify-content-center">
            <div className={classes.continueButtonDiv}>
              <div>{getAddCourse()}</div>
            </div>
            <div>{getDropCourse()}</div>
          </div>
        </div>
      );
    } else if (enrollPage == 5) {
      console.log(isDrop);
      return (
        <div>
          <div className={classes.paddingProgressBar}>
            <ProgressBar
              label={'1/3'}
              now={35}
              variant="danger"
            />
            <div>
              <DropCourse updateEnrollState={getChangeState} />
            </div>
          </div>
          <div className="form-inline justify-content-center">
            <div className={classes.continueButtonDiv}>
              <button
                className={classes.finishButton}
                data-target="#myModal"
                data-toggle="modal"
                id="enrollStatus"
                type="button"
              >
                Continue
              </button>
            </div>
            <div>
              <div
                className="modal fade"
                id="myModal"
                role="dialog"
              >
                <div className={classes.modalPosition}>
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <div className={classes.divH3Left}>Warning!</div>
                        <button
                          className="close"
                          data-dismiss="modal"
                          type="button"
                        >
                          &times;
                        </button>
                      </div>
                      <div className="modal-body">Do you want to drop?</div>
                      <div className="modal-footer">
                        <button
                          className={classes.finishButton}
                          data-dismiss="modal"
                          onClick={handleDropCoursePage}
                          type="button"
                        >
                          Continue
                        </button>
                        <button
                          className={classes.cancelButton}
                          data-dismiss="modal"
                          type="button"
                          
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {getCancelDropCourse()}
          </div>
        </div>
      );
    }
  };

  const getCancelCourse = () => {
    console.log(enrollPage);
    if (isCancelAdd) {
      return (
        <div className={classes.continueButtonDiv}>
          <button
            className={classes.cancelButton}
            id="enrollStatus"
            onClick={handleCancelAdd}
            type="button"
          >
            Cancel
          </button>
        </div>
      );
    } else {
      if (!dropState) {
        setEnrollPage(5);
        setDrop(true);
        setCancelAdd(true);
      } else {
        setEnrollPage(prevState => prevState - 1);
        setCancelAdd(true);
      }
    }
  };

  const getAddCourse = () => {
    if (isAdd) {
      return (
        <button
          className={classes.finishButton}
          id="enrollStatus"
          onClick={handleAddCourse}
          type="button"
        >
          Add Course
        </button>
      );
    } else {
      setAdd(true);
    }
  };

  const getDropCourse = () => {
    if (isDrop) {
      return (
        <div>
          <button
            className={classes.cancelButton}
            id="enrollStatus"
            onClick={handleDrop}
            type="button"
          >
            Drop Course
          </button>
        </div>
      );
    } else {
      setDrop(true);
      getDropState(false);
    }
  };

  const getCancelDropCourse = () => {
    console.log(enrollPage);
    if (isCancelDrop) {
      return (
        <div className={classes.continueButtonDiv}>
          <button
            className={classes.cancelButton}
            id="enrollStatus"
            onClick={handleCancelDrop}
            type="button"
          >
            Cancel
          </button>
        </div>
      );
    } else {
      setEnrollPage(4);
      setCancelDrop(true);
    }
  };

  return (
    <Card>
      <div className={classes.TopBottomSpacing}>{enrollmentStep()}</div>
    </Card>
  );
};

const getStep = () =>{
  return ['First','Second','Third'];
}

const getStepContent = (step) => {
  switch(step){
    case 1:
      return 'First Step..';
    case 2:
      return 'Second Step..';
    case 3:
      return 'Third Step..';
    case 4:
      return 'Final Step..';
    default:
      return 'You have no enrollment';
  }
}


export default Details;
