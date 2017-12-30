import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Chart from './chart';
import ChartToolbar from './chartToolbar';
import {handleStartDateValueChange, handleEndDateValueChange} from '../actions/toolbarActions';
// class ChartContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.pupdProps = this.props.pupdProps
//     this.dateArr = this.props.dateArr
//   }

const ChartContainer = ({dateArr,netWinPUPDArray, handlePullsPUPDArray,  coinInPUPDArray,actualHoldPercentArray,theoHoldPercentArray, machineDaysArray }) => {

  //  console.log('pupdProps in chcontainer', pupdProps);


    return (<div className="well well-lg">
      <ChartToolbar handleStartDateValueChange={handleStartDateValueChange} handleEndDateValueChange={handleEndDateValueChange}>

      </ChartToolbar>
      <Chart title={'Per Unit Per Day'}
         dateArr={dateArr}  netWinPUPDArray={netWinPUPDArray} handlePullsPUPDArray={handlePullsPUPDArray}  coinInPUPDArray={coinInPUPDArray}  actualHoldPercentArray={actualHoldPercentArray}  theoHoldPercentArray={theoHoldPercentArray} machineDaysArray={machineDaysArray}/>
    </div>)

}
// dateArr={dateArr}
// const  mapStateToProps = state => {
//   const isFetching = state.data.pupd.isFetching;
//
//   const dateArr = state.data.pupd.dateArr;
//   return {isFetching}
//
// }
//
// const mapDispatchToProps = dispatch => bindActionCreators({
//   handleStartDateValueChange,
//   handleEndDateValueChange
// }, dispatch)
//
// export default connect(mapStateToProps, null)(ChartContainer);
export default ChartContainer;
