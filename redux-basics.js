// Node js insallation
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    // THIS IS MUTABLE DONT DO THIS
    // state.counter++;
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === 'ADD_COUNTER') {
    // THIS IS MUTABLE DONT DO THIS
    // state.counter++;
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription gets triggered whenever the state gets updated
// Subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

// Dispatching action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
