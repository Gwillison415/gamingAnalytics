export const HANDLE_END_DATE_CHANGE = "HANDLE_END_DATE_CHANGE";
export const HANDLE_START_DATE_CHANGE = "HANDLE_START_DATE_CHANGE";
export const LOADING_DATE_CHANGE = "LOADING_DATE_CHANGE"

export const handleStartDateValueChange = (value, formattedValue) => {
  console.log('start value change', value, 'value', formattedValue, 'formattedValue' );
  return async (dispatch) => {
  dispatch({ type: LOADING_DATE_CHANGE})

    dispatch ({
      type: HANDLE_START_DATE_CHANGE,
      value,
      formattedValue,
    })

}
}
export const handleEndDateValueChange = (value, formattedValue ) => {
  console.log('end value change', value, 'value', formattedValue, 'formattedValue' );
  return async (dispatch) => {
  dispatch({ type: LOADING_DATE_CHANGE})

    dispatch ({
      type: HANDLE_END_DATE_CHANGE,
      value,
      formattedValue,
    })

}
}


// else if (type === "Start") {
//   dispatch( {
//     type: HANDLE_START_DATE_CHANGE,
//     value,
//     formattedValue,
//   })
// }
