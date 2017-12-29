import DatePicker from 'react-bootstrap-date-picker';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import {handleStartDateValueChange} from '../actions/toolbarActions';
export const StartDatePickerComponent = ({handleStartDateValueChange, dateValue}) => {

    return ( <FormGroup>
      <ControlLabel>
        Start Date
      </ControlLabel>
      <DatePicker id="universal-datepicker" value={dateValue} onChange={handleStartDateValueChange}/>
    </FormGroup> );

};

// const mapStateToProps = (state, ownProps) => {
//   const startValue = state.startValue;
//   const endValue = state.endValue
//   return {startValue, endValue}
//
// }
//
const mapDispatchToProps = dispatch => bindActionCreators({
  handleStartDateValueChange,
}, dispatch)

export default connect(null, mapDispatchToProps)(StartDatePickerComponent);

// export default StartDatePickerComponent;
