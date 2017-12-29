import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Chart from './chart';
import ChartToolbar from './chartToolbar';
const ChartContainer = ({dateArr, dateObj}) => {
  return (
    <div className="well well-lg">
          <ChartToolbar></ChartToolbar>
      <Chart dateArr={dateArr}/>
    </div>
  )
}


const mapStateToProps = state => {
  const isFetching = state.data.pupd.isFetching;
  const dateObj = state.data.pupd.dateObj;
  const dateArr = state.data.pupd.dateArr;
  return {isFetching, dateArr, dateObj}

}

// const mapDispatchToProps = dispatch => bindActionCreators({
//   getAllPUPD,
//   getAllPUPDMock
// }, dispatch)

export default connect(
  mapStateToProps,
  null
  // mapDispatchToProps
)(ChartContainer);
// export default ChartContainer;
