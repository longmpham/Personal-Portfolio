import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  bar: {
    height: "10px",
  },
});

export default function LinearDeterminate() {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <Typography align="left" variant="body1" color="textPrimary" component="p">
        Python
      </Typography>
      <LinearProgress variant="determinate" value={85} className={classes.bar}/>
      <br />
      <Typography align="left" variant="body1" color="textPrimary" component="p">
        C
      </Typography>
      <LinearProgress variant="determinate" value={75} className={classes.bar}/>
      <br />
      <Typography align="left" variant="body1" color="textPrimary" component="p">
        C++
      </Typography>
      <LinearProgress variant="determinate" value={60} className={classes.bar}/>
      <br />
      <Typography align="left" variant="body1" color="textPrimary" component="p">
        Java
      </Typography>
      <LinearProgress variant="determinate" value={60} className={classes.bar}/>
      <br />
      <Typography align="left" variant="body1" color="textPrimary" component="p">
        JavaScript
      </Typography>
      <LinearProgress variant="determinate" value={65} className={classes.bar}/>
      <br />
      {/* <LinearProgress color="secondary" variant="determinate" value={completed} /> */}
    </div>
  );
}