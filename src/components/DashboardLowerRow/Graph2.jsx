import React, { useRef, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chart from 'chart.js';

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

    const iframeWrapper = useCallback(node => {
        if (node !== null) {
          setHeight(node.getBoundingClientRect().height);
          setWidth(node.getBoundingClientRect().width);
        }
    }, []);

    return (
        <Paper className={classes.paper} ref={iframeWrapper}>
            {width
                ? <iframe src="https://7b5819088c6d4b77ae159891ea10c118.europe-west3.gcp.cloud.es.io:9243/app/kibana#/visualize/edit/0e922280-834d-11ea-aa91-b307cde3c7dc?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1y%2Cto%3Anow))" height={height} width={width}></iframe>
                : '' }
        </Paper>
    );
}