import moment from 'moment';
import store from '../store';
export const HANDLE_PUPD_END_DATE_CHANGE = "HANDLE_PUPD_END_DATE_CHANGE";
export const HANDLE_PUPD_START_DATE_CHANGE = "HANDLE_PUPD_START_DATE_CHANGE";
export const LOADING_DATE_CHANGE = "LOADING_DATE_CHANGE";
export const UPDATE_START_DATE_DATA = "UPDATE_START_DATE_DATA";

export const handleStartDateValueChange = (value, formattedValue) => {
  console.log('start value change', value, 'value', formattedValue, 'formattedValue' );
  return async (dispatch, getstate) => {
      const dateTicksArray = getstate().data.pupd.dateTicksArray
      let inputValueTimeStamp = moment(formattedValue, 'MM/DD/YYYY').valueOf()
      // console.log(inputValueTimeStamp, 'inputValueTimeStamp', dateTicksArray[0], 'dateTicksArray[0]');
    if (inputValueTimeStamp < dateTicksArray[0]) {
      // dispatch api call for value to dateTicksArray[0]
      const startDate = moment(inputValueTimeStamp).format('YYYY/MM/DD');
      const endDate = moment(dateTicksArray[0]).format('YYYY/MM/DD');

      const response = await makeAPIrequest("pupd", startDate, endDate )
      const json = await response.json()
      console.log(json, 'json');
      dispatch({
        type: UPDATE_START_DATE_DATA,
        PUPD: json.result.reverse(),
      })
    }
    if (value > dateTicksArray[-1]) {
      // NEW api call from dateTicksArray[-1] to value
    }
  // dispatch({ type: LOADING_DATE_CHANGE})
  //
  //   dispatch ({
  //     type: HANDLE_PUPD_START_DATE_CHANGE,
  //     value,
  //     formattedValue,
  //   })

}
}
export const handleEndDateValueChange = (value, formattedValue ) => {
  console.log('end value change', value, 'value', formattedValue, 'formattedValue' );
  return async (dispatch, getstate) => {
  const dateTicksArray = getstate().data.pupd.dateTicksArray
  if (value < dateTicksArray[0]) {
    // dispatch aLL NEW apicall for values
  }
  if (value > dateTicksArray[-1]) {
    // api call from dateTicksArray[-1] to value
  }
  dispatch({ type: LOADING_DATE_CHANGE})

    dispatch ({
      type: HANDLE_PUPD_END_DATE_CHANGE,
      value,
      formattedValue,
    })

}
}
const makeAPIrequest = async (queryType, startDate, endDate, method = 'GET', body = null) => {
  const BASE_URL =  'https://hiring.testgaai.com/ask/floor/';
  if (body) {body = JSON.stringify(body)}
  console.log(BASE_URL + queryType + `?from=${startDate}&to=${endDate}`,'querystring');
  return  await fetch(BASE_URL + queryType + `?from=${startDate}&to=${endDate}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: body
  })
}
