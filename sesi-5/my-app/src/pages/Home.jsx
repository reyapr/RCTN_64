import React from 'react'
import User from '../organism/User'
import Counter from '../components/Counter'

export default class Home extends React.Component {
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
            number: Number(this.state.number) + n
        })
    }
    
    decrement = (n) => {
        this.setState({
            number: Number(this.state.number) - n
        })
    }
    render() {
        return (
            <>
                <User 
                    email={this.state.email} 
                    username={this.getUsername()}
                    changeUsername={this.changeUsername}
                    />
                <hr />
                <Counter 
                    num={this.state.number} 
                    increment={this.increment}
                    decrement={this.decrement}
                    />
            </>
        )
    }
}