import React, { useRef, useState, useEffect, useCallback } from 'react';
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
        width: '23%',
        height: '100%'
    },
    graphIframe: {
        height: "calc('100%')",
        width: "calc('100%')"
    }
  }));

  export default ({ padding,  filterString }) => {
    const iframeUrl = `https://7b5819088c6d4b77ae159891ea10c118.europe-west3.gcp.cloud.es.io:9243/app/kibana#/visualize/edit/6c76c500-8365-11ea-aa91-b307cde3c7dc?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(filters:!(${filterString}),linked:!f,query:(language:kuery,query:''),uiState:(vis:(defaultColors:('0%20-%201000':'rgb(0,104,55)','1000%20-%202000':'rgb(255,255,190)','2000%20-%203000':'rgb(165,0,38)'))),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(filters:!((input:(language:kuery,query:'diagnosed%20:true'),label:''))),schema:group,type:filters)),params:(addLegend:!t,addTooltip:!t,dimensions:(series:!((accessor:0,aggType:filters,format:(),label:filters,params:())),x:!n,y:!((accessor:1,aggType:count,format:(id:number),label:Count,params:()))),gauge:(alignment:automatic,backStyle:Full,colorSchema:'Green%20to%20Red',colorsRange:!((from:0,to:1000),(from:1000,to:2000),(from:2000,to:3000)),extendRange:!t,gaugeColorMode:Labels,gaugeStyle:Full,gaugeType:Arc,invertColors:!f,labels:(color:black,show:!t),orientation:vertical,percentageMode:!f,scale:(color:'rgba(105,112,125,0.2)',labels:!f,show:!t),style:(bgColor:!t,bgFill:'rgba(105,112,125,0.2)',bgMask:!f,bgWidth:0.9,fontSize:60,mask:!f,maskBars:50,subText:'',width:0.9),type:meter),isDisplayWarning:!f,type:gauge),title:report_Diagnosed,type:gauge))`;
    const classes = useStyles({ padding });

    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null); 
    const [tabValue, setTabValue] = React.useState(0);
    const graphRef = useRef();

    useEffect(() => {
        if (!height && graphRef.current) {
            setHeight(graphRef.current.getBoundingClientRect().height);
            setWidth(graphRef.current.getBoundingClientRect().width);
        }
    });

    return (
        <Paper className="lower-row-graph graph-2">
            <div className="lower-row-graph-container" ref={graphRef}>
                {tabValue
                    ? <div className="built-content">To be built</div>
                    : width
                        ? <iframe src={iframeUrl} height={height} width={width}></iframe>
                        : '' }
            </div>
            <BottomNavigation
                value={tabValue}
                onChange={(event, newValue) => {
                    setTabValue(newValue);
                }}
                showLabels
                className="lower-row-graph-tabs"
                >
                <BottomNavigationAction label="Recents" />
                <BottomNavigationAction label="Favorites" />
                <BottomNavigationAction label="Nearby" />
            </BottomNavigation>
        </Paper>
    );
}