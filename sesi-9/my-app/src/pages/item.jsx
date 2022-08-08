import { useParams } from "react-router-dom"
import items from '../items'

const Item = () => {
    const params = useParams()
    const matchedItem = items.find(item => item.id == params.itemId)
    return (
        <div>
            <h3>{matchedItem.name}</h3>
            <b>Power:</b> {matchedItem.power}
        </div>
    )
}

export default Item