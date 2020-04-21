import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import Graph3 from './Graph3';
import Graph4 from './Graph4';
// import MiddlGraph from './MiddleGraph';
// import RightGraph from './RightGraph';

const useStyles = makeStyles(theme => ({
    dashboardLowerRow: {
    display: 'flex',
    height: '35%',
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
            <Graph1 />
            <Graph2 />
            <Graph3 />
            <Graph4 />
        </div>
    );
}