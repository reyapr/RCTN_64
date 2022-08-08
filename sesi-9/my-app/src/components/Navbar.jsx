import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <Link className="link" to={'/'}>Home</Link> | {' '}
            <Link className="link" to={'/about'}>About Us</Link>
        </nav>
    )    
}

export default NavBar