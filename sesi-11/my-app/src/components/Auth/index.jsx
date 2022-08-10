import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { authLoginAPI } from "./slice"


const Auth = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    
    const defaultInputAuth = {
        email: '',
        password: ''
    }
    
    const [inputAuth, setInputAuth] = useState(defaultInputAuth)
    
    
    const handleChange = (e) => {
        setInputAuth({
            ...inputAuth,
            [e.target.name]: e.target.value 
        })
    }
    
    const submit = () => {
        dispatch(authLoginAPI(inputAuth))
        setInputAuth(defaultInputAuth)
    }
    
    console.log(inputAuth, `<===================  ==================`);
    
    return (
        <div>
            <div >
                <label className="col-form-label">Email</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={inputAuth.email}
                    name='email'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className="col-form-label">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    value={inputAuth.password}
                    name='password'
                    onChange={handleChange}
                />
            </div>
            <br />
            <div>
                <button onClick={submit} className="btn btn-primary">Login</button>
            </div>
            <div>
                {auth.isLoginPending && <div>...Loading</div>}
                {auth.isLoginSuccess && <div style={{color: 'green'}}>Success</div>}
                {auth.errorMessage && <div style={{color: 'red'}}>{auth.errorMessage}</div>}
            </div>
        </div>
    )
}

export default Auth;