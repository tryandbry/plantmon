import React from 'react';
import BarChart from '../components/BarChart';

export default class BarChartContainer extends React.Component {
  render() {

    return (
      <div className='App'>
        <div className='App-header'>
          <h2>d3ia dashboard</h2>
        </div>
        <div>
          <BarChart data={[5,10,1,3]} size={[500,500]} />
        </div>
      </div>
    )
  }
}
