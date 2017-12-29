import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Chart from './chart';
import ChartToolbar from './chartToolbar';
const ChartContainer = ({props}) => {
  let { ...allPUPDprops} = props
  console.log('props in chcontainer', props);
  return (
    <div className="well well-lg">
          <ChartToolbar></ChartToolbar>
          <Chart  title={'Per Unit Per Day'} {...allPUPDprops}/>
    </div>
  )
}
// dateArr={dateArr}

const mapStateToProps = state => {
  const isFetching = state.data.pupd.isFetching;
  const props = state.data.pupd;
  const dateArr = state.data.pupd.dateArr;
  return {isFetching, dateArr, props}

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
