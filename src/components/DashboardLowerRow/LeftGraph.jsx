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
            type: 'horizontalBar',
            data: {
              labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                  data: [2478,5267,734,784,433]
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
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