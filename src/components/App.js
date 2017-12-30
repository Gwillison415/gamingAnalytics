import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllPUPD, getAllPUPDMock, getAllAGGR, getAllAGGRMock} from '../actions/dataActions.js';
import {handleStartDateValueChange, handleEndDateValueChange} from '../actions/toolbarActions';
import PUPDChartContainer from './PUPDChartContainer';
import AGGRChartContainer from './AGGRChartContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.pupdProps = this.props.pupdProps;
    this.aggrProps = this.props.aggrProps;
  }
  componentDidMount() {
    //  console.log(this.props.getAllPUPD.toString());
    this.props.getAllAGGR();
    this.props.getAllPUPD();
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
    </div>);
  }
}

const mapStateToProps = state => {
  const isFetching = state.data.pupd.isFetching;
  const pupdProps = state.data.pupd;
  const aggrProps = state.data.aggr;
  return {isFetching, pupdProps, aggrProps}

}

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllPUPD,
  getAllPUPDMock,
  getAllAGGR,
  getAllAGGRMock,
  handleStartDateValueChange,
  handleEndDateValueChange
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
