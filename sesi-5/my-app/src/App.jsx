import React from 'react';
import './App.css';


class User extends React.Component {
  render() {
    return (
      <div>
        <div>
          username: {this.getUsername()}
        </div>
        <div>
          email: {this.state.email}
        </div>
        <div>
          <button onClick={this.changeUsername}>change username</button>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: 'udin',
      email: 'udin@seduniaa.com',
      password: 'test',
      number: 0
    }
    this.changeUsername = this.changeUsername.bind(this)
  }
  
  getUsername() {
    return this.state.username
  }
  
  changeUsername() {
    this.setState({
      username: 'bambang'
    })
  }
  
  increment = (n) => {
    this.setState({
      number: this.state.number + n
    })
  }
  
  decrement = (n) => {
    this.setState({
      number: this.state.number - n
    })
  }
  
  render() {
    console.log('render')
    return (
      <div>
        <User email={this.state.email}/>
        <hr />
        <div className='App'>
          <div>{this.state.number}</div>
          <div>
            <button onClick={() => this.increment(2)}>+</button>
            
            <button onClick={() => this.decrement(2)}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
