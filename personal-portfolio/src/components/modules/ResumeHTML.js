import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'





const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleTabs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {/* LEFT COLUMN */}
        <Grid item xs={12} sm={3} md={4}>

        </Grid>

        {/* RIGHT COLUMN */}
        <Grid item xs={12} sm={9} md={8}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Education 
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body2" color="textPrimary" component="p">
                Master's in Software Engineering from the University of Western Ontario, located in Ontario, Canada!
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Interests 
              </Typography>
            </Grid>
            <Grid item xs={8}>
                <Divider />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Games 
              </Typography>
            </Grid>
            <Grid item xs={8}>
                <Divider />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Programming Tools and Languages
              </Typography>
            </Grid>
            <Grid item xs={8}>
                <Divider />
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}

export default SimpleTabs;