import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    
    return (
        <>
            <div style={{ marginTop: '20px'}}>
                Learn Testing on React App
            </div>
            <br />
            <div>
                <button role='button' onClick={() => navigate('/users')}>
                    Go To User List
                </button>
            </div>
        </>
    )
}

export default Home