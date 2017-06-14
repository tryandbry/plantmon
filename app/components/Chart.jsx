import React from 'react';

export default class Chart extends React.Component {
  constructor(){
    super();
  }

  render() {

    return (
      <div className="chart">
        <div style={divStyle40}>4</div>
        <div style={divStyle80}>8</div>
        <div style={divStyle150}>15</div>
        <div style={divStyle160}>16</div>
        <div style={divStyle230}>23</div>
        <div style={divStyle420}>42</div>
      </div>
    )
  }
}

const divStyle40 = {width: '40px'};
const divStyle80 = {width: '80px'};
const divStyle150 = {width: '150px'};
const divStyle160 = {width: '160px'};
const divStyle230 = {width: '230px'};
const divStyle420 = {width: '420px'};
