import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import MailIcon from '@material-ui/icons/Mail'

import SocialMediaPaper from '../SocialMediaPaper'

import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  divider: {
    margin: 10
  },
  contact: {
    display: "block",
  }
});

// const ContactPage = React.forwardRef((props, ref) => (
//   <Link innerRef={ref} to="/contact" {...props} />
// ));

// const GitHubRepo = "https://github.com/longmpham";
// const LinkedIn = "https://www.linkedin.com/in/longmpham/";

function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Profile Picture"
          height="300"
          image= {require("../../../images/about/headshot.png").default}
          title="Profile Picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Long Pham
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Graduated Master's Student studying Software Engineering from the University of Western Ontario.
            <Divider className={classes.divider} />
            I love backpacking around trails and parks. Video games runs through my veins. Programming small projects is always an interest, 
            but learning new technologies is by far the best experience. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.contact}>
        <SocialMediaPaper />
        {/* <Button component={ContactPage} size="small" color="primary">
          Contact
          <MailIcon />
        </Button>
        <Button href={GitHubRepo} rel="noopener" size="small" color="primary">
          GitHub
          <MailIcon />
        </Button>
        <Button href={LinkedIn} rel="noopener" size="small" color="primary">
          LinkedIn
          <MailIcon />
        </Button> */}
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;