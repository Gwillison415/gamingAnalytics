import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Chart from './chart';
import ChartToolbar from './chartToolbar';
import {handleStartDateValueChange, handleEndDateValueChange} from '../actions/toolbarActions';
class ChartContainer extends Component {
  constructor(props) {
    super(props);
    this.pupdProps = this.props.pupdProps
    this.dateArr = this.props.dateArr
  }



  //  console.log('pupdProps in chcontainer', pupdProps);

  render() {
    console.log('chart props', this.pupdProps);
    return (<div className="well well-lg">
      <ChartToolbar handleStartDateValueChange={this.props.handleStartDateValueChange} handleEndDateValueChange={this.props.handleEndDateValueChange}>

      </ChartToolbar>
      <Chart title={'Per Unit Per Day'} dateArr={this.dateArr} { ...this.pupdProps}/>
    </div>)
  }
}
// dateArr={dateArr}
const  mapStateToProps = state => {
  const isFetching = state.data.pupd.isFetching;
  const pupdProps = state.data.pupd;
  const dateArr = state.data.pupd.dateArr;
  return {isFetching, dateArr, pupdProps,}

}

const mapDispatchToProps = dispatch => bindActionCreators({
  handleStartDateValueChange,
  handleEndDateValueChange
}, dispatch)

export default connect(mapStateToProps, null)(ChartContainer);
// export default ChartContainer;
