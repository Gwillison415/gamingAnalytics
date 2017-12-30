import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import StartDatePickerComponent from './startDatePicker';
import EndDatePickerComponent from './endDatePicker';

 const ChartToolbar = ({entryCount, handleStartDateValueChange, handleEndDateValueChange}) => {

  // const handleChange = (value, formattedValue) => {
  //   console.log('handleChange happened');
  //   if (this.type === "End") {
  //     setState({endValue: value, endFormattedValue: formattedValue})
  //   } else {
  //     setState({startValue: value, startFormattedValue: formattedValue})
  //   }
  // }

  // const entryCount = this.props.entryCount

  return (<div className="row toolbar">
    <div className="row">
      <div className="col-md-4 col-sm-2">
        <StartDatePickerComponent handleStartDateValueChange={handleStartDateValueChange} ></StartDatePickerComponent>

      </div>
      <div className="col-md-4 col-sm-2">
        <EndDatePickerComponent handleEndDateValueChange={handleEndDateValueChange}></EndDatePickerComponent>
      </div>
      <div className="col-md-2">
        <p className="pull-right">
          <span className="badge badge">{entryCount}</span>

          {
            entryCount === 1
              ? 'Day'
              : 'Days'
          }
        </p>
      </div>
    </div>
  </div>);

}
// export default ChartToolbar

const mapStateToProps = state => {
  let entryCount = state.data.pupd.entryCount;

  return {entryCount}
}
// const mapDispatchToProps = dispatch => bindActionCreators({
//   handleEndDateValueChange,
//   handleStartDateValueChange,
// }, dispatch)

export default connect(mapStateToProps, null)(ChartToolbar)
