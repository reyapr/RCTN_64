import React from 'react'

export default class Counter1 extends React.Component {
    render() {
        console.log(`%c <=================== counter1 ==================`, 'color: #42f5da');
        return (
            <>
                <div>{this.props.num}</div>
                <button onClick={this.props.add}>+</button>
            </>
        )
    }   
}