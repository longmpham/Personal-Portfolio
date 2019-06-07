import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
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

// add links here
const links = {
  overwatch: "",
  apexLegends: "",
  leagueOfLegends: "",
  borderlands2: "",
  diablo: "",
  counterStrike: "",
};

function ProfileGamingChips() {
  const classes = useStyles();

  function handleDelete() {
    alert('You can\'t delete my interests!');
  }

  function handleClick() {
    // alert('Let me google that for you...');
    return
  }
  // avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
  {require("../../../images/about/headshot.png")}
  return (
    <div className={classes.root}>
      <Chip
        size="small"
        avatar={<Avatar alt="Overwatch" src={require("../../../images/about/games/overwatch.png")} />}
        label="Overwatch"
        color="secondary"
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.overwatch}
      />
      <Chip
        size="small"
        avatar={<Avatar alt="Apex Legends" src={require("../../../images/about/games/apexlegends.png")} />}
        label="Apex Legends"
        color="secondary"
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.apexLegends}
      />
      <Chip
        size="small"
        avatar={<Avatar alt="Counter Strike" src={require("../../../images/about/games/counterstrike.png")} />}
        label="Counter Strike"
        color="secondary"
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.counterStrike}
      />
      <Chip
        size="small"
        avatar={<Avatar alt="League of Legends" src={require("../../../images/about/games/league.png")} />}
        label="League of Legends"
        color="secondary"
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.leagueOfLegends}
      />
      <Chip
        size="small"
        avatar={<Avatar alt="Borderlands 2" src={require("../../../images/about/games/borderlands2.png")} />}
        label="Borderlands"
        color="secondary"
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.borderlands2}
      />
      <Chip
        size="small"
        avatar={<Avatar alt="Diablo 2/3" src={require("../../../images/about/games/diablo.png")} />}
        label="Diablo"
        color="secondary"
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.Diablo}
      />
    </div>
  );
}

export default ProfileGamingChips;