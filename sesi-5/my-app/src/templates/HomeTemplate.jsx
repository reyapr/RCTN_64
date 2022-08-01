import React from 'react'
import User from '../organism/User'
import Counter from '../components/Counter'

export default class HomeTemplate extends React.Component {
    render() {
        let username;
        try {
            username = this.props.getUsername()
        } catch {
            username = 'username'
        }
        return (
            <>
                <div>test</div>
            </>
        )
    }
}