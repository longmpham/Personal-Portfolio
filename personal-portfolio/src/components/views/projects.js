import React from 'react';
import PersonalPortfolioCard from '../modules/Cards/PersonalPortfolioCard';
import NoYouDecideCard from '../modules/Cards/NoYouDecideCard';
import KerasGaborCNNCard from '../modules/Cards/KerasGaborCNNCard';
import GoogleKerasImageClassifierCard from '../modules/Cards/GoogleKerasImageClassifierCard';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'


const ProjectsPage = () => (
  <div>
    
    <Container maxWidth="md">
    <h1>Projects</h1>
    {/* <Grid className ={cardGrid}> */}
    <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <PersonalPortfolioCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NoYouDecideCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <KerasGaborCNNCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <GoogleKerasImageClassifierCard />
        </Grid>
    </Grid>

    
    </Container>
  
  </div>
);

export default ProjectsPage;



