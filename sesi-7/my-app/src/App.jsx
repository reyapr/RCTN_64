import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import People from './components/People';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      num1: 0,
      num2: 0
    }
  }
 
  render() {
    return (
      <div className='App'>
        <br />
        <Counter1 num={this.state.num1}/>
        <br />
        <br />
        <Counter2 num={this.state.num2}/>
      </div>
    );
  }
}

export default App;
