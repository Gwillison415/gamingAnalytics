import React from 'react';
import ReactHighcharts from 'react-highcharts'; // Expects that Highcharts was loaded in the code.

const Chart = ({
  number,
  config,name

}) => {
// domProps={{  id: {number}}}

  return (<div>
    <ReactHighcharts config={config} ></ReactHighcharts>

  </div>)
}

// highly improbable attempt to render highcharts by any means neccesary
// const mapStateToProps = state => {
//   const isFetching = state.data.pupd.isFetching;
//   const pupdProps = state.data.pupd;
//   const dateArr = state.data.pupd.dateArr;
//
//   const machineDaysArray = state.data.pupd.machineDaysArray;
//   const theoHoldPercentArray = state.data.pupd.theoHoldPercentArray;
//   const actualHoldPercentArray = state.data.pupd.actualHoldPercentArray;
//   const netWinPUPDArray = state.data.pupd.netWinPUPDArray;
//   const coinInPUPDArray = state.data.pupd.coinInPUPDArray;
//   const handlePullsPUPDArray = state.data.pupd.handlePullsPUPDArray;
//   return {
//     isFetching,
//     dateArr,
//     pupdProps,
//     coinInPUPDArray,
//     handlePullsPUPDArray,
//     netWinPUPDArray,
//     actualHoldPercentArray,
//     theoHoldPercentArray,
//     machineDaysArray
//   }
//
// }
//
//
// export default connect(mapStateToProps, null)(Chart);

export default Chart;
