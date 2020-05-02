import React, { useRef, useState, useCallback, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const alerts = [
    'Critical infected dictor\'s level',
    'Respirators on 80% usage'
];

const useStyles = makeStyles(theme => ({
    paper: {
        flex: 1,
        width: '100%',
    },
    graphContainer: {
        height: 'calc(100% - 25px)'
    },
    tabs: {
        height: '25px',
        backgroundColor: '#dbdada',
        justifyContent: 'flex-start'
    },
    tabButton: {
        flex: 0,
        marginRight: '2px',
        boxShadow: '1px 2px #888888',
        '&.Mui-selected': {
            backgroundColor: '#ffffff'
        },
        '&:not(.Mui-selected)': {
            backgroundColor: '#f0f0f0'
        }
    },
    builtContent: {
        display: 'flex',
        fontSize: '20px'
    },
    tabContent: {
        flex: 1
    }
  }));

  let timeout = false;

  export default ({ padding }) => {
    const classes = useStyles({ padding });
    const graphRef = useRef();

    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const [tabValue, setTabValue] = React.useState(0);

    useEffect(() => {
        if (!height && graphRef.current) {
            setHeight(graphRef.current.getBoundingClientRect().height);
            setWidth(graphRef.current.getBoundingClientRect().width);
        }
    });

    return (
        <Paper className={classes.paper}>
            <div className={classes.graphContainer} ref={graphRef}>
                {tabValue
                    ? <div className={classes.builtContent}>To be built</div>
                    : width
                        ? <iframe src="https://7b5819088c6d4b77ae159891ea10c118.europe-west3.gcp.cloud.es.io:9243/app/kibana#/visualize/edit/6c76c500-8365-11ea-aa91-b307cde3c7dc?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(vis:(defaultColors:('0%20-%201000':'rgb(0,104,55)','1000%20-%202000':'rgb(255,255,190)','2000%20-%203000':'rgb(165,0,38)'))),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(filters:!((input:(language:kuery,query:'diagnosed%20:true'),label:''))),schema:group,type:filters)),params:(addLegend:!t,addTooltip:!t,dimensions:(series:!((accessor:0,aggType:filters,format:(),label:filters,params:())),x:!n,y:!((accessor:1,aggType:count,format:(id:number),label:Count,params:()))),gauge:(alignment:automatic,backStyle:Full,colorSchema:'Green%20to%20Red',colorsRange:!((from:0,to:1000),(from:1000,to:2000),(from:2000,to:3000)),extendRange:!t,gaugeColorMode:Labels,gaugeStyle:Full,gaugeType:Arc,invertColors:!f,labels:(color:black,show:!t),orientation:vertical,percentageMode:!f,scale:(color:'rgba(105,112,125,0.2)',labels:!f,show:!t),style:(bgColor:!t,bgFill:'rgba(105,112,125,0.2)',bgMask:!f,bgWidth:0.9,fontSize:60,mask:!f,maskBars:50,subText:'',width:0.9),type:meter),isDisplayWarning:!f,type:gauge),title:report_Diagnosed,type:gauge))" height={height} width={width}></iframe>
                        : '' }
            </div>
            <BottomNavigation
                value={tabValue}
                onChange={(event, newValue) => {
                    setTabValue(newValue);
                }}
                showLabels
                className={classes.tabs}
                >
                <BottomNavigationAction className={classes.tabButton} label="Recents" />
                <BottomNavigationAction className={classes.tabButton} label="Favorites" />
                <BottomNavigationAction className={classes.tabButton} label="Nearby" />
            </BottomNavigation>
        </Paper>
    );
}