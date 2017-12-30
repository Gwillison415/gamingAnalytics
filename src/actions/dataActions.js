import pupd from '../mockData/pupd';
import aggr from '../mockData/aggr';
import mfgmix from '../mockData/mfgmix';

export const PUPD_REQUEST_STARTED = "PUPD_REQUEST_STARTED";
export const PUPD_RECEIVED = 'PUPD_RECEIVED';
export const AGGR_REQUEST_STARTED = "AGGR_REQUEST_STARTED";
export const AGGR_RECEIVED = "AGGR_RECEIVED";


export const getAllPUPD = () => {
  // console.log('before dispatch');
  return async (dispatch) => {
    dispatch({ type: PUPD_REQUEST_STARTED })
    const response = await makeAPIrequest("pupd", "2017/11/04", "2017/12/04");
    // console.log('typeof response', response);
    const json = await response.json()
    dispatch({
      type: PUPD_RECEIVED,
      PUPD: json.result,
    })
  }
}
// mock data call to limit api usage in dev
export const getAllPUPDMock = () => {
  // console.log('before dispatch');
  return async (dispatch) => {
    dispatch({ type: PUPD_REQUEST_STARTED })
    const json = await pupd
    dispatch({
      type: PUPD_RECEIVED,
      PUPD: json.result,
    })
  }
}
// mock data call to limit api usage in dev
export const getAllAGGRMock = () => {
  // console.log('before dispatch');
  return async (dispatch) => {
    dispatch({ type: AGGR_REQUEST_STARTED })
    const json = await aggr;
    dispatch({
      type: AGGR_RECEIVED,
      PUPD: json.result.reverse(),
    })
  }
}

export const getAllAGGR = () => {
  // console.log('before dispatch');
  return async (dispatch) => {
    dispatch({ type: AGGR_REQUEST_STARTED })
    const response = await makeAPIrequest("aggr", "2017/11/04", "2017/12/04");
    // console.log('typeof response', response);
    const json = await response.json()
    dispatch({
      type: AGGR_RECEIVED,
      PUPD: json.result.reverse(),
    })
  }
}

const makeAPIrequest = async (queryType, startDate, endDate, method = 'GET', body = null) => {
  const BASE_URL =  'https://hiring.testgaai.com/ask/floor/';
  if (body) {body = JSON.stringify(body)}
  console.log('querystring created for api call --> ', BASE_URL + queryType + `?from=${startDate}&to=${endDate}`);
  return  await fetch(BASE_URL + queryType + `?from=${startDate}&to=${endDate}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: body
  })
}
