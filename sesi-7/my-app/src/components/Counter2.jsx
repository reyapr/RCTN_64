import React from 'react'

export default class Counter2 extends React.Component {
    render() {
        console.log(`%c <=================== counter2 ==================`, 'color: #f242f5');
        return (
            <>
                <div>{this.props.num}</div>
                <button onClick={this.props.add}>+</button>
            </>
        )
    }   
}