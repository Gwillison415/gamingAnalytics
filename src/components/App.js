import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Route } from "react-router-dom";
import {
  getAllPUPD,
  getAllPUPDMock,
} from '../actions/dataActions.js';
import {handleStartDateValueChange, handleEndDateValueChange} from '../actions/toolbarActions';
import ChartContainer from './chartContainer';


class App extends Component {

  constructor(props) {
    super(props);
    this.pupdProps = this.props.pupdProps;
    // this.dateArr = this.props.dateArr
  }
   componentDidMount(){
  //  console.log(this.props.getAllPUPD.toString());
    this.props.getAllPUPDMock();
  }
  componentWillReceiveProps(nextprops) {
    // this.handleStartDateValueChange
    console.log('inside componentWillReceiveProps', nextprops);
  }

  render() {

    if (this.props.isFetching === true ) {
      return <div>Loading</div>
    }
    return (
      // <div>
        <ChartContainer { ...this.pupdProps}/>
      // </div>

    );
  }
}


const mapStateToProps = state => {
  const isFetching = state.data.pupd.isFetching;
  const pupdProps = state.data.pupd;
  // const dateArr = state.data.pupd.dateArr;
  return {isFetching, pupdProps}

}

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllPUPD,
  getAllPUPDMock,
  handleStartDateValueChange
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
