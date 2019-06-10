import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import PetsIcon from '@material-ui/icons/Pets';
import ComputerIcon from '@material-ui/icons/Computer';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

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

// add links here
const links = {
  backpacking: "",
  dogs: "",
  gaming: "",
  deepLearning: "",
};

function ProfileInterestChips() {
  const classes = useStyles();

  // function handleDelete() {
  //   alert('You can\'t delete my interests!');
  // }

  function handleClick() {
    alert('Let me google that for you...');
  }
  // avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
  return (
    <div className={classes.root}>
      <Chip
        size="small"
        avatar={
          <Avatar>
            <DirectionsRunIcon />
          </Avatar>
        }
        label="Backpacking"
        color="primary"
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.backpacking}
      />
      <Chip
        size="small"
        avatar={
          <Avatar>
            <PetsIcon />
          </Avatar>
        }
        label="Dogs"
        color="primary"
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.dogs}
      />
      <Chip
        size="small"
        avatar={
          <Avatar>
            <VideogameAssetIcon />
          </Avatar>
        }
        label="Gaming"
        color="primary"
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.gaming}
      />
      <Chip
        size="small"
        avatar={
          <Avatar>
            <ComputerIcon />
          </Avatar>
        }
        label="Deep Learning"
        color="primary"
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.deepLearning}
      />
    </div>
  );
}

export default ProfileInterestChips;