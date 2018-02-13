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
console.log(Store.getState().toggle);

//log SelectionReducer each time the state changes
const unsubsribe = Store.subscribe(() => {
  console.log(Store.getState().selections);
  console.log(Store.getState().toggle);
});

//Store.dispatch(ToggleModal());
//Store.dispatch(SelectCapo(3));
