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
    const response = await makeAPIrequest("pupd", "017/11/04", "017/12/04");
    // console.log('typeof response', response);
    const json = await response.json()
    dispatch({
      type: PUPD_RECEIVED,
      PUPD: json.result,
    })
  }
}

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
export const getAllAregateMock = () => {
  // console.log('before dispatch');
  return async (dispatch) => {
    dispatch({ type: AGGR_REQUEST_STARTED })
    const json = await pupd
    dispatch({
      type: AGGR_RECEIVED,
      PUPD: json.result,
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
