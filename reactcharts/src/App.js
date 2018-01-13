import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
constructor(){
  super();
  this.state = {
    chartData:{}
  }
}

componentWillMount(){
  this.getChartData();
}

getChartData(){
  // Ajax calls here
  this.setState({
    chartData:{
      labels: ['Seattle', 'Spokane', 'Vancouver', 'Yakima', 'Kennewick', 'Olympia'],
      datasets:[
        {
          label:'Population',
          data:[
            608660,
            208916,
            161791,
            91067,
            73917,
            46478
          ],
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }
      ]
    }
  });
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <Chart chartData={this.state.chartData} location="Washington State"/>
      </div>
    );
  }
}

export default App;
