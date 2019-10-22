import React, { useReducer} from 'react'
import { countReducer, countIntialState } from '../common/reducers/countReducer';
import { CountReducerType } from '../common/enums/types';

const Home = () => {
  const [state, dispatch] = useReducer(countReducer, countIntialState);
  const { INCREMENT, DECREMENT } = CountReducerType;
  return (
    <>
      {state.count}
      <button onClick={() => dispatch({type: INCREMENT})}>+</button>
     <button onClick={() => dispatch({type: DECREMENT})}>-</button>
    </>
    
  )
}
export default Home
