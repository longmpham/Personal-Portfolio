import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


import ResumePDF from './ResumePDF'
import ResumeHTML from './ResumeHTML'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Grid container justfiy="center" alignItems="center">
        <Grid item xs={12}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="PDF" />
            <Tab label="HTML" />
          </Tabs>
          {value === 0 && <TabContainer><ResumePDF /></TabContainer>}
          {value === 1 && <TabContainer><ResumeHTML /></TabContainer>}
        </Grid>
      </Grid>

    </div>
  );
}

export default SimpleTabs;