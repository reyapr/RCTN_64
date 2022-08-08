import items from "../items"
import ItemRow from '../components/ItemRow'
import { Outlet } from "react-router-dom"

const Items = () => {
    return (
        <div>
            <h1>Items page</h1>
            <p>Select an item to be shown</p>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Action</th>
                </tr>
                {
                    items.map(item => {
                        return (
                            <ItemRow key={item.id} item={item} />
                        )
                    })
                }
            </table>
            <Outlet/>
        </div>
    )
}

export default Items