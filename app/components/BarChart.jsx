import React from 'react';
import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import { axisBottom, axisLeft } from 'd3-axis';

export default class BarChart extends React.Component {
  constructor(props){
    super(props)
    this.createBarChart = this.createBarChart.bind(this)
  }
  componentDidMount() {
    this.createBarChart()
  }
  componentDidUpdate() {
    this.createBarChart()
  }
  createBarChart() {
    const node = this.node
    var margin = {top: 20, right: 30, bottom: 30, left: 40},
        width = 500 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    //set bounds of <svg> element
    var chart = select(node);

    chart
        .attr("width",width + margin.left + margin.right)
        .attr("height",width + margin.top + margin.bottom)
      .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    //set scales
    var x = scaleBand()
      .domain(["A","B","C","D"])
      .rangeRound([0,width]);
      
    var y = scaleLinear()
      .range([height,0]);

    //axes
    var xAxis = axisBottom(x);

    chart.append('g')
        .attr('class','x axis')
        .attr('transform',`translate(0,${height})`)
        .call(xAxis);

    var yAxis = axisLeft(y);

    chart.append('g')
        .attr('class','y axis')
        .call(yAxis);

    var staticData = [5,10,1,3];
    chart.selectAll('rect')
        .data(staticData)
        .enter()
        .append('rect');

    chart.selectAll('rect')
        .data(staticData)
        .style('fill', '#fe9922')
        .attr('x', (d,i) => i * 25)
        //.attr('y', d => eight-100)
        .attr('height', d => height-100)
        .attr('width', 25)
    /*
    const dataMax = max(this.props.data) //sets alias for max value
    // convenience function to scale y variable within the bounds 
    // of the <svg /> element
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]])

    //on enter, create placeholder DOM elements to hold the data
    // .enter() returns placeholder nodes for each datam that had
    // no corresponding DOM element in the selection.
    // typically used to add new nodes
    // e.g. in a set [1,2,3,4] with existing DIV nodes corresponding
    // to 1 and 2, a d3.selectAll('div').data([1,2,3,4]).enter()
    // will return DOM placeholder elements corresponding to 3 and 4
    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')
   
    // trim away excess DOM elements not in the dataset
    // .exit() selects all elements that do not match the dataset
    // i.e. when the data changes, remove extraneous elements
    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove()
     
    // add attributes to remaining DOM elements
    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * 25)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25)
      */
  }

  render() {
    return (
      <svg ref={node => this.node = node}>
      </svg>
    )
  }
}

