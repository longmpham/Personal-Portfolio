import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail'

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  cardHeight: {
    maxHeight: 300,
    height:160
  },
});

const ContactPage = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/contact" {...props} />
));

function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Keras"
          height="140"
          image= {require("../../../images/projects/keras.png")}
          title="Keras Gabor CNN"
        />
        <CardContent className={classes.cardHeight}>
          <Typography gutterBottom variant="h5" component="h2">
            Keras Gabor CNN
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Master's Thesis working on a Gabor filter initialized convolutional neural network (CNN) to classify 
            images from 4 different datasets (MNIST, CIFAR-10, CIFAR-100, and a local Rock Dataset used for space rock analysis)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component={ContactPage} size="small" color="primary">
          Contact
          <MailIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;