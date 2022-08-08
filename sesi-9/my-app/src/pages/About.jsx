import { Link, Outlet } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>This is my about us</p>
            <Link className="link" to={'company'}>About The Company</Link> {' | '}
            <Link className="link" to={'me'}>About Me</Link>
            
            <Outlet/>
        </div>
    )
}

export default About