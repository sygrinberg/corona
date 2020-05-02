import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const alerts = [
    'Critical infected dictor\'s level',
    'Respirators on 80% usage'
];

const useStyles = makeStyles(theme => ({
    paper: {
        width: '23%',
        height: '100%'
    },
    graphIframe: {
        height: "calc('100%')",
        width: "calc('100%')"
    }
  }));

  export default ({ padding }) => {
    const classes = useStyles({ padding });

    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null); 
    const [tabValue, setTabValue] = React.useState(0);
    const graphRef = useRef();

    useEffect(() => {
        if (!height && graphRef.current) {
            setHeight(graphRef.current.getBoundingClientRect().height);
            setWidth(graphRef.current.getBoundingClientRect().width);
        }
    });

    return (
        <Paper className="lower-row-graph graph-2">
            <div className="lower-row-graph-container" ref={graphRef}>
                {tabValue
                    ? <div className="built-content">To be built</div>
                    : width
                        ? <iframe src="https://7b5819088c6d4b77ae159891ea10c118.europe-west3.gcp.cloud.es.io:9243/app/kibana#/visualize/edit/0e922280-834d-11ea-aa91-b307cde3c7dc?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1y%2Cto%3Anow))" height={height} width={width}></iframe>
                        : '' }
            </div>
            <BottomNavigation
                value={tabValue}
                onChange={(event, newValue) => {
                    setTabValue(newValue);
                }}
                showLabels
                className="lower-row-graph-tabs"
                >
                <BottomNavigationAction label="Recents" />
                <BottomNavigationAction label="Favorites" />
                <BottomNavigationAction label="Nearby" />
            </BottomNavigation>
        </Paper>
    );
}