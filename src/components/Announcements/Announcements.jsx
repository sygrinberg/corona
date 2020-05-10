import React, { useState, useCallback } from 'react';
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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import messagesService from '../../services/Announcements';
import './Announcements.scss';

const dafeFnsUtils = new DateFnsUtils();

export default props => {
    const [data, setData] = useState({
        categoryState: 'cat1',
        ageRangeState: [18, 40],
        feverStateRange: [35, 47],
        timeRangeState: [18, 40],
        sicknessLevelState: '',
    });

    const [messages, setMessages] = useState(messagesService.getMessages());
    const [messageText, setMessageText] = useState([
        'For tonight 24.7 ac curfew starts for all Tel Aviv',
        '•    People over 60 cannot leave their houses',
        '•    Citizans will now be allowed to go furthor then 100 meters away from their home',
        'Hanging there - Mayor of Tel Aviv'
    ].join('\n'));
    const onTextChange = useCallback(event => setMessageText(event.target.value), []);
    const [date, setDate] = useState(new Date());
    const onDateChange = useCallback(newDate => setDate(newDate), []);
    const [time, setTime] = useState(new Date());
    const onTimeChange = useCallback(newTime => setTime(newTime), []);
    const [notificationType, setNotificationType] = useState('do_not_repeat');
    const onNotificationChange = useCallback(newNotificationType => setNotificationType(newNotificationType), []);

    const sendMessage = () => {
        const message = {
            date,
            time,
            notificationType,
            text: messageText
        };
        const result = messagesService.saveMessage(message);

        if (result) {
            setDate(new Date());
            setTime(new Date());
            setMessageText('');
            setNotificationType('do_not_repeat');
            setMessages([...messages, message]);
        }
    };

    return (
        <div className="announcements">
            <div className="left-side">
                <div className="left-side-top">
                    <DashboardController componentWidth={30} data={data} setData={setData}/>
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
                            onChange={onTextChange}
                            value={messageText}
                        />
                    </div>
                    <div className="time-section">
                        <h3 className="text-title">
                            Timing
                        </h3>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <div>
                                <KeyboardDatePicker
                                    disableToolbar
                                    // variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    value={date}
                                    onChange={onDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </div>
                            <div>
                                <KeyboardTimePicker
                                    margin="normal"
                                    id="time-picker"
                                    value={time}
                                    onChange={onTimeChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                    }}
                                />
                            </div>
                        </MuiPickersUtilsProvider>
                        <FormControl>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={notificationType}
                                onChange={onNotificationChange}
                            >
                                <MenuItem value={'do_not_repeat'}>Do not repeat</MenuItem>
                                <MenuItem value={'Cat 2'}>Cat 2</MenuItem>
                                <MenuItem value={'Cat 3'}>Cat 3</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" color="primary" className="send-button"
                            onClick={sendMessage}
                        >
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
                        {messages.map(message => {
                            return (
                                <li  className="prev-message-item">
                                    <div className="prev-message-item-date">
                                        {format(message.date, dafeFnsUtils.dateFormat)} {format(message.time, dafeFnsUtils.time24hFormat)}
                                    </div>
                                    <br/>
                                    <div className="prev-message-item-text">
                                        {message.text}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </Paper>
            </div>
        </div>
    );
}