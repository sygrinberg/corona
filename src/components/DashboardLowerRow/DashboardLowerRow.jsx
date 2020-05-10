import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import Graph3 from './Graph3';
import Graph4 from './Graph4';
import './DashboardLowerRow.scss';
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

export default ({ data, filterString }) => {
    const classes = useStyles();
    const {
        categoryState, ageRangeState, feverStateRange, timeRangeState, sicknessLevelState 
    } = data;
    return (
        <div className="lower-row">
            <Graph1 data={data}/>
            <Graph2 filterString={filterString}/>
            <Graph3 data={data}/>
            <Graph4 data={data}/>
        </div>
    );
}