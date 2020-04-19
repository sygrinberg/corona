import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardUpperRow from '../DashboardUpperRow/DashboardUpperRow';
import DashboardLowerRow from '../DashboardLowerRow/DashboardLowerRow';

const useStyles = makeStyles(theme => ({
    dashboard: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: '10px'
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.dashboard}>
                <DashboardUpperRow />
                <DashboardLowerRow />
            </div>
        </div>
    );
}