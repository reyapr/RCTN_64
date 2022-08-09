import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import CounterCl from './features/CounterCl';
import { decrement, increment } from './features/CounterCl/slice';
import CounterFn from './features/CounterFn';


function App() {  
  return (
    <div className="App">
      <CounterFn/>
      <hr />
      <CounterCl/>
    </div>
  );
}




export default App;
