import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AboutCompany from './pages/AboutCompany';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>}>
          <Route path='company' element={<AboutCompany/>} />
          <Route path='me' element={<AboutMe/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
