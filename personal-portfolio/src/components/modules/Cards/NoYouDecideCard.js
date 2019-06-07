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
    background: '#ffd7d7',
  },
});

const GitHubRepo = "https://github.com/longmpham/NoYouDecide";

function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Question Mark in Food"
          height="140"
          image= {require("../../../images/projects/no_you_decide.jpg")}
          title="No You Decide"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            No You Decide
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Type what you're hungry for, and you'll get a list of restaurants in the area for that type of food, 
            some quick recipes to make that type of food, and groceries to buy if you want to start from scratch!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={GitHubRepo} rel="noopener" size="small" color="primary">
          GitHub Repo (Incomplete)
          <LaunchIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;