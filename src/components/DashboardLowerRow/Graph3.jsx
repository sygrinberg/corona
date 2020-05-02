import React, { useRef, useState, useEffect } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';

const alerts = [
    'Critical infected dictor\'s level',
    'Respirators on 80% usage'
];

export default ({ padding }) => {
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
        <Paper className="lower-row-graph graph-3">
            <div className="lower-row-graph-container" ref={graphRef}>
                {tabValue
                    ? <div className="built-content">To be built</div>
                    : width
                    ? <iframe src="https://7b5819088c6d4b77ae159891ea10c118.europe-west3.gcp.cloud.es.io:9243/app/kibana#/visualize/edit/d471b8f0-834b-11ea-aa91-b307cde3c7dc?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1y%2Cto%3Anow))" height={height} width={width}></iframe>
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