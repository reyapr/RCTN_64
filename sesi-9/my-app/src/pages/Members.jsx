import { Link, Outlet } from "react-router-dom"

const Members = () => {
    return (
        <>
            <h1>Members Page</h1>
            <p>Select a member to be shown</p>
            <Link to={'john-doe'} >John Doe</Link> <br />
            <Link to={'jahn-dae'} >Jahn Dae</Link>
            <Outlet/>
        </>
    )
}

export default Members