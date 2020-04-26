import * as actionTypes from './actionTypes';

export const saveResult = ( res ) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  }
}

export const storeResult = (res) => {
  // We want to simulate that we only store results after 2 seconds of reaching out to a server
  return dispatch => {
    setTimeout( () => {
      dispatch(saveResult(res));
    }, 2000);
  }
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};

export const deleteResult = (resEleId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElementId: resEleId
  };
};
