import DatePicker from 'react-bootstrap-date-picker';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import {handleEndDateValueChange} from '../actions/toolbarActions';
export const EndDatePickerComponent = ({handleEndDateValueChange, dateValue}) => {


    return ( <FormGroup>
      <ControlLabel>
        End Date
      </ControlLabel>
      <DatePicker id="universal-datepicker" value={dateValue} onChange={handleEndDateValueChange}/>
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
  handleEndDateValueChange,
}, dispatch)

export default connect(null, mapDispatchToProps)(EndDatePickerComponent);

// export default StartDatePickerComponent;
