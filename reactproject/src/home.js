import React ,{ useReducer } from 'react'
const reducer = (state,action) => {
  switch(action.type) {
    case 'INCREMENT':
    return {count: state.count+5};
    break;
    case 'DECREMENT':
    return {count: state.count-3};
    break;
    default:
    return state;
  }
}

function HomeComponent() {
  const initialState ={count:8}
  const [state,dispatch] = useReducer(reducer,initialState);

  const increment = () => {
    dispatch({type:"INCREMENT"})
  }
  const decrement = () => {
    dispatch({type:"DECREMENT"})
  }
  return (
    <div class="hey">
      <h2>USE REDUCER DEMO</h2>
      <button onClick={increment}>+</button>
      <button>{state.count}</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default HomeComponent;