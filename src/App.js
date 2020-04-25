import React, { useState } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Dashboard from './components/Dashboard/Dashboard';
import Announcements from './components/Announcements/Announcements';
import Main from './components/Main/Main';
import euroLogo from './images/EU.png';
import pandataLogo from './images/pandataLogoWhite.png';

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex'
    height: '100%'
  },
  euroLogo: {
    height: '80px',
    width: '100px',
    marginLeft: '20px',
  },
  pandataLogo: {
    height: '75px',
    width: '350px',
  },
  tabs: {
    backgroundColor: '#1d115b',
    display: 'flex',
  }
}));

function App() {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
          <Tabs value={tabValue} className={classes.tabs} onChange={(event, newValue) => setTabValue(newValue)} aria-label="simple tabs example">
            <div style={{marginRight: 'auto'}}>
              <img src={euroLogo} className={classes.euroLogo} />
              <img src={pandataLogo} className={classes.pandataLogo} />
            </div>
            <Tab label="Main" value={0}/>
            <Tab label="Current Outbreak" value={1}/>
            <Tab label="Announcements" value={2}/>
            <Tab label="Diagnosed only" value={3}/>
            <Tab label="Hospitals" value={4} />
            <Tab label="First Response" value={5} />
            <Tab label="Enforcements" value={6} />
          </Tabs>
      </AppBar>
      {tabValue === 0 ? <Main /> : ''}
      {tabValue === 1 ? <Dashboard /> : ''}
      {tabValue === 2 ? <Announcements /> : ''}
    </div>
  );
}

export default App;
