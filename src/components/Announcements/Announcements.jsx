import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import DashboardController from '../DashboardUpperRow/DashboardController';
import HeatMap from '../DashboardUpperRow/HeatMap';
import AlertSection from '../DashboardUpperRow/AlertSection';

const useStyles = makeStyles(theme => ({
    announcements: {
      display: 'flex',
      flexDirection: 'row',
      padding: '10px',
      backgroundColor: '#dbdada',
      height: '100%',
      width: '100%',
    //   padding: '10px'
    },
    leftSide: {
        width: '70%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    leftSideTop: {
        height: '57%',
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'row'
    },
    leftSideBottom: {
        height: '33%',
        width: '100%',
        display: 'flex',
        padding: '20px',
        flexDirection: 'row'
    },
    text: {
        width: '80%',
    },
    time: {
        marginLeft: '30px'
    },
    messageText: {
        // height: '100%',
        with: '100%',
        fontSize: '20px',
        padding: '20px',
        backgroundColor: 'gray'
    },
    rightSide: {
        marginLeft: '10px',
        width: '30%',
        display: 'flex',
        flexDirection: 'column'
    },
    prevMessages: {
        flex: 1,
        marginTop: '10px',
        padding: '20px'
    },
    prevMessageItem: {
        backgroundColor: 'gray',
        padding: '20px',
        border: '1px solid black',
        fontSize: '19px',
        '&:not(last-of-type)': {
            marginTop: '10px'
        }
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <div className={classes.announcements}>
            <div className={classes.leftSide}>
                <div className={classes.leftSideTop}>
                    <DashboardController componentWidth={30}/>
                    <HeatMap paperWidth={100} />
                </div>
                <Paper className={classes.leftSideBottom}>    
                    <div className={classes.text}>
                        <h3 className={classes.textTitle}>
                            Public Announcements Text
                        </h3>
                        <TextField className={classes.messageText}
                            id="standard-multiline-static"
                            rows={8}
                            multiline
                            fullWidth
                            // rows={4}
                            defaultValue={[
                                'For tonight 24.7 ac curfew starts for all Tel Aviv',
                                '•    People over 60 cannot leave their houses',
                                '•    Citizans will now be allowed to go furthor then 100 meters away from their home',
                                'Hanging there - Mayor of Tel Aviv'
                            ].join('\n')}
                        />
                    </div>
                    <div className={classes.time}>
                        <h3 className={classes.textTitle}>
                            Timing
                        </h3>
                        <List component="nav" className={classes.root} aria-label="mailbox folders">
                            <ListItem button>
                                <ListItemText primary="Aprin 25" />
                            </ListItem>
                            <Divider />
                            <ListItem button divider>
                                <ListItemText primary="5:30 PM" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Does not repeat" />
                            </ListItem>
                            <Divider light />
                        </List>
                        <Button variant="contained" color="primary">
                            Send
                        </Button>
                    </div>
                </Paper>
            </div>
            <div className={classes.rightSide}>
                <AlertSection />
                <Paper className={classes.prevMessages}>
                    <h2>PA - History</h2>
                    <ul>
                        <li  className={classes.prevMessageItem}>
                            14.4 20:00 - Age: 65+ 
                            <br/>
                            "Thank you for..."
                        </li>
                        <li  className={classes.prevMessageItem}>
                            13.4 20:00 - Age: 0...64
                            <br/>
                            "Thank you for..."
                        </li>
                    </ul>
                </Paper>
            </div>
        </div>
    );
}