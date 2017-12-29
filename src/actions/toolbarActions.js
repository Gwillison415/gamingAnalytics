export const HANDLE_END_DATE_CHANGE = "HANDLE_END_DATE_CHANGE";
export const HANDLE_START_DATE_CHANGE = "HANDLE_START_DATE_CHANGE";
export const LOADING_DATE_CHANGE = "LOADING_DATE_CHANGE"

export const handleDateValueChange = (value, formattedValue, type) => {
  console.log(value, 'value', formattedValue, 'formattedValue', type, 'type' );
  return (dispatch) => {
  dispatch({ type: LOADING_DATE_CHANGE})
  if (type === "End") {
    dispatch ({
      type: HANDLE_END_DATE_CHANGE,
      value,
      formattedValue,
    })

  } else if (type === "Start") {
    dispatch( {
      type: HANDLE_START_DATE_CHANGE,
      value,
      formattedValue,
    })
  }
}
}
