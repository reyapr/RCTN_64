import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor() {
        super()
        this.state = {
            isError: false
        }
    }
    
    componentDidCatch(error) {
        console.log(error, `<=================== error ==================`);
        
        this.setState({
            isError: true
        })
    }
    
    render() {
        return (
            <>
                {
                    this.state.isError ?
                    <div>Something went wrong</div>
                    :
                    this.props.children
                }
            </>
        )
    }
}