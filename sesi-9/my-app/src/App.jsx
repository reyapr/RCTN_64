import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AboutCompany from './pages/AboutCompany';
import AboutMe from './pages/AboutMe';
import Members from './pages/Members';
import Member from './pages/Member';
import Items from './pages/Items';
import Item from './pages/item';

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
        <Route path='/members' element={<Members/>}>
          <Route path=':memberName' element={<Member/>}/>
        </Route>
        <Route path='/items' element={<Items/>}>
          <Route path=':itemId' element={<Item/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
