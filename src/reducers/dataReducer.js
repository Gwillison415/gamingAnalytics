// import {applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { toggleProperty } from '../actions/index';

import {STAR_MESSAGE, PUPD_REQUEST_STARTED, PUPD_RECEIVED} from '../actions/dataActions'

import {HANDLE_END_DATE_CHANGE, HANDLE_START_DATE_CHANGE, LOADING_DATE_CHANGE} from '../actions/toolbarActions'

const ToolbarinitialState = {
  startValue: '08/01/2017',
  endValue: '12/31/2017',
  loading: true
}

const initialState = {
  pupd: {
    dateObj: {},
    dateArr: [],
    coinInPUPDArray: [],
    handlePullsPUPDArray: [],
    netWinPUPDArray: [],
    actualHoldPercentArray: [],
    theoHoldPercentArray: [],
    machineDaysArray: [],
    dateTicksArray: [],
    isFetching: true,
    entryCount: 0,

  },
  pupdDate: {
    endValue: '',
    endFormattedValue: '12/31/2017',
    startValue: '',
    startFormattedValue: '08/01/2017'
  }
}
//return a new state.dailyDate object for the redux store
function createReduxState(json, incomingState, dataType) {

  let state = incomingState;
  state[dataType].isFetching = false
  json.forEach(date => {
    if (!state[dataType].dateObj.date) {

      state[dataType].dateArr.push(date.date)
      state[dataType].dateObj[date.date] = {};
      state[dataType].dateObj[date.date]['coinInPUPD'] = date.coinInPUPD;
      state[dataType].dateObj[date.date]["handlePullsPUPD"] = date.handlePullsPUPD;
      state[dataType].dateObj[date.date]["netWinPUPD"] = date.netWinPUPD;
      state[dataType].dateObj[date.date]["actualHoldPercent"] = date.actualHoldPercent;
      state[dataType].dateObj[date.date]["theoHoldPercent "] = date.theoHoldPercent;
      state[dataType].dateObj[date.date]["machineDays"] = date.machineDays;
      state[dataType].dateObj[date.date]["dateTicks"] = date.dateTicks;

      //create data in O(n) time now to save time later
      state[dataType]["coinInPUPDArray"].push(date.coinInPUPD);
      state[dataType]["handlePullsPUPDArray"].push(date.handlePullsPUPD);
      state[dataType]["netWinPUPDArray"].push(date.netWinPUPD);
      state[dataType]["actualHoldPercentArray"].push(date.actualHoldPercent);
      state[dataType]["theoHoldPercentArray"].push(date.theoHoldPercent);
      state[dataType]["machineDaysArray"].push(date.machineDays);
      state[dataType]["dateTicksArray"].push(date.dateTicks);
    }
  })
  state[dataType].entryCount = state[dataType].dateArr.length
  return {
    ...state
  } // ES6 object destructuring to
}

export const DataReducer = (state = initialState, action) => {
  // console.log(state, "looking for initialState");
  switch (action.type) {

    case PUPD_RECEIVED:
      return createReduxState(action.PUPD, state, 'pupd')
    case HANDLE_END_DATE_CHANGE:
      return {
        ...state,
        pupdDate : {endValue: action.value,
           endFormattedValue: action.formattedValue,
           loading: false}
         }
    case HANDLE_START_DATE_CHANGE:
      return {
        ...state,
        pupdDate: {startValue: action.value,
           startFormattedValue: action.formattedValue,
           loading: false}
         }
    case LOADING_DATE_CHANGE:
      return {
        ...state,
        loading: true}
    default:

      return {
        ...state
      }
  }
}
