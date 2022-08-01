import React from 'react'

export default class LabelInfo extends React.Component {
    render() {
        return (
            <div>{this.props.label}: {this.props.info}</div>
        )
    }
}