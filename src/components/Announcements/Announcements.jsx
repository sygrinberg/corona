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
import './Announcements.scss';

export default props => {
    return (
        <div className="announcements">
            <div className="left-side">
                <div className="left-side-top">
                    <DashboardController componentWidth={30}/>
                    <HeatMap paperWidth={100} />
                </div>
                <Paper className="left-side-bottom">
                    <div className="text-section">
                        <h3 className="text-title">
                            Public Announcements Text
                        </h3>
                        <TextField className="message-text"
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
                    <div className="time-section">
                        <h3 className="text-title">
                            Timing
                        </h3>
                        <List component="nav" aria-label="mailbox folders">
                            <ListItem button>
                                <ListItemText primary="April 25" />
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
                        <Button variant="contained" color="primary" className="send-button">
                            Send
                        </Button>
                    </div>
                </Paper>
            </div>
            <div className="right-side">
                <AlertSection />
                <Paper className="prev-messages">
                    <h2>PA - History</h2>
                    <ul>
                        <li  className="prev-message-item">
                            14.4 20:00 - Age: 65+ 
                            <br/>
                            "Thank you for..."
                        </li>
                        <li  className="prev-message-item">
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