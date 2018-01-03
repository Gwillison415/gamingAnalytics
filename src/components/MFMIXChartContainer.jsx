import React from 'react';
import Chart from './chart';
import ChartToolbar from './chartToolbar';
import {connect} from 'react-redux';
import {handleStartDateValueChange, handleEndDateValueChange} from '../actions/toolbarActions';

export const MFMIXChartContainer = ({
  title,
  entryCount,
  brandArr,
  coinInArray,
  handlePullsArray,
  netWinArray,
  theoWinArray,
  machineDaysArray,
  coinInPercArray,
  handlePullsPercArray,
  netWinPercArray,
  theoWinPercArray,
  machineDaysPercArray
}) => {
console.log('entryCount', entryCount);
  console.log('MFGProps in chcontainer', brandArr, coinInArray,
  handlePullsArray,
  );
  let hpArr = handlePullsArray.map(value => {
    console.log('value', value );
    return value})


console.log(typeof hpArr, 'mapfn');
  const config = {
    xAxis: {
      categories: brandArr
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
      text: title + ':      Click a name below to disable the line'
    },
    series: [
      {
        name: 'coinIn',
        data: [123, 412, 543, 523, 654, 234, 234, 234]
      },
      {
        name: 'handlePulls',
        data: handlePullsArray
      },
       {
        name: 'netWin',
        data: netWinArray
      }, {
        name: 'theoWin',
        data: theoWinArray
      }, {
        name: 'machineDays',
        data: machineDaysArray
      },
      // {
      //   name: 'coinInPerc',
      //   data: coinInPercArray
      // },
      // {
      //   name: 'handlePullsPerc',
      //   data: handlePullsPercArray
      // }, {
      //   name: 'netWinPerc',
      //   data: netWinPercArray
      // }, {
      //   name: 'theoWinPerc',
      //   data: theoWinPercArray
      // }, {
      //   name: 'machineDaysPerc',
      //   data: machineDaysPercArray
      // }
    ]
  };

  return (<div className="well well-lg">
    <ChartToolbar handleStartDateValueChange={handleStartDateValueChange} handleEndDateValueChange={handleEndDateValueChange} entryCount={entryCount}></ChartToolbar>
    <Chart name={'mfg'} config={config}/>
  </div>)

}
const mapStateToProps = state => {
  const entryCount = state.data.mfgmix.entryCount;
  return { entryCount}
}
export default connect(mapStateToProps, null)(MFMIXChartContainer);

// export default MFMIXChartContainer;
