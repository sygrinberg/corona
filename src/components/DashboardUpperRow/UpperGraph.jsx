import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        height: "100%",
        width: '50%',
        // margin: '5px',
        padding: props => props.padding,
    },
    canvas: {
        height: "100%",
        width: "100%"
    }
  }));

export default ({ height, padding }) => {
    const classes = useStyles({ height, padding });
    const canvsdEl = useRef();
    
    const [state, setState] = useState(0);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setState(state + 1);
        });

        const ctx = canvsdEl.current.getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Label 1','Label 2','Label 3','Label 4','Label 5','Label 6','Label 7','Label 8','Label 9','Label 10'],
                datasets: [
                    {
                        label: "Data1",
                        borderColor: "#3e95cd",
    
                        data: [29, 49, 39, 49, 37, 57, 57, 45, 82, 34]
                    },
                    {
                        label: "Data2",
                        borderColor: "#c45850",
                        data: [55, 57, 85, 72, 82, 75, 83, 222, 22, 67]
                    },
                    {
    
                        label: "Data3",
                        borderColor: "#c45850",
                        data: [964, 42, 12, 67, 97, 23, 61, 45, 60, 80]
                    }
                ]
            }
        });
    }, [canvsdEl])

    return (
        <Paper className={classes.paper}>
            <canvas className={classes.canvas} ref={canvsdEl} />
        </Paper>
    );
}