import React, { useState } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Dashboard from './components/Dashboard/Dashboard';
import Announcements from './components/Announcements/Announcements';

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex'
    height: '100%'
  },
  tabs: {
    backgroundColor: '#000000',
    display: 'flex',
    padding: '10px 10px 10px 20px'
  }
}));

function App() {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(1);



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
          <Tabs value={tabValue} className={classes.tabs} onChange={(event, newValue) => setTabValue(newValue)} aria-label="simple tabs example">
            <div style={{marginRight: 'auto'}}>
              <span style={{fontSize: '50px', color: '#FFFFFF'}}>
                  Pan
              </span>
              <span style={{fontSize: '50px', color: 'red'}}>
                  data
              </span>
            </div>
            <Tab label="Current Outbreak" value={0}/>
            <Tab label="Announcements" value={1}/>
            <Tab label="Diagnosed only" value={2}/>
            <Tab label="Hospitals" value={3} />
            <Tab label="First Response" value={4} />
            <Tab label="Tests" value={5} />
            <Tab label="Enforcements" value={6} />
          </Tabs>
      </AppBar>
      {tabValue === 0 ? <Dashboard /> : ''}
      {tabValue === 1 ? <Announcements /> : ''}
    </div>
  );
}

export default App;
