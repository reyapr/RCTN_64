import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <Link className="link" to={'/'}>Home</Link> | {' '}
            <Link className="link" to={'/about'}>About Us</Link> | {' '}
            <Link className="link" to={'/members'}>Members</Link> | { ' '}
            <Link className="link" to={'/items'}>Items</Link> 
        </nav>
    )    
}

export default NavBar