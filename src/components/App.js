import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllPUPD, getAllPUPDMock, getAllAGGR, getAllAGGRMock, getAllMFGMIX, getAllMFGMIXMock} from '../actions/dataActions.js';
import {handleStartDateValueChange, handleEndDateValueChange} from '../actions/toolbarActions';
import PUPDChartContainer from './PUPDChartContainer';
import AGGRChartContainer from './AGGRChartContainer';
import {MFMIXChartContainer} from './MFMIXChartContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.pupdProps = this.props.pupdProps;
    this.aggrProps = this.props.aggrProps;
    this.mfgmixProps = this.props.mfgmixProps;
    this.startDate = this.props.startDate;
    this.endDate = this.props.endDate;
  }
  componentDidMount() {
    //  console.log(this.props.getAllPUPD.toString());
    this.props.getAllAGGRMock();
    this.props.getAllPUPDMock();
    this.props.getAllMFGMIXMock()
  }
  componentWillReceiveProps(nextprops) {
    // this.handleStartDateValueChange
    console.log('inside componentWillReceiveProps', nextprops);
  }

  render() {

    if (this.props.isFetching === true) {
      return <div>Loading Data</div>
    }
    return (<div>
      <AGGRChartContainer title={"In Aggregate"} { ...this.aggrProps}></AGGRChartContainer>
      <PUPDChartContainer title={'Per Unit Per Day'} { ...this.pupdProps}/>
      <MFMIXChartContainer title={`Data by Manufacturer`} {...this.mfgmixProps}> </MFMIXChartContainer>
    </div>);
  }
}
// from ${this.startDate} to ${this.endDate}
const mapStateToProps = state => {
  const isFetching = state.data.pupd.isFetching;
  const pupdProps = state.data.pupd;
  const aggrProps = state.data.aggr;
  const mfgmixProps = state.data.mfgmix;
  const startDate = state.data.pupdDate.startFormattedValue;
  const endDate = state.data.pupdDate.endFormattedValue;
  return {isFetching, pupdProps, aggrProps, mfgmixProps}

}

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllPUPD,
  getAllPUPDMock,
  getAllAGGR,
  getAllAGGRMock,
  getAllMFGMIX,
  getAllMFGMIXMock,
  handleStartDateValueChange,
  handleEndDateValueChange
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
