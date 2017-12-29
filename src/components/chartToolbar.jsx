import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, Route, Switch, withRouter} from 'react-router-dom'
import DatePickerComponent from './datePicker';


class ChartToolbar extends Component {

  render() {

    const entryCount = this.props.entryCount


    return (<div className="row toolbar">


        <div className="row" >
          <div className="col-md-3 col-sm-2">
            <DatePickerComponent type={'Start'}></DatePickerComponent>
          </div>
        <div className="col-md-3 col-sm-2">
          <DatePickerComponent type={'End'}></DatePickerComponent>
        </div>
        <div className="col-md-2">
          <p className="pull-right">
            <span className="badge badge">{entryCount}</span>

            { entryCount === 1
                ? 'Day'
                : 'Days'
            }
          </p>
        </div>
      </div>
    </div>);
  }

}

const mapStateToProps = state => {
  let entryCount = state.data.pupd.entryCount;
  let loading = state.toolbar.loading;
  return {loading, entryCount}
}
// const mapDispatchToProps = dispatch => bindActionCreators({

// }, dispatch)
//
export default withRouter(connect(mapStateToProps, null)(ChartToolbar))
