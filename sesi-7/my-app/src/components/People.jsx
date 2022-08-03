import React from 'react';
import axios from 'axios';
import PersonDetails from './PersonDetails';

class People extends React.Component {
  constructor() {
    super()
    console.log('%c <=================== constructor ==================', 'color: #42f55d');
    this.state = {
      people: [],
      peopleDetails: null,
      endpointDetails: ''
    }
  }
  
  getDetails = (url) => {
    this.setState({
      peopleDetails: null,
      endpointDetails: url
    })
  }
  
  async componentDidUpdate(prevProps, prevState) {
    if(prevState.endpointDetails !== this.state.endpointDetails) {
      console.log( `%c <=================== did update ==================`, 'color: #fc4903'); 
      const res = await axios.get(this.state.endpointDetails)
      this.setState({
        peopleDetails: res.data
      })
    }
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
    console.log(this.state, `%c <=================== state ==================`, 'color: #f5ad42');
    const isLoading = this.state.people.length === 0
    const isPeopleDetailsEmpty = !this.state.peopleDetails
    
    return (
      <div>
        <ul style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between' }}>
          {
            isLoading ?
              <b>...Loading</b>
              :
              this.state.people.map((data, index) => {
                const isPersonHasDetailsInfo = data.url === this.state.endpointDetails
                return (
                  <>
                    <li 
                      key={index} 
                      style={{ display: 'flex'}}
                    >
                      <div style={{ flex: 1 }}>
                        <div><b>name:</b> {data.name}</div> 
                        <div><b>height:</b> {data.height}</div>
                        <div>
                          <button onClick={() => this.getDetails(data.url)}>Get Details</button>
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        {
                          isPeopleDetailsEmpty || !isPersonHasDetailsInfo ? // true false
                          ''
                          :
                          <PersonDetails details={this.state.peopleDetails.hair_color} />
                        }
                      </div>
                      <br />
                    </li>
                    <br />
                  </>
                )
              })
          }
        </ul>
      </div>
    );
  }
}

export default People;
