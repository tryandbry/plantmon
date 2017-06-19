import React from 'react';
import { scaleLinear, scaleBand, scaleOrdinal } from 'd3-scale';
import { axisBottom } from 'd3-axis';
import { max } from 'd3-array';
import { select, selectAll } from 'd3-selection';

//var staticData = [5,10,1,3];
var staticSize = [600,250];
var margin = {top:20, right: 30, bottom:30, left: 40};
var w = staticSize[0] - margin.left - margin.right;
var h = staticSize[1] - margin.top - margin.bottom;

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
      if(dataArr.length > 39) dataArr = dataArr.slice(1);
      this.setState({data: [...dataArr,addKey]});
    });

    var x = scaleBand()
      .domain((n=>{
        let arr = [];
        for(let i=0;i<n;i++){
          arr.push(i);
        }
        return arr.reverse();
      })(40))
      .rangeRound([0, staticSize[0]]);

    const xAxis = axisBottom(x);

    select('#chart').append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0,${h})`)
        .call(xAxis);
  }

  render() {
    const DATA = this.state.data;

    const yScale = scaleLinear()
      .domain([0, 1])
      .range([0, staticSize[1]]);

    return (
      <div>
        <svg id="chart" width={staticSize[0]} height={staticSize[1]}>
          {DATA.map((d,i)=>
            <Rect
              key={yScale(d.key)}
              style={{fill: "#fe9922"}}
              x={i*15}
              y={h - yScale(d.data)}
              height={yScale(d.data)}
              width="15" />
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

