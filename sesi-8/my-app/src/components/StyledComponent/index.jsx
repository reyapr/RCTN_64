import { useState } from "react"
import styled from "styled-components"

const Title = styled.h1`
    font-size: 1.5em;
    color: palevioletred;
`

const Button = styled.button`
    background: ${props => props.primary ? 'palevioletred' : 'white'};
    color: ${props => props.primary ? 'white' : 'palevioletred'};
    
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`

const StyledComponent = () => {
    const [isPrimary, setIsPrimary] = useState(false)
    
    return (
        <div>
            <Title>Styled Component Example</Title>
            <Button primary={isPrimary} onClick={() => setIsPrimary(!isPrimary)}>
                Change Color
            </Button>
        </div>
    )    
}

export default StyledComponent