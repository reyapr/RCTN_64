import React from 'react';
import axios from 'axios';

class People extends React.Component {
  constructor() {
    super()
    console.log('%c <=================== constructor ==================', 'color: #42f55d');
    this.state = {
      people: []
    }
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
  
  async componentDidMount() {
    // fetch in here
    console.log( `%c <=================== did mount ==================`, 'color: #42cbf5');
    const res = await axios.get('https://swapi.dev/api/people')
    this.setState({
      people: res.data.results
    })
  }
  
  render() {
    console.log(this.state.people, `%c <=================== state ==================`, 'color: #f5ad42');
    const isLoading = this.state.people.length === 0
    return (
      <div>
        <ul>
          {
            isLoading ?
              <b>...Loading</b>
              :
              this.state.people.map((data, index) => {
                return (
                  <li key={index}>
                    <div><b>name:</b> {data.name}</div> 
                    <div><b>height:</b> {data.height}</div>
                    <br />
                  </li>
                )
              })
          }
        </ul>
      </div>
    );
  }
}

export default People;
