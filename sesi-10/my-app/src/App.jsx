import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/actions/counter'


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
        <button onClick={() => dispatch(increment(2))}>+</button> {' '}
        <button onClick={() => dispatch(decrement(1))}>-</button> 
      </div>
    </div>
  );
}




export default App;
