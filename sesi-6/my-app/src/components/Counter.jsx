import { useEffect, useState } from "react"

const Counter = () => {

    const [num, setNum] = useState(0)
    
    
    const increment = () => {
        setNum(prev => prev + 1)
    }
    const decrement = () => {
        if(num > 0) {
            setNum(prev => prev - 1)
        }
    }
    
    useEffect(() => {
        setNum(1)
    }, [])
    
    return (
        <div>
            <div>{num}</div>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    )
    
}

export default Counter