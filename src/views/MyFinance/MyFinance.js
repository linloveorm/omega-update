import React from 'react';
import { makeStyles } from '@material-ui/styles';
// import { IconButton, Grid, Typography } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
// import { Paper } from '@material-ui/core';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import { ProductsToolbar} from './components';
// import { ProductsToolbar, ProductCard } from './components';
// import mockData from './data';

import { Current, Option, Statement, History } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5)
  },
  content: {
    marginTop: theme.spacing(4)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const MyFinance = () => {
  const classes = useStyles();

  // const [products] = useState(mockData);

  return (
    <div className={classes.root}>
      {/* <ProductsToolbar /> */}
      <div>
        <Typography
          className={classes.quoteText}
          gutterBottom
          variant="h1"
        >
          My Finance
        </Typography>
        <Typography
          className={classes.name}
          variant="body1"
        />
      </div>

      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          lg={6}
          md={12}
          xl={7}
          xs={12}
        >
          <Statement />
        </Grid>
        <Grid
          item
          lg={5}
          sm={6}
          xl={3}
          xs={12}
        >
          {/* <Current /> */}
        </Grid>

        <Grid
          item
          lg={11}
          md={12}
          xl={12}
          xs={12}
        >
          {/* <History /> */}
        </Grid>
        
      </Grid>
    </div>
  );
};

export default MyFinance;
