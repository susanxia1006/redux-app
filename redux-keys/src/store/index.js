import {
  createStore,
} from 'redux';


import Reducer from '../reducers';


const Store = createStore(
  Reducer,
);

export default Store;

// debug code
console.log(Store.getState().selections);

//log SelectionReducer each time the state changes
const unsubsribe = Store.subscribe(() => {
  console.log(Store.getState().selections);
});

//Store.dispatch(SelectKey(5));
//Store.dispatch(SelectCapo(3));
