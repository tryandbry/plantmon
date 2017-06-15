import React from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

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
  }

  render() {
    return (
      <svg
        ref={node => this.node = node}
        width={500} height={500}>
      </svg>
    )
  }
}

