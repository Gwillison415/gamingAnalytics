import DatePicker from 'react-bootstrap-date-picker';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import {handleDateValueChange} from '../actions/toolbarActions';
class DatePickerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endValue: new Date().toISOString(),
      startValue: new Date('05 October 2011 14:48 UTC').toISOString()
    };
    this.type = this.props.type
    this.value = this.props.type === "End"
      ? this.state.endValue
      : this.state.startValue
    this.handleChange = this.props.handleChange.bind(this)
  }

  render() {
    return <FormGroup>
      <ControlLabel>
        {this.props.type}
        Date
      </ControlLabel>
      <DatePicker id="universal-datepicker" value={this.value} onChange={this.props.handleChange}/>
    </FormGroup>;
  }
};

// const mapStateToProps = (state, ownProps) => {
//   const startValue = state.startValue;
//   const endValue = state.endValue
//   return {startValue, endValue}
//
// }
//
// const mapDispatchToProps = dispatch => bindActionCreators({
//   onChange
// }, dispatch)
//
// export default connect(mapStateToProps, mapDispatchToProps)(DatePickerComponent);

export default DatePickerComponent;
