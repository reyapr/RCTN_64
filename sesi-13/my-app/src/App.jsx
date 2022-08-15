import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'
import User from './pages/User';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<User/>} />
      </Routes>
  );
}

export default App;
