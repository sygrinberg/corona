import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme, props) => {
    return ({
        dashboardController: {
            width: props => `${props.componentWidth}%`,
        },
        formControl: {
            minWidth: 140,
            marginTop: '15px'
        },
        sliderContainer: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        slider: {
            width: '70%'
        },
        paper: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
        }
      });
});

const createTime = value => {
    const minutes = (value % 1) * 60;
    return `${Math.floor(value)}:${minutes || '00'}`
}

export default ({ height, padding, componentWidth = 16, data, setData }) => {
    const classes = useStyles({ height, padding, componentWidth });

    const { categoryState, ageRangeState, timeRangeState, feverStateRange, sicknessLevelState, diagnosedState } = data;
    

    const onCategoryChange = useCallback((event => {
        setData({
            ...data,
            categoryState: event.target.value
        });
    }), []);

    const onAgeRangeChange = useCallback(((event, newValue) => {
        setData({
            ...data,
            ageRangeState: newValue
        });
    }), []);

    const onFeverRangeChange = useCallback(((event, newValue) => {
        setData({
            ...data,
            feverStateRange: newValue
        });
    }), []);

    const onTimeRangeChange = useCallback(((event, newValue) => {
        setData({
            ...data,
            timeRangeState: newValue
        });
    }), []);

    const onSicknessLevelChange = useCallback(((event) => {
        setData({
            ...data,
            sicknessLevelState: event.target.value
        });
    }), []);

    const onDiagnosedChange = useCallback(((event, newValue) => {
        console.log('newValue')
        console.log(newValue)
        setData({
            ...data,
        diagnosedState: newValue === 'true' ? true : false
        });
    }), []);

    return (
        <div className={classes.dashboardController}>
            <Paper className={classes.paper}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Category</FormLabel>
                    <RadioGroup aria-label="category" name="category" value={categoryState} onChange={onCategoryChange}>
                        <FormControlLabel value="cat1" control={<Radio />} label="Current Outbreak" />
                        <FormControlLabel value="cat2" control={<Radio />} label="Forcast Outbreak" />
                        <FormControlLabel value="cat3" control={<Radio />} label="Diagnosed only" />
                    </RadioGroup>
                </FormControl>
                <div className={classes.sliderContainer}>
                    <Typography id="discrete-slider-small-steps" gutterBottom className={classes.sliderTypography}>
                        Age
                    </Typography>
                    <Slider
                        value={ageRangeState}
                        min={1}
                        max={100}
                        className={classes.slider}
                        onChange={onAgeRangeChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
                </div>
                <div className={classes.sliderContainer}>
                    <Typography id="discrete-slider-small-steps" gutterBottom className={classes.sliderTypography}>
                        Fever
                    </Typography>
                    <Slider
                        value={feverStateRange}
                        min={35}
                        max={47}
                        step={0.5}
                        className={classes.slider}
                        onChange={onFeverRangeChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
                </div>
                <div className={classes.sliderContainer}>
                    <Typography id="discrete-slider-small-steps" gutterBottom className={classes.sliderTypography}>
                        Time
                    </Typography>
                    <Slider
                        min={0}
                        max={24}
                        step={0.25}
                        value={timeRangeState}
                        className={classes.slider}
                        valueLabelFormat={createTime}
                        label="sddsgdfg"
                        onChange={onTimeRangeChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
                </div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Sickness Level</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        value={sicknessLevelState}
                        onChange={onSicknessLevelChange}
                    >
                        <MenuItem value={'good'}>Good</MenuItem>
                        <MenuItem value={'bad'}>Bad</MenuItem>
                    </Select>
                </FormControl>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Diagnosed</FormLabel>
                    <RadioGroup aria-label="category" name="category" value={diagnosedState ? true : false} onChange={onDiagnosedChange}>
                        <FormControlLabel value={true} control={<Radio />} label="True" />
                        <FormControlLabel value={false} control={<Radio />} label="False" />
                    </RadioGroup>
                </FormControl>
            </Paper>
        </div>
    );
}