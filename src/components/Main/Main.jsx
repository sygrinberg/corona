import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeatMap from '../DashboardUpperRow/HeatMap';

const useStyles = makeStyles(theme => ({
    heatMapContainer: {
        width: '100%',
        height: '90%'
    }
  }));

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.heatMapContainer}>
            <HeatMap paperWidth={100}/>
        </div>
    );
}