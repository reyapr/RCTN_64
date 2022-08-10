import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./slice";

const User = () => {
    const persons = useSelector(state => state.users.persons)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    
    if(persons.error.message) {
        return (
            <div class="alert alert-primary" role="alert">
                Something went wrong
            </div>
        )
    }
    
    return (
        <ul>
            {
                persons.isLoading ? 
                <div>...Loading</div>
                :
                persons.data.map((person) => (
                    <li>{person.name}</li>
                ))
            }
        </ul>
    )
}

export default User;