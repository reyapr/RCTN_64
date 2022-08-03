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
  
  addCounter1 = () => {
    this.setState({
      num1: this.state.num1 + 1
    })
  }
  
  addCounter2 = () => {
    this.setState({
      num2: this.state.num2 + 1
    })
  } 
 
  render() {
    return (
      <div>
        {/* <br />
        Counter:1
        <Counter1 num={this.state.num1} add={this.addCounter1}/>
        <br />
        <br />
        Counter:2
        <Counter2 num={this.state.num2} add={this.addCounter2}/> */}
        <People/>
      </div>
    );
  }
}

export default App;
