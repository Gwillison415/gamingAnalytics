import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, Route, Switch, withRouter} from 'react-router-dom'
import DatePickerComponent from './datePicker';
import {handleStartDateValueChange, handleEndDateValueChange} from '../actions/toolbarActions';
export const ChartToolbar = ({entryCount}) => {

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
      <div className="col-md-3 col-sm-2">
        <DatePickerComponent handleChange={handleStartDateValueChange} type={'Start'}></DatePickerComponent>
      </div>
      <div className="col-md-3 col-sm-2">
        <DatePickerComponent handleChange={handleEndDateValueChange} type={'End'}></DatePickerComponent>
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

const mapStateToProps = state => {
  let entryCount = state.data.pupd.entryCount;

  return {entryCount}
}
const mapDispatchToProps = dispatch => bindActionCreators({
  handleEndDateValueChange,
  handleStartDateValueChange,
}, dispatch)

export default withRouter(connect(mapStateToProps, null)(ChartToolbar))
