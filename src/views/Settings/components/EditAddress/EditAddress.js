import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  // Button,
  TextField,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},

  editButton: {
    width: '100%',
    margin: 10
  },

  setRight: {
    marginRight: '10px'
  },

  addressAlign: {
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2)
  },

  checkBoxAlign: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },

  sameAlign: {
    paddingRight: theme.spacing(1)
  },
  spacingAddress: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(4)
  },
  setBottom: {
    paddingBottom: theme.spacing(5)
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

  const country = [
    {
      value: 'thailand',
      label: 'Thailand'
    },
    {
      value: 'united states of america',
      label: 'United States of America'
    },
    {
      value: 'singapore',
      label: 'Singapore'
    }
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <div className={classes.setBottom}>
          <div className={classes.addressAlign}>
            <Typography variant="h5">Address</Typography>
          </div>
          <Divider />

          <Typography>
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

              <div className={classes.spacingAddress}>
                <Typography component={'div'} variant={"h5"}>Current Address</Typography>
              </div>

              <div className={classes.spacingAddress}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Address"
                    margin="dense"
                    multiline
                    name="address"
                    onChange={handleChange}
                    style={{ width: 325 }}
                    type="text"
                    value={values.address}
                    variant="outlined"
                  />
                </Grid>
              </div>
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
              <div className={classes.spacingAddress}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="City"
                    margin="dense"
                    name="city"
                    onChange={handleChange}
                    style={{ width: 325 }}
                    type="text"
                    value={values.city}
                    variant="outlined"
                  />
                </Grid>
              </div>
              <div className={classes.spacingAddress}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="State"
                    margin="dense"
                    name="state"
                    onChange={handleChange}
                    required
                    style={{ width: 325 }}
                    value={values.state}
                    variant="outlined"
                  />
                </Grid>
              </div>
              <div className={classes.spacingAddress}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Zip Code"
                    margin="dense"
                    name="zipcode"
                    onChange={handleChange}
                    required
                    style={{ width: 325 }}
                    value={values.zipcode}
                    variant="outlined"
                  />
                </Grid>
              </div>
              <div className={classes.spacingAddress}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Select Country"
                    margin="dense"
                    name="country"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    // eslint-disable-next-line react/jsx-sort-props
                    style={{ width: 325 }}
                    value={values.country}
                    variant="outlined"
                  >
                    {country.map(option => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </div>

              <div className={classes.spacingAddress}>
                <div className="form-inline justify-content-left">
                  <Typography variant="h5">Mailing Address</Typography>

                  <div className="form-inline justify-content-left">
                    <div className={classes.checkBoxAlign}>
                      <input
                        name="BillingAddress"
                        type="checkbox"
                      />
                    </div>
                    <div className={classes.sameAlign}>
                      Same as current address
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.spacingAddress}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Address"
                    margin="dense"
                    multiline
                    name="address"
                    onChange={handleChange}
                    style={{ width: 325 }}
                    type="text"
                    value={values.address}
                    variant="outlined"
                  />
                </Grid>
              </div>
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
              <div className={classes.spacingAddress}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="City"
                    margin="dense"
                    name="city"
                    onChange={handleChange}
                    style={{ width: 325 }}
                    type="text"
                    value={values.city}
                    variant="outlined"
                  />
                </Grid>
              </div>
              <div className={classes.spacingAddress}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="State"
                    margin="dense"
                    name="state"
                    onChange={handleChange}
                    required
                    style={{ width: 325 }}
                    value={values.state}
                    variant="outlined"
                  />
                </Grid>
              </div>
              <div className={classes.spacingAddress}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Zip Code"
                    margin="dense"
                    name="zipcode"
                    onChange={handleChange}
                    required
                    style={{ width: 325 }}
                    value={values.zipcode}
                    variant="outlined"
                  />
                </Grid>
              </div>
              <div className={classes.spacingAddress}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Select Country"
                    margin="dense"
                    name="country"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    // eslint-disable-next-line react/jsx-sort-props
                    style={{ width: 325 }}
                    value={values.country}
                    variant="outlined"
                  >
                    {country.map(option => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </div>

              <div className={classes.spacingAddress}>
                <div className="form-inline justify-content-left">
                  <Typography variant="h5">Billing Address</Typography>

                  <div className="form-inline justify-content-left">
                    <div className={classes.checkBoxAlign}>
                      <input
                        name="BillingAddress"
                        type="checkbox"
                      />
                    </div>
                    <div className={classes.sameAlign}>
                      Same as current address
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.spacingAddress}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Address"
                    margin="dense"
                    multiline
                    name="address"
                    onChange={handleChange}
                    style={{ width: 325 }}
                    type="text"
                    value={values.address}
                    variant="outlined"
                  />
                </Grid>
              </div>
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
              <div className={classes.spacingAddress}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="City"
                    margin="dense"
                    name="city"
                    onChange={handleChange}
                    style={{ width: 325 }}
                    type="text"
                    value={values.city}
                    variant="outlined"
                  />
                </Grid>
              </div>
              <div className={classes.spacingAddress}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="State"
                    margin="dense"
                    name="state"
                    onChange={handleChange}
                    required
                    style={{ width: 325 }}
                    value={values.state}
                    variant="outlined"
                  />
                </Grid>
              </div>
              <div className={classes.spacingAddress}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Zip Code"
                    margin="dense"
                    name="zipcode"
                    onChange={handleChange}
                    required
                    style={{ width: 325 }}
                    value={values.zipcode}
                    variant="outlined"
                  />
                </Grid>
              </div>
              <div className={classes.spacingAddress}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Select Country"
                    margin="dense"
                    name="country"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    // eslint-disable-next-line react/jsx-sort-props
                    style={{ width: 325 }}
                    value={values.country}
                    variant="outlined"
                  >
                    {country.map(option => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </div>
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
          </Typography>
          
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
        </div>
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;
