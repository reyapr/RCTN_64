import React from "react"
import { connect } from "react-redux"
import { dynamicIncrement, increment, decrement } from "./slice"

class CounterCl extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                <div>{this.props.number}</div>
                <div>
                    <button onClick={() => this.props.dispatch(dynamicIncrement(3))}>+</button>
                    <button onClick={() => this.props.dispatch(decrement())}>-</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps)(CounterCl)