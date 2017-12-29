// import {applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { toggleProperty } from '../actions/index';

import {
  STAR_MESSAGE,
  PUPD_REQUEST_STARTED,
  PUPD_RECEIVED,
  TOGGLE_SELECT,
  TOGGLE_READ,
  SUBMIT_COMPOSED_MESSAGE,
  SENDING_MESSAGE_STARTED,
  SHOW_FULL_MESSAGE
} from '../actions/dataActions'


const initialState = {
  pupd :{dateObj: {},
  dateArr: [],
  coinInPUPDArray : [],
  handlePullsPUPDArray: [],
  netWinPUPDArray: [],
  actualHoldPercentArray: [],
  theoHoldPercentArray: [],
  machineDaysArray: [],
  dateTicksArray: [],
  isFetching: true,
  entryCount : 0},
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
  state[dataType].entryCount  = state[dataType].dateArr.length
  return {
    ...state,
  } // ES6 object destructuring to
}

export const DataReducer = (state = initialState, action) => {
  // console.log(state, "looking for initialState");
  switch (action.type) {

    case PUPD_RECEIVED:
      return createReduxState(action.PUPD, state, 'pupd')

    default:

      return {...state}
  }
}
