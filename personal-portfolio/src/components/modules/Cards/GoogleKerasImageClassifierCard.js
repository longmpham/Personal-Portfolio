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

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  cardHeight: {
    maxHeight: 300,
    height:160
  },
});

const GitHubRepo = "https://github.com/longmpham/googleimageskeras";

function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea href={GitHubRepo}>
        <CardMedia
          component="img"
          alt="MERN Stack"
          height="140"
          image= {require("../../../images/projects/keras.png")}
          title="Personal Portfolio"
        />
        <CardContent className={classes.cardHeight}>
          <Typography gutterBottom variant="h5" component="h2">
          Keras Binary Classifier using Google Images
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Using the Keras Framework built off of TensorFlow, I was able to create a simple dog 
            classifier that pulled any number of images from Google Images using BeautifulSoup's web scraper
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={GitHubRepo} rel="noopener" size="small" color="primary">
          GitHub Repo
          <LaunchIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;