import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const alerts = [
    'Critical infected dictor\'s level',
    'Respirators on 80% usage'
];

const useStyles = makeStyles(theme => ({
    alertBox: {
        backgroundColor: '#dbdada'
    },
    alertTitle: {
        textDecoration: 'underline',
        fontWeight: 'bold'
    },
    alertList: {
        padding: 0
    }
  }));

export default props => {
    const classes = useStyles();
    return (
        <Alert className={classes.alertBox} severity="error">
            <AlertTitle className={classes.alertTitle}>SYSTEM ALERT</AlertTitle>
            <ul className={classes.alertList}>
                {alerts.map(alert => (
                    <li>
                        {alert}
                    </li>
                ))}
            </ul>
        </Alert>
    );
}