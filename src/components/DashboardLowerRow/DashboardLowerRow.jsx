import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LeftGraph from './LeftGraph';
import MiddleGraph from './MiddleGraph';
import RightGraph from './RightGraph';

const useStyles = makeStyles(theme => ({
    dashboardLowerRow: {
      display: 'flex',
    //   justifyContent: 'space-between',
      height: '100%',
      width: '100%',
      marginTop: '10px',
      '& :not(:last-child)': {
          marginRight: '10px'
      }
    }
}));

const height = 400;
const padding = 20;

export default props => {
    const classes = useStyles();
    return (
        <div className={classes.dashboardLowerRow}>
            <LeftGraph />
            <MiddleGraph />
            <RightGraph />
        </div>
    );
}