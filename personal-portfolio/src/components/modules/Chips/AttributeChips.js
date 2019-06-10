import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));


function AttributeChips() {
  const classes = useStyles();

  // avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
  return (
    <div className={classes.root}>
      <Chip size="small" label="Leader" color="secondary" className={classes.chip} />
      <Chip size="small" label="Excellent Communication Skills" color="primary" className={classes.chip} />
      <Chip size="small" label="Problem Solver" color="primary" className={classes.chip} />
      <Chip size="small" label="Friendly" color="primary" className={classes.chip} />
      <Chip size="small" label="Dependent" color="primary" className={classes.chip} />
      <Chip size="small" label="Fast Learner" color="primary" className={classes.chip} />

    </div>
  );
}

export default AttributeChips;