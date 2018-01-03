import React from 'react';
import Chart from './chart';
import {connect} from 'react-redux';
import ChartToolbar from './chartToolbar';
import {handleStartDateValueChange, handleEndDateValueChange} from '../actions/toolbarActions';

const PUPDChartContainer = ({
  title,
  entryCount,
  dateArr,
  netWinPUPDArray,
  handlePullsPUPDArray,
  coinInPUPDArray,
  actualHoldPercentArray,
  theoHoldPercentArray,
  machineDaysArray
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
      text: title + ':       Click a name below to disable the line'
    },
    series: [
      {
        name: 'machineDays',
        data: machineDaysArray
      }, {
        name: 'theoHoldPercent',
        data: theoHoldPercentArray
      }, {
        name: 'actualHoldPercent',
        data: actualHoldPercentArray
      }, {
        name: 'netWinPUPD',
        data: netWinPUPDArray
      }, {
        name: 'coinInPUPD',
        data: coinInPUPDArray
      }, {
        name: 'handlePullsPUPD',
        data: handlePullsPUPDArray
      }
    ]
  };

  return (<div className="well well-lg">
    <ChartToolbar handleStartDateValueChange={handleStartDateValueChange} handleEndDateValueChange={handleEndDateValueChange} entryCount={entryCount}></ChartToolbar>
    <Chart name={'pupd'} config={config}/>
  </div>)

}

const mapStateToProps = state => {
  let entryCount = state.data.pupd.entryCount;

  return {entryCount}
}
export default connect(mapStateToProps, null)(PUPDChartContainer);
