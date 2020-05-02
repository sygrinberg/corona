import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardController from './DashboardController';
import HeatMap from './HeatMap';
import GaugeSection from './GaugeSection';
import AlertSection from './AlertSection';
import './DashboardUpperRow.scss';

const useStyles = makeStyles(theme => ({
    dashboardUpperRow: {
      display: 'flex',
    //   justifyContent: 'space-between',
      height: '55%',
      width: '100%',
      '& > :not(:last-child)': {
          marginRight: '10px'
      }
    },
    alertsSection: {
        // margin: '5px',
        width: '33%',
        display: 'flex',
        flexDirection: 'column'
    }
}));

const height = 400;
const padding = 20;

export default props => {
    const classes = useStyles();
    return (
        <div className="dashboard-upper-row">
            <DashboardController height={height} padding={padding}/>
            <HeatMap height={height} padding={padding}/>
            <div className={classes.alertsSection}>
                <AlertSection />
                <GaugeSection />
            </div>
        </div>
    );
}