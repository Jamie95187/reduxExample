import * as actionTypes from '../actions/actionTypes';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch ( action.type ) {
    case actionTypes.STORE_RESULT:
    // Change data by multiplying by two
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result * 2})
      }
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updatedArray = state.results.filter(result => result.id !== action.resultElementId);
      return {
        ...state,
        // results: newArray
        results: updatedArray
      }
  }
  return state;
}

export default reducer;
