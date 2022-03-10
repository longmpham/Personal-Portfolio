import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import blogData from '../../documents/blogData.js'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const Blog = () => {

  const useStyles = makeStyles(theme => ({
    blogArticle: {
      padding: theme.spacing(2),
      textAlign: "left",
      margin: theme.spacing(2)
    },
  }));

  const [blogs, setBlogs] = React.useState(blogData)

  const classes = useStyles();
  
  return (
    <>
      <Container className="root" maxWidth="md">
        {/* main blog */}
        <Grid container spacing={0}>
          {/* main items */}
          <Grid item md={12}>
            {blogs.map(blog => {
              return (
                <Paper className={classes.blogArticle}>
                  <Typography variant="h3">{blog.title}</Typography>
                  <Typography variant="body2">{blog.date}</Typography>
                  {blog.body.map(paragraph => {
                    return (
                      <div>
                        <Typography variant="body1">{paragraph}</Typography>
                        <br />
                      </div>
                    )
                  })}
                </Paper>
              )
            })}
          </Grid>
          {/* <Grid item md={2}>
            <Paper className={classes.blogArticle}>
              <Button>{blogs.map(blog => {
                return (
                  <>
                    <Typography variant="h6">{blog.title}</Typography>
                    <Typography variant="body2">{blog.date}</Typography>
                  </>
                )
              })}</Button>
            </Paper>
          </Grid> */}
        </Grid>
      </Container>
    </>
  )
}

export default Blog