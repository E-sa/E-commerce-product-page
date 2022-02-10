import { createStore } from "redux";

const initialState = {
  counter: 0,
  addtoCart: false
}




const rootReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 }


    case 'DECREMENT':
      if (state.counter > 0)
        return { ...state, counter: state.counter - 1 }

    case 'ADD_TO_CART':
      if (state.counter !== 0)
        return { ...state, addtoCart: state.counter }

    case 'TRASHBIN_CLICKED':
      return { ...state, addtoCart: false }

    default:
      return state;
  }

};

const store = createStore(rootReducer);





store.subscribe(() => console.log(store.getState()));

export default store;