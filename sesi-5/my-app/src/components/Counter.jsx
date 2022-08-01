import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
    render() {
        let is2digit = false
        if(this.props.num.length > 1) {
            is2digit = true
        } else {
            is2digit = false
        }
        return (
            <div className='App'>
                <div>{this.props.num}</div>
                <div>
                <button onClick={() => this.props.increment(2)}>+</button>
                <button onClick={() => this.props.decrement(2)}>-</button>
                {
                    is2digit ? <div style={{ color: 'red' }}>the number should be 1 digit</div> : ''
                }
                </div>
            </div>
        )
    }
}

Counter.propTypes = {
    num: PropTypes.string.isRequired
}

export default Counter