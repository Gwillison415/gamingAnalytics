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
import ChartContainer from './chartContainer';


class App extends Component {

   componentDidMount(){
  //  console.log(this.props.getAllPUPD.toString());
    this.props.getAllPUPDMock();
  }

  render() {
    if (this.props.isFetching === true ) {
      return <div>Loading</div>
    }
    return (
      // <div>
        <ChartContainer/>
      // </div>

    );
  }
}


const mapStateToProps = state => {
  const isFetching = state.data.pupd.isFetching;
  return {isFetching}

}

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllPUPD,
  getAllPUPDMock
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
