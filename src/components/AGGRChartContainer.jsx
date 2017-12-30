import React from 'react';
import Chart from './chart';
import ChartToolbar from './chartToolbar';
import {handleStartDateValueChange, handleEndDateValueChange} from '../actions/toolbarActions';
// class PUPDChartContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.pupdProps = this.props.pupdProps
//     this.dateArr = this.props.dateArr
//   }

const AGGRChartContainer = ({
  title,
  dateArr,
  coinInArray,
  coinOutArray,
  jackpotsArray,
  handlePullsArray,
  netWinArray,
  theoWinArray
}) => {

  const config = {
    xAxis: {
      categories: dateArr
    },
    chart: {
      backgroundColor: {
        linearGradient: [
          0, 0, 500, 500
        ],
        stops: [
          [
            0, 'rgb(255, 255, 255)'
          ],
          [
            1, 'rgb(200, 240, 255)'
          ]
        ]
      },
      borderWidth: 4,
      plotBackgroundColor: 'rgba(255, 255, 255, .9)',
      plotShadow: true,
      plotBorderWidth: 1
    },

    title: {
      text: title + ':       Click a name below to disable a line'
    },
    series: [
      {
        name: 'theoWin',
        data: theoWinArray
      }, {
        name: 'netWin',
        data: netWinArray
      }, {
        name: 'handlePulls',
        data: handlePullsArray
      }, {
        name: 'coinIn',
        data: coinInArray
      }, {
        name: 'jackpots',
        data: jackpotsArray
      }, {
        name: 'coinOut',
        data: coinOutArray
      }
    ]
  };

  return (<div className="well well-lg">
    <ChartToolbar handleStartDateValueChange={handleStartDateValueChange} handleEndDateValueChange={handleEndDateValueChange}></ChartToolbar>
    <Chart config={config}/>
  </div>)

}

export default AGGRChartContainer;
