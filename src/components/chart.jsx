import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import history from '../index';
import ReactHighcharts from 'react-highcharts'; // Expects that Highcharts was loaded in the code.

const Chart = ({dateObj, dateArr}) => {
  const config = {
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
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
      text: 'Fruit Consumption'
    },
    series: [
      {
        name: 'Jane',
        data: [1, 0, 4]
      }, {
        name: 'John',
        data: [5, 7, 3]
      }
    ]
  };
  return (<div>
    <ReactHighcharts config={config} domProps={{
        id: 'chartId'
      }}></ReactHighcharts>

  </div>)
}
export default Chart;
