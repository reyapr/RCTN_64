import React from "react"
import { connect } from "react-redux"
import { dynamicIncrementCl, decrementCl } from "./slice"

class CounterCl extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                <div>{this.props.number}</div>
                <div>
                    <button onClick={() => this.props.dispatch(dynamicIncrementCl(3))}>+</button>
                    <button onClick={() => this.props.dispatch(decrementCl())}>-</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    title: state.counterCl.title,
    number: state.counterCl.number
})

export default connect(mapStateToProps)(CounterCl)