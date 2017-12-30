import moment from 'moment';

import {PUPD_REQUEST_STARTED, PUPD_RECEIVED, AGGR_RECEIVED, AGGR_REQUEST_STARTED} from '../actions/dataActions'

import {HANDLE_PUPD_END_DATE_CHANGE, HANDLE_PUPD_START_DATE_CHANGE, LOADING_DATE_CHANGE, UPDATE_PUPD_START_DATE_DATA, NEW_START_DATE_CALL} from '../actions/toolbarActions'

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
    entryCount: 0
  },
  pupdDate: {
    endValue: '2017-12-02T20:00:00.000Z',
    endFormattedValue: '12/02/2017',
    startValue: '',
    startFormattedValue: '08/01/2017'
  },
  aggr: {
    dateObj: {},
    dateArr: [],
    coinInArray: [],
    coinOutArray: [],
    jackpotsArray: [],
    handlePullsArray: [],
    netWinArray: [],
    dateTicksArray: [],
    theoWinArray: [],
    isFetching: true,
    entryCount: 0
  }
}

export const DataReducer = (state = initialState, action) => {
  // console.log(state, "looking for initialState");
  switch (action.type) {

    case PUPD_RECEIVED:
      return createPUPDorAGGRReduxState(action.PUPD, state, 'pupd', false) // false for initial call
    case AGGR_RECEIVED:
      return createPUPDorAGGRReduxState(action.PUPD, state, 'aggr', false)
    case HANDLE_PUPD_END_DATE_CHANGE:
      return {
        ...state,
        pupdDate: {
          endValue: action.value,
          endFormattedValue: action.formattedValue,
          loading: false
        }
      }
    case HANDLE_PUPD_START_DATE_CHANGE:
      return {
        ...state,
        pupdDate: {
          startValue: action.value,
          startFormattedValue: action.formattedValue,
          loading: false
        }
      }
    case UPDATE_PUPD_START_DATE_DATA:
      return Object.assign({}, createPUPDorAGGRReduxState(action.PUPD, state, 'pupd', true)) // true for update
    case LOADING_DATE_CHANGE:
      return {
        ...state,
        loading: true
      }
    case NEW_START_DATE_CALL:
      return createPUPDorAGGRReduxState(action.PUPD, initialState, 'pupd', false)
    default:

      return {
        ...state
      }
  }
}
//return a new state.dailyDate object for the redux store
function createPUPDorAGGRReduxState(json, incomingState, dataType, isUpdate) {

  let state = incomingState;
  state[dataType].isFetching = false
  json.forEach(date => {
    if (!state[dataType].dateObj.date) {
      state[dataType].dateObj[moment(date.date).format('MM/DD/YYYY')] = {};
      let keys = Object.keys(date).slice(1)

      keys.forEach(key => {
        state[dataType].dateObj[moment(date.date).format('MM/DD/YYYY')][key] = date[key];
      })

      //create data in O(n) time now to save time later
      if (isUpdate) { // if isUpdate then we must reverse the JSON result array
        // and push dates onto the front of the array so Highcharts can
        // read correctlywhen we have a new start date
        state[dataType].dateArr.unshift(moment(date.date).format('MM/DD/YYYY'))
        keys.forEach(key => {
          state[dataType][`${key}Array`].unshift(date[key]);
        })
      } else {
        state[dataType].dateArr.push(moment(date.date).format('MM/DD/YYYY'))
        keys.forEach(key => {
          state[dataType][`${key}Array`].push(date[key]);
        })

      }
    }
  })
  state[dataType].entryCount = state[dataType].dateArr.length
  return {
    ...state
  } // ES6 object destructuring to prevent side effects and return immutable data
}
