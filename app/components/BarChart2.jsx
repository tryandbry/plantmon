import React from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

//var staticData = [5,10,1,3];
var staticSize = [500,500];

const randomInt = (n)=>Math.round(Math.random()*n);

export default class BarChart extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: [5,10,1,3,4,5,7,1,3,9,10,2,3],
    };
  }
  
  componentDidMount(){
    this.timeoutId = setInterval(()=>this.setState({
      data: [...this.state.data.slice(1),randomInt(10)],
    }),500);
  }

  render() {
    const staticData = this.state.data;
    const dataMax = Math.max(...staticData) //sets alias for max value
    // convenience function to scale y variable within the bounds 
    // of the <svg /> element
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, staticSize[1]])

    return (
      <div>
        <svg width="500" height="500">
          {staticData.map((d,i)=>
            <Rect
              key={i}
              style={{fill: "#fe9922"}}
              x={i*25}
              y={staticSize[1] - yScale(d)}
              height={yScale(d)}
              width="25" />
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

