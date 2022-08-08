import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import items from '../items'

const Item = () => {
    const params = useParams()
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${params.itemId}`)
            .then(({ data }) => {
                setPerson(data)
            })
    }, [person])
    
    return (
        <div>
            <h3>{person.name}</h3>
            <b>Email:</b> {person.email}
        </div>
    )
}

export default Item