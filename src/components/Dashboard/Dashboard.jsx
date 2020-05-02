import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardUpperRow from '../DashboardUpperRow/DashboardUpperRow';
import DashboardLowerRow from '../DashboardLowerRow/DashboardLowerRow';
import './Dashboard.scss';

const useStyles = makeStyles(theme => ({
    dashboard: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#dbdada',
      height: '100%',
      width: '100%',
      padding: '10px'
    }
}));

export default props => {
    return (
        <div className="dashboard">
            <DashboardUpperRow />
            <DashboardLowerRow />
        </div>
    );
}