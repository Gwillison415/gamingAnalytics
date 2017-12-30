import moment from 'moment';

export const HANDLE_PUPD_END_DATE_CHANGE = "HANDLE_PUPD_END_DATE_CHANGE";
export const HANDLE_PUPD_START_DATE_CHANGE = "HANDLE_PUPD_START_DATE_CHANGE";
export const LOADING_DATE_CHANGE = "LOADING_DATE_CHANGE";
export const UPDATE_PUPD_START_DATE_DATA = "UPDATE_PUPD_START_DATE_DATA";
export const NEW_START_DATE_CALL = "NEW_START_DATE_CALL";
export const START_DATE_CANCELLED = "START_DATE_CANCELLED";
export const UPDATE_END_DATE_DATA = "UPDATE_END_DATE_DATA";

export const handleStartDateValueChange = (value, formattedValue) => {

  return async (dispatch, getstate) => {
    const dateTicksArray = getstate().data.pupd.dateTicksArray
    let inputValueTimeStamp = moment(formattedValue, 'MM/DD/YYYY').valueOf()

    if (inputValueTimeStamp < dateTicksArray[0]) {
      // dispatch api call for value to dateTicksArray[0]
      // should mean less 'accross the wire' until end date is lengthened
      const startDate = moment(inputValueTimeStamp).format('YYYY/MM/DD');
      const endDate = moment(dateTicksArray[0]).format('YYYY/MM/DD');
      dispatch({type: HANDLE_PUPD_START_DATE_CHANGE, value, formattedValue})
      const response = await makeAPIrequest("pupd", startDate, endDate)
      const json = await response.json()
      console.log(json, 'json');
      dispatch({type: UPDATE_PUPD_START_DATE_DATA, PUPD: json.result.reverse()})
    }
    if (inputValueTimeStamp > dateTicksArray.pop()) {
      console.log(inputValueTimeStamp - dateTicksArray.pop());
      const startDate = moment(inputValueTimeStamp).format('YYYY/MM/DD');
      const endDate = moment(getstate().data.pupdDate.endValue).format('YYYY/MM/DD');
      console.log(startDate, 's', endDate);
      dispatch({type: HANDLE_PUPD_START_DATE_CHANGE, value, formattedValue})
      const response = await makeAPIrequest("pupd", startDate, endDate)
      const json = await response.json()
      console.log(json, 'json');
      dispatch({type: NEW_START_DATE_CALL, PUPD: json.result})
    } else {
      dispatch({type: START_DATE_CANCELLED})
    }

  }
}
export const handleEndDateValueChange = (value, formattedValue) => {

  let inputValueTimeStamp = moment(formattedValue, 'MM/DD/YYYY').valueOf()

  console.log('end value change', value, 'value', formattedValue, 'formattedValue');
  return async (dispatch, getstate) => {
    const dateTicksArray = getstate().data.pupd.dateTicksArray
    if (inputValueTimeStamp < dateTicksArray[0]) {
      // dispatch aLL NEW apicall for values
    }
    if (inputValueTimeStamp > dateTicksArray.pop()) {
      // api call from dateTicksArray[-1] to value
      const startDate = moment(inputValueTimeStamp).format('YYYY/MM/DD');
      const endDate = moment(dateTicksArray[0]).format('YYYY/MM/DD');
      dispatch({type: HANDLE_PUPD_END_DATE_CHANGE, value, formattedValue})
      const response = await makeAPIrequest("pupd", startDate, endDate)
      const json = await response.json()
      console.log(json, 'json');
      dispatch({type: UPDATE_END_DATE_DATA, PUPD: json.result})
    }

  }
}

// dispatch({ type: LOADING_DATE_CHANGE})
//
//   dispatch ({
//     type: HANDLE_PUPD_END_DATE_CHANGE,
//     value,
//     formattedValue,
//   })

const makeAPIrequest = async (queryType, startDate, endDate, method = 'GET', body = null) => {
  const BASE_URL = 'https://hiring.testgaai.com/ask/floor/';
  if (body) {
    body = JSON.stringify(body)
  }
  console.log(BASE_URL + queryType + `?from=${startDate}&to=${endDate}`, 'querystring');
  return await fetch(BASE_URL + queryType + `?from=${startDate}&to=${endDate}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: body
  })
}
