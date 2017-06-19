import React from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

//var staticData = [5,10,1,3];
var staticSize = [500,250];

const randomInt = (n)=>Math.round(Math.random()*n);

export default class BarChart extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
    };
  }
  
  componentDidMount(){
    /*
    this.timeoutId = setInterval(()=>this.setState({
      data: [...this.state.data.slice(1),randomInt(10)],
    }),500);
    */
    socket.on('tessel',(payload)=>{
      //console.log('socket emit capture:',payload);
      let addKey = {
        key: Date.now(),
        data: payload.data,
      };
      let dataArr = this.state.data;
      if(dataArr.length > 49) dataArr = dataArr.slice(1);
      this.setState({data: [...dataArr,addKey]});
    });
  }

  render() {
    const staticData = this.state.data;
    //const dataMax = Math.max(...staticData) //sets alias for max value
    // convenience function to scale y variable within the bounds 
    // of the <svg /> element
    const yScale = scaleLinear()
      .domain([0, 1])
      .range([0, staticSize[1]])

    return (
      <div>
        <svg width="500" height="500">
          {staticData.map((d,i)=>
            <Rect
              key={yScale(d.key)}
              style={{fill: "#fe9922"}}
              x={i*10}
              y={staticSize[1] - yScale(d.data)}
              height={yScale(d.data)}
              width="10" />
          )}
        </svg>
      </div>
    )
  }
}

const Rect = ({x,y,height,width,style}) => {

  return (
    <rect x={x} y={y} height={height} width={width} style={style} />
  );
}

