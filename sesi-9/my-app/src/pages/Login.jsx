import { useLocation, useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.state?.from, `<===================  ==================`);
    const prevUrl = location.state?.from?.pathname || '/'
    
    const handleLogin = () => {
        localStorage.setItem('token', 'login')
        navigate(prevUrl, {replace: true})
    }
    
    return (
        <>
            <h1>Login Page</h1>
            <p>Klik the button to login</p>
            <button
                onClick={handleLogin}
            >
                Login
            </button>
        </>
    )
}

export default Login