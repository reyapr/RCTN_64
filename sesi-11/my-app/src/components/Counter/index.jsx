import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from './slice'


const Counter = () => {
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()
    
    return (
        <>
            <div>{selector.number}</div>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </>
    )    
}

export default Counter