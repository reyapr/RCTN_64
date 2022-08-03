import { useEffect, useState, useMemo } from "react"
import Counter1 from "./Counter1"

const ExFunctionalComp = (props) => {
    const [state, setState] = useState(0)
    
    useEffect(() => {
        console.log('did mount')
        
        return () => {
            console.log('un mount')
        }
    }, [])
    
    useEffect(() => {
        console.log( `<=================== did update ==================`);
    }, [props.num])
    
    const MemoizeCounter1 = useMemo(() => <Counter1/>, [state])
    
    return (
        <div>
            <div>{props.num}</div>
            <button onClick={props.add}>+</button>
            {MemoizeCounter1}
        </div>
    )
}

export default ExFunctionalComp;