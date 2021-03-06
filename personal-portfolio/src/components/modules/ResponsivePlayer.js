import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'



const useStyles = makeStyles(theme => ({
  playerWrapper: {
    position: "relative",
    paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */
  },
  reactPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
  }
}));


function ResponsivePlayer(props) {
  const classes = useStyles();
  return (
    <div className={classes.playerWrapper}>
      <ReactPlayer
        className={classes.reactPlayer}
        url={props.url}
        // url='https://www.youtube.com/watch?v=zWMPBuDphLs'
        width='100%'
        height='100%'
      />
    </div>
  )
}


export default ResponsivePlayer;