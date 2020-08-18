import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  // CardActions,
  Divider,
  Grid,
  // Button,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  editButton: {
    width: '100%',
    margin: 10
  }
  // address: {
  //   direction:"row"
  // }
}));

const AccountDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: 'Kamin',
    lastName: 'Ph',
    email: 'kamin@cmkl.ac.th',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  // const country = [
  //   {
  //     value: 'thailand',
  //     label: 'Thailand'
  //   },
  //   {
  //     value: 'united states of america',
  //     label: 'United States of America'
  //   },
  //   {
  //     value: 'singapore',
  //     label: 'Singapore'
  //   }
  // ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          // subheader="The information can be edited"
          title="Contact"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            direction="column"
            spacing={3}
          >
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                margin="dense"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid> */}

            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Address"
                margin="dense"
                name="address"
                onChange={handleChange}
                type="text"
                value={values.address}
                variant="outlined"
              />
            </Grid> */}

            <CardHeader title="Primary Contract" />
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Name"
                margin="dense"
                name="name1"
                onChange={handleChange}
                required
                style={{ width: 500 }}
                value={values.name1}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Relationship"
                margin="dense"
                name="relationship1"
                onChange={handleChange}
                required
                style={{ width: 500 }}
                value={values.relationship1}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                margin="dense"
                name="phone1"
                onChange={handleChange}
                required
                style={{ width: 500 }}
                value={values.phone1}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email"
                margin="dense"
                name="email1"
                onChange={handleChange}
                required
                style={{ width: 500 }}
                value={values.email1}
                variant="outlined"
              />
            </Grid>

            <CardHeader
              // subheader="The information can be edited"
              title="Secondary Contact"
            />
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Name"
                margin="dense"
                name="name2"
                onChange={handleChange}
                required
                style={{ width: 500 }}
                value={values.name2}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Relationship"
                margin="dense"
                name="relationship2"
                onChange={handleChange}
                required
                style={{ width: 500 }}
                value={values.relationship2}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                margin="dense"
                name="phone2"
                onChange={handleChange}
                required
                style={{ width: 500 }}
                value={values.phone2}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email"
                margin="dense"
                name="email2"
                onChange={handleChange}
                required
                style={{ width: 500 }}
                value={values.email2}
                variant="outlined"
              />
            </Grid>
          </Grid>

          {/* <CardHeader
              // subheader="The information can be edited"
              title="Emergency Contact #2"
              
            />
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Name #2"
                margin="dense"
                name="name2"
                onChange={handleChange}
                required
                value={values.name2}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Relationship"
                margin="dense"
                name="relationship2"
                onChange={handleChange}
                required
                value={values.relationship2}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                margin="dense"
                name="phone1"
                onChange={handleChange}
                required
                value={values.phone1}
                variant="outlined"
              />
            </Grid> */}
        </CardContent>
        <Divider />
        {/* <CardActions>
          <Button
            className={classes.Button}
            color="primary"
            variant="contained"
            fullWidth
          >
            Save details
          </Button>
        </CardActions>
        <CardActions>
          <Button className={classes.Button} variant="outlined" color="default" fullWidth>
            Discard Changes
          </Button>
        </CardActions> */}
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;
