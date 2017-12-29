import {
HANDLE_END_DATE_CHANGE,
HANDLE_START_DATE_CHANGE,
LOADING_DATE_CHANGE,
} from '../actions/toolbarActions'


const initialState = {
  startValue: '08/01/2017',
  endValue: '12/31/2017',
  loading: true,
}


export const ToolbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_END_DATE_CHANGE:
      return {
        endValue : action.value,
        endFormattedValue: action.formattedValue,
        loading: false,
      }
    case HANDLE_START_DATE_CHANGE:
    return {
      startValue : action.value,
      startFormattedValue: action.formattedValue,
      loading: false,
    }
    case LOADING_DATE_CHANGE:
      return {
        loading: true,
      }
    default:
      // console.log(state, 'reducer state');
      return {...state}
  }
}
