import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Dashboard from './components/Dashboard/Dashboard';

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex'
    height: '100%'
  },
  tabs: {
    backgroundColor: '#000000',
    display: 'flex',
    padding: '10px'
  }
}));

function App() {
  const classes = useStyles();
  const value = 0;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
          <Tabs value={value} className={classes.tabs} onChange={() => {}} aria-label="simple tabs example">
            <div style={{marginRight: 'auto'}}>
              <span style={{fontSize: '50px', color: '#FFFFFF'}}>
                  Pan
              </span>
              <span style={{fontSize: '50px', color: 'red'}}>
                  data
              </span>
            </div>
            <Tab label="Outbrakes" value={0}/>
            <Tab label="Hospitals" value={1} />
            <Tab label="First Response" value={2} />
            <Tab label="Tests" value={3} />
            <Tab label="Enforcements" value={4} />
          </Tabs>
      </AppBar>
      <Dashboard />
    </div>
  );
}

export default App;
