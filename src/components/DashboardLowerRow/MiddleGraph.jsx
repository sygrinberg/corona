import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chart from 'chart.js';

const alerts = [
    'Critical infected dictor\'s level',
    'Respirators on 80% usage'
];

const useStyles = makeStyles(theme => ({
    paper: {
        flex: 0.33,
        width: '100%'
    },
    canvas: {
        height: "calc('100%')",
        width: "calc('100%')"
    }
  }));

  export default ({ height, padding }) => {
    const classes = useStyles({ height, padding });
    const canvsdEl = useRef();

    useEffect(() => {
        console.log('canvsdEl');
        console.log(canvsdEl);
        const ctx = canvsdEl.current.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ["1900", "1950", "1999", "2050"],
              datasets: [
                {
                  label: "Africa",
                  backgroundColor: "#3e95cd",
                  data: [133,221,783,2478]
                }, {
                  label: "Europe",
                  backgroundColor: "#8e5ea2",
                  data: [408,547,675,734]
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: 'Population growth (millions)'
              }
            }
        });
    }, [canvsdEl])

    return (
        <Paper className={classes.paper}>
            <canvas className={classes.canvas} ref={canvsdEl} />
        </Paper>
    );
}