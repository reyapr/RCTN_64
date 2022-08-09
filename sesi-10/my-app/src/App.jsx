import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import CounterCl from './features/CounterCl';
import { decrement, increment } from './features/CounterCl/slice';


function App() {
  const state = useSelector((state) => {
      return {
        ...state
      }
  })
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <h1>{state.title}</h1>
      <div>{state.number}</div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button> {' '}
        <button onClick={() => dispatch(decrement())}>-</button> 
      </div>
      <hr />
      <CounterCl/>
    </div>
  );
}




export default App;
