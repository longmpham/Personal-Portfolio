import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import CodeIcon from '@material-ui/icons/Code';

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
  python: "",
  c_language: "",
  assembly: "",
  MERN: "",
  keras: "",
  reactjs: "",
  nodejs: "",
};

function ProfileProgrammingChips() {
  const classes = useStyles();

  // function handleDelete() {
  //   alert('You can\'t delete my interests!');
  // }

  function handleClick() {
    // alert('Let me google that for you...');
    return
  }
  // avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
  {require("../../../images/about/headshot.png")}
  return (
    <div className={classes.root}>
      {/* LANGUAGES */}
      <Chip
        size="small"
        avatar={
          <Avatar>
            <CodeIcon />
          </Avatar>
        }
        label="Python"
        color="primary"
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.python}
      />
      <Chip
        size="small"
        avatar={
          <Avatar>
            <CodeIcon />
          </Avatar>
        }
        label="C"
        color="primary"
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.c_language}
      />
      <Chip
        size="small"
        avatar={
          <Avatar>
            <CodeIcon />
          </Avatar>
        }
        label="Assembly"
        color="primary"
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.assembly}
      />
      <Chip
        size="small"
        avatar={
          <Avatar>
            <CodeIcon />
          </Avatar>
        }
        label="MERN"
        color="primary"
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.MERN}
      />


      {/* TOOLS/LIBRARIES */}
      <Chip
        size="small"
        avatar={
          <Avatar>
            <CodeIcon />
          </Avatar>
        }
        label="Keras"
        color=""
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.keras}
      />
      <Chip
        size="small"
        avatar={
          <Avatar>
            <CodeIcon />
          </Avatar>
        }
        label="ReactJS"
        color=""
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.reactjs}
      />
      <Chip
        size="small"
        avatar={
          <Avatar>
            <CodeIcon />
          </Avatar>
        }
        label="NodeJS"
        color=""
        onClick={handleClick}
        // onDelete={handleDelete}
        className={classes.chip}
        component="a"
        href={links.nodejs}
      />
    </div>
    
  );
}

export default ProfileProgrammingChips;