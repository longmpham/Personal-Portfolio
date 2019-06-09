import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Container from '@material-ui/core/Container'




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
      <Grid container spacing={0}>

        {/* LEFT COLUMN */}
        <Grid item xs={12} sm={false} md={4}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Education 
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Master's in Software Engineering from the University of Western Ontario, located in Ontario, Canada!
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Education 
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Master's in Software Engineering from the University of Western Ontario, located in Ontario, Canada!
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Education 
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Master's in Software Engineering from the University of Western Ontario, located in Ontario, Canada!
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Education 
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Master's in Software Engineering from the University of Western Ontario, located in Ontario, Canada!
              </Typography>
              <Divider />
            </Grid>
          </Grid>



          <Container maxWidth="sm">
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
          </Container>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid item xs={12} sm={false} md={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={false} md={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Education 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={false} md={8}>
              <Typography variant="body2" color="textPrimary" component="p">
                Master's in Software Engineering from the University of Western Ontario, located in Ontario, Canada!
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={false} md={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Publication 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={false} md={8}>
                <Divider />
            </Grid>
            <Grid item xs={12} sm={false} md={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Work Experience 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={false} md={8}>
                <Divider />
            </Grid>
            <Grid item xs={12} sm={false} md={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Projects
              </Typography>
            </Grid>
            <Grid item xs={12} sm={false} md={8}>
                <Divider />
            </Grid>
            <Grid item xs={12} sm={false} md={4}>
              <Typography variant="h6" color="textPrimary" component="h2">
                Leadership Experience
              </Typography>
            </Grid>
            <Grid item xs={12} sm={false} md={8}>
                <Divider />
            </Grid>
          </Grid>
        </Grid>



      </Grid>
    </div>
  );
}

export default SimpleTabs;