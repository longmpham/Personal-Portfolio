import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LaunchIcon from '@material-ui/icons/Launch'

// for videos
import ReactPlayer from 'react-player'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

const GitHubRepo = "https://twitch.tv/noobinator_ow";

function VideoMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="iframe"
          alt="Twitch TV"
          height="300"
          image= {require("../../../images/about/games/overwatch.mp4")}
          title="Twitch.tv/noobinator_ow"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Twitch.tv
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Sometimes I stream video games. Recently, they are mostly just variety...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={GitHubRepo} rel="noopener" size="small" color="primary">
          Twitch.tv/Noobinator_ow
          <LaunchIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default VideoMediaCard;