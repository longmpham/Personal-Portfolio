import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';


import MailIcon from '@material-ui/icons/Mail';

import SocialMediaPaper from '../modules/SocialMediaPaper'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4,0,0,0),
    height: "100vh",
    // width: "100%"
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  temp: {
    backgroundColor: "grey",
  },
}));


function ContactPage() {
  const classes = useStyles();

  return (
  <div className={classes.root}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
          <Hidden xsDown>
            <Grid item xs={false} sm={5} md={7} className={classes.image}>
              {/* can add text here if you want. */}
            </Grid>
          </Hidden>

          <Grid item xs={12} sm={7} md={5} component={Paper} elevation={4} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <MailIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Contact Me!
              </Typography>
              <form className={classes.form} Validate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows="5"
                  required
                  fullWidth
                  name="message"
                  name="message"
                  label="Message"
                  type="message"
                  id="message"
                  // autoComplete="message"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Send
                </Button>
              </form>
              <SocialMediaPaper />
            </div>
          </Grid>
          
      </Grid>
    </Container>
  </div>
  );
}

export default ContactPage;