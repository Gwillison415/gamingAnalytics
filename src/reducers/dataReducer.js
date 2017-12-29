import moment from 'moment';

import {STAR_MESSAGE, PUPD_REQUEST_STARTED, PUPD_RECEIVED} from '../actions/dataActions'

import {HANDLE_PUPD_END_DATE_CHANGE, HANDLE_PUPD_START_DATE_CHANGE, LOADING_DATE_CHANGE, UPDATE_START_DATE_DATA} from '../actions/toolbarActions'

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
function createReduxState(json, incomingState, dataType, isUpdate) {

  let state = incomingState;
  state[dataType].isFetching = false
  json.forEach(date => {
    if (!state[dataType].dateObj.date) {



      state[dataType].dateObj[moment(date.date).format('MM/DD/YYYY')] = {};
      state[dataType].dateObj[moment(date.date).format('MM/DD/YYYY')]['coinInPUPD'] = date.coinInPUPD;
      state[dataType].dateObj[moment(date.date).format('MM/DD/YYYY')]["handlePullsPUPD"] = date.handlePullsPUPD;
      state[dataType].dateObj[moment(date.date).format('MM/DD/YYYY')]["netWinPUPD"] = date.netWinPUPD;
      state[dataType].dateObj[moment(date.date).format('MM/DD/YYYY')]["actualHoldPercent"] = date.actualHoldPercent;
      state[dataType].dateObj[moment(date.date).format('MM/DD/YYYY')]["theoHoldPercent "] = date.theoHoldPercent;
      state[dataType].dateObj[moment(date.date).format('MM/DD/YYYY')]["machineDays"] = date.machineDays;
      state[dataType].dateObj[moment(date.date).format('MM/DD/YYYY')]["dateTicks"] = date.dateTicks;

      //create data in O(n) time now to save time later
    if (isUpdate) { // if isUpdate then we must reverse the JSON result array
      // and push dates onto the front of the array so Highcharts can
      // read correctlywhen we have a new start date
      state[dataType].dateArr.unshift(moment(date.date).format('MM/DD/YYYY'))
      state[dataType]["coinInPUPDArray"].unshift(date.coinInPUPD);
      state[dataType]["handlePullsPUPDArray"].unshift(date.handlePullsPUPD);
      state[dataType]["netWinPUPDArray"].unshift(date.netWinPUPD);
      state[dataType]["actualHoldPercentArray"].unshift(date.actualHoldPercent);
      state[dataType]["theoHoldPercentArray"].unshift(date.theoHoldPercent);
      state[dataType]["machineDaysArray"].unshift(date.machineDays);
      state[dataType]["dateTicksArray"].unshift(date.dateTicks);
    } else {
      state[dataType].dateArr.push(moment(date.date).format('MM/DD/YYYY'))
      state[dataType]["coinInPUPDArray"].push(date.coinInPUPD);
      state[dataType]["handlePullsPUPDArray"].push(date.handlePullsPUPD);
      state[dataType]["netWinPUPDArray"].push(date.netWinPUPD);
      state[dataType]["actualHoldPercentArray"].push(date.actualHoldPercent);
      state[dataType]["theoHoldPercentArray"].push(date.theoHoldPercent);
      state[dataType]["machineDaysArray"].push(date.machineDays);
      state[dataType]["dateTicksArray"].push(date.dateTicks);
    }
    }
  })
  state[dataType].entryCount = state[dataType].dateArr.length
  return {
    ...state
  } // ES6 object destructuring to prevent side effects and return immutable data
}

export const DataReducer = (state = initialState, action) => {
  // console.log(state, "looking for initialState");
  switch (action.type) {

    case PUPD_RECEIVED:
      return createReduxState(action.PUPD, state, 'pupd', false) // false for initial call
    case HANDLE_PUPD_END_DATE_CHANGE:
      return {
        ...state,
        pupdDate : {endValue: action.value,
           endFormattedValue: action.formattedValue,
           loading: false}
         }
    case HANDLE_PUPD_START_DATE_CHANGE:
      return {
        ...state,
        pupdDate: {startValue: action.value,
           startFormattedValue: action.formattedValue,
           loading: false}
         }
    case UPDATE_START_DATE_DATA:
        return createReduxState(action.PUPD, state, 'pupd', true)
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
