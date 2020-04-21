import React, { useRef, useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        height: "100%",
        width: '50%',
        padding: props => props.padding,
    },
    graphContainer: {
        // height: "100%",
        // width: "100%"
    }
  }));

export default ({ height, padding }) => {
    const classes = useStyles({ height, padding });

    return (
        <Paper className={classes.paper}>
            <div className={classes.graphContainer}>
                {/* <iframe src="https://7b5819088c6d4b77ae159891ea10c118.europe-west3.gcp.cloud.es.io:9243/app/kibana#/visualize/edit/49dfbe40-834a-11ea-aa91-b307cde3c7dc?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:now-1y,to:now))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(vis:(colors:('diagnosed%20:false%20':%23508642,'diagnosed%20:true%20':%23E5AC0E))),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(extended_bounds:(max:'',min:''),field:age,has_extended_bounds:!f,interval:1,min_doc_count:!f),schema:segment,type:histogram),(enabled:!t,id:'3',params:(filters:!((input:(language:kuery,query:'diagnosed%20:true%20and%20health_staff_admisition%20:%20true%20'),label:''),(input:(language:kuery,query:'diagnosed%20:true'),label:''),(input:(language:kuery,query:'diagnosed%20:false%20'),label:''))),schema:group,type:filters)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(series:!((accessor:1,aggType:filters,format:(),label:filters,params:())),x:(accessor:0,aggType:histogram,format:(id:number,params:(parsedUrl:(basePath:'',origin:'https:%2F%2F7b5819088c6d4b77ae159891ea10c118.europe-west3.gcp.cloud.es.io:9243',pathname:%2Fapp%2Fkibana))),label:age,params:(interval:2)),y:!((accessor:2,aggType:count,format:(id:number),label:Count,params:()))),grid:(categoryLines:!f),labels:(),legendPosition:right,seriesParams:!((data:(id:'1',label:Count),drawLinesBetweenPoints:!t,interpolate:linear,lineWidth:2,mode:stacked,show:!t,showCircles:!t,type:area,valueAxis:ValueAxis-1)),thresholdLine:(color:%23E7664C,show:!f,style:full,value:10,width:1),times:!(),type:area,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:Count),type:value))),title:diagnosed_hist,type:area))" height="600" width="800"></iframe> */}
            </div>
        </Paper>
    );
}