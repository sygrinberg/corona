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
        // flex: 0.33,
        width: '33%'
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
            datasets: [{
                label: "Europe",
                type: "line",
                borderColor: "#8e5ea2",
                data: [408,547,675,734],
                fill: false
              }, {
                label: "Africa",
                type: "line",
                borderColor: "#3e95cd",
                data: [133,221,783,2478],
                fill: false
              }, {
                label: "Europe",
                type: "bar",
                backgroundColor: "rgba(0,0,0,0.2)",
                data: [408,547,675,734],
              }, {
                label: "Africa",
                type: "bar",
                backgroundColor: "rgba(0,0,0,0.2)",
                backgroundColorHover: "#3e95cd",
                data: [133,221,783,2478]
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: 'Population growth (millions): Europe & Africa'
            },
            legend: { display: false }
          }
      });
    }, [canvsdEl])

    return (
        <Paper className={classes.paper}>
            <canvas className={classes.canvas} ref={canvsdEl} />
        </Paper>
    );
}