import React, { useState, createContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardUpperRow from '../DashboardUpperRow/DashboardUpperRow';
import DashboardLowerRow from '../DashboardLowerRow/DashboardLowerRow';
import './Dashboard.scss';

const useStyles = makeStyles(theme => ({
    dashboard: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#dbdada',
      height: '100%',
      width: '100%',
      padding: '10px'
    }
}));

const getFilterString =  ({ ageRangeState: [minAge, maxAge], feverStateRange: [minFever, maxFever], diagnosedState }) => {
    const diagnozedString = diagnosedState ? 't' : 'f';
    return [`('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'1b61b1e0-82aa-11ea-aa91-b307cde3c7dc',key:fever,negate:!f,params:(gte:${minFever},lt:${maxFever}),type:range),range:(fever:(gte:${minFever},lt:${maxFever}))),`,
            `('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'1b61b1e0-82aa-11ea-aa91-b307cde3c7dc',key:age,negate:!f,params:(gte:${minAge},lt:${maxAge}),type:range),range:(age:(gte:${minAge},lt:${maxAge}))),`,
            `('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'1b61b1e0-82aa-11ea-aa91-b307cde3c7dc',key:handled,negate:!f,params:(query:!${diagnozedString}),type:phrase),query:(match_phrase:(handled:!${diagnozedString})))`
        ].join('');
};

export default props => {
    const newContext = createContext({
        categoryState: 'cat1',
        ageRangeState: [18, 40],
        feverStateRange: [35, 47],
        timeRangeState: [18, 40],
        sicknessLevelState: '',
    });
    const { Provider, Consumer } = newContext;

    const [data, setData] = useState({
        categoryState: 'cat1',
        ageRangeState: [18, 40],
        feverStateRange: [35, 47],
        timeRangeState: [18, 40],
        diagnosedState: true,
        sicknessLevelState: '',
    });

    const filterString = getFilterString(data);
    return (
        <div className="dashboard">
            <Provider>
                <DashboardUpperRow filterString={filterString} data={data} setData={setData} />
                <DashboardLowerRow filterString={filterString} data={data} setData={setData} />
            </Provider>
        </div>
    );
}