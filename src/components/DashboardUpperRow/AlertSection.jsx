import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const alerts = [
    'Critical infected dictor\'s level',
    'Respirators on 80% usage'
];

const useStyles = makeStyles(theme => ({
    alertBox: {
    //   width: '100%'
    },
    alertTitle: {
        textDecoration: 'underline',
        fontSize: '22px',
        fontWeight: 'bold'
    },
    alertList: {
        padding: 0,
        fontSize: '20px'
    }
  }));

export default props => {
    const classes = useStyles();
    return (
        <Alert className="alert-box" severity="error">
            <AlertTitle className="alert-title">SYSTEM ALERT</AlertTitle>
            <ul className="alert-list">
                {alerts.map(alert => (
                    <li>
                        {alert}
                    </li>
                ))}
            </ul>
        </Alert>
    );
}