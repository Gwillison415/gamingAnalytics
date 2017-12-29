import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import history from '../index';
import ReactHighcharts from 'react-highcharts'; // Expects that Highcharts was loaded in the code.

const Chart = ({ title, dateArr, coinInPUPDArray, handlePullsPUPDArray, netWinPUPDArray, actualHoldPercentArray, theoHoldPercentArray, machineDaysArray}) => {
  // let {dateArr, coinInPUPDArray} = allPUPDprops;
  console.log(coinInPUPDArray, 'coinInPUPDArray');
  const config = {
    xAxis: {
      categories: dateArr,
    },
    chart: {
      backgroundColor: {
        linearGradient: [
          0, 0, 500, 500
        ],
        stops: [ [0, 'rgb(255, 255, 255)'],
          [ 1, 'rgb(200, 240, 255)']  ]
      },
      borderWidth: 4,
      plotBackgroundColor: 'rgba(255, 255, 255, .9)',
      plotShadow: true,
      plotBorderWidth: 1
    },

    title: {
      text: title
    },
    series:  [
      {
        name: 'machineDays',
        data: machineDaysArray
      }, {
        name: 'theoHoldPercent',
        data: theoHoldPercentArray
      },
      {
        name: 'actualHoldPercent',
        data: actualHoldPercentArray
      },
      {
        name: 'netWinPUPD',
        data: netWinPUPDArray
      },
      {
        name: 'coinInPUPD',
        data: coinInPUPDArray
      },
      {
        name: 'handlePullsPUPD',
        data: handlePullsPUPDArray
      },

    ]
  };
  return (<div>
    <ReactHighcharts config={config} domProps={{
        id: 'chartId'
      }}></ReactHighcharts>

  </div>)
}
export default Chart;
