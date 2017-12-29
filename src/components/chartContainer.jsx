import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Chart from './chart';
import ChartToolbar from './chartToolbar';
class ChartContainer extends Component {
  constructor(props) {
  super(props);
  this.pupdProps = this.props.pupdProps
}

componentWillReceiveProps(nextprops) {
    console.log('nextprops', nextprops);
}

  //  console.log('pupdProps in chcontainer', pupdProps);


  render() {
    return (<div className="well well-lg">
      <ChartToolbar></ChartToolbar>
      <Chart title={'Per Unit Per Day'} {...this.pupdProps}/>
    </div>)
  }
}
// dateArr={dateArr}

const mapStateToProps = state => {
  const isFetching = state.data.pupd.isFetching;
  const pupdProps = state.data.pupd;
  const dateArr = state.data.pupd.dateArr;
  return {isFetching, dateArr, pupdProps}

}

// const mapDispatchToProps = dispatch => bindActionCreators({
//   getAllPUPD,
//   getAllPUPDMock
// }, dispatch)

export default connect(mapStateToProps, null
)(ChartContainer);
// export default ChartContainer;
