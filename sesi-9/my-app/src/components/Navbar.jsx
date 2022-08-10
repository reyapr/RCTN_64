import { Link, useNavigate } from "react-router-dom"

const NavBar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    
    return (
        <nav>
            {/* <Link className="link" to={'/'}>Home</Link> | {' '}
            <Link className="link" to={'/about'}>About Us</Link> | {' '}
            <Link className="link" to={'/members'}>Members</Link> | { ' '}
            <Link className="link" to={'/items'}>Items</Link> | {' '} */}
            {
                localStorage.getItem('token')
                &&
                <button onClick={handleLogout}>Logout</button>
            }
        </nav>
    )    
}

export default NavBar