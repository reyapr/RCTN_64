import React from 'react'

export default class Counter2 extends React.Component {
    
    shouldComponentUpdate(nextProps) {
        if(nextProps.num !== this.props.num) {
            return true
        }
        
        return false
    }
    
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