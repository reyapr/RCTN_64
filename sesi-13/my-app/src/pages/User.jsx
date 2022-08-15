import { useEffect, useState } from "react"


const User = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    
    return (
        <div className="App">
            <div>
                <br />
                <button>
                    Back To Home
                </button>
            </div>
            <br />
            
            <div>User List</div>
            {users.map(user => {
                return (
                    <>
                        <div role='username'>Name: {user.name}</div>   
                        <div>Email: {user.email}</div>
                        <br />
                    </>
                )
            })}
        </div>
    )
}

export default User