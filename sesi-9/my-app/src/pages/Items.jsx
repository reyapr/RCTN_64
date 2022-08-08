import ItemRow from '../components/ItemRow'
import { Outlet } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const Items = () => {
    const [persons, setPersons] = useState([])
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/users')
        .then(({ data }) => {
            setPersons(data)
        })
    }, [])
    
    console.log(persons, `<===================  ==================`);
    
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
                    persons.map(item => {
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