import React from "react";

export default class InputUsername extends React.Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button onClick={this.props.changeUsername}>change username</button>
            </div>
        )
    }
}