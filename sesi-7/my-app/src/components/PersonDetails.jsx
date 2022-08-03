import { render } from "@testing-library/react";
import React from "react";

export default class PersonDetails extends React.Component {
    componentWillUnmount() {
        console.log( `<=================== triggered ==================`);
    }
    
    render() {
        return (
            <div>
                hair color: {this.props.details.hair_color}
            </div>
        )
    }
}