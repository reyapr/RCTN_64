import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useEffect } from 'react';
import User from './components/User';
import Auth from './components/Auth';

function App() {
  return (
    <>
      <div className="App">
        <Counter/>
      </div>
      <hr />
      <User/>
      <hr />
      <Auth/>
    </>
  );
}

export default App;
