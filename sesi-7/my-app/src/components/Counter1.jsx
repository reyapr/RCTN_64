import React from 'react'

export default class Counter1 extends React.Component {
    shouldComponentUpdate(nextProps) {
        if(nextProps.num !== this.props.num) {
            return true
        }
        
        return false
    }
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