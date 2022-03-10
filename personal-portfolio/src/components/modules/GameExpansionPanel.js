import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Avatar from '@material-ui/core/Avatar';
import { Divider } from '@material-ui/core';

// import overwatch from "../../images/about/games/overwatch.png";
// import apex from "../../images/about/games/apexlegends.png";
// import league from "../../images/about/games/league.png";
// import borderlands from "../../images/about/games/borderlands2.png";
// import diablo from "../../images/about/games/diablo.png";
// import gm_ow from "../../images/about/games/gm_ow.png";
// import top500 from "../../images/about/games/top500.gif";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    margin: "auto"
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));

const images = {
  overwatch: require("../../images/about/games/overwatch.png").default,
  apex: require("../../images/about/games/apexlegends.png").default,
  league: require("../../images/about/games/league.png").default,
  borderlands: require("../../images/about/games/borderlands2.png").default,
  diablo: require("../../images/about/games/diablo.png").default,
  gm_ow: require("../../images/about/games/gm_ow.png").default,
  top500: require("../../images/about/games/top500.gif").default,
}

// const images = {
//   overwatch: "/static/media/overwatch.e7bba908.png",
//   apex: "/static/media/apexlegends.da24c669.png",
//   league: "/static/media/league.e50e0432.png",
//   borderlands: "/static/media/borderlands2.08a41351.png",
//   diablo: "/static/media/diablo.ef47281b.png",
//   gm_ow: "/static/media/gm_ow.png",
//   top500: "/static/media/top500.gif"
// }

function SimpleExpansionPanel() {
  const classes = useStyles();

  // handle the change between panels
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Avatar alt="Overwatch Icon" src={images.overwatch} className={classes.bigAvatar} />
          <Typography className={classes.heading}>Overwatch</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Player since the beta, I've climbed my way to GM and have reached "top-500" before. 
            This means that at one point in the game, I was "the 500th or greater, best player"
            <Divider />
            I have been on the Western Collegiate team for Overwatch for 3 years as a leader, player, and co-captain.
            <Divider />
            I have coached a Gold team for about 1 year (they are now Platinum) 
          </Typography>
          <Avatar alt="Overwatch Top-500 Icon" src={images.top500} className={classes.bigAvatar} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar alt="Remy Sharp" src={images.apex} className={classes.bigAvatar} />
          <Typography className={classes.heading}>Apex Legends</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Played the game since its release! It's definitely one of the better BRs (battle-royales). 
            I mostly play Lifeline but I can definitely flex. I win tons :)
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar alt="Remy Sharp" src={images.league} className={classes.bigAvatar} />
          <Typography className={classes.heading}>League</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Total, complete noob. I have some knowledge from previous games 
            like Heroes of Newerth and Dota 2 but only some things carry over. Help me.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar alt="Remy Sharp" src={images.diablo} className={classes.bigAvatar} />
          <Typography className={classes.heading}>Diablo 2/3</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Have been a huge die-hard fan of the Diablo series. I have well over 4 thousand hours combined for both games. 
            Unluckily, they were during my undergraduate. But...I'm still here!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* <ExpansionPanel disabled>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel> */}
    </div>
  );
}

export default SimpleExpansionPanel;