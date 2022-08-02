import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';


/**
 * export useState = (defaultValue) => {
 *  const value = defaultValue --> state
 *  function setValue(updatedValue) { --> function buat ubah state 
 *      value = updatedValue
 *  }
 *  return [value, setValue]
 * 
 * }
 */


/**
 * 
 * constructor() {
 *  super()
 *  this.state = {
 *    field: 'value',
 *    counter: 0
 *  }
 * }
 * 
 * 
 * method() {
 *  this.setState({
 *    field: 'new value'
 *  })
 * 
 *  // output -> {
 *    field: 'new value',
 *    counter: 0
 *  }
 * }
 */

function App() {
  
  let defaultTitle = 'Default-Title'
  let [state, setState] = useState({
       title: defaultTitle,
       counter: 1
    })
  
  function changeTitle(updatedTitle) {
    setState((prevState) => {
      
      return {
        ...prevState,
        title: updatedTitle
      }
    })
  }
  
  
  function Header(props) {
    return (
      <div>
        <h1>{props.title}</h1>
      </div>
    )
  }
  
  function Content() {
    return (
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis excepturi rem aperiam dolores ipsum sint ducimus, accusamus quisquam totam vitae ipsam. Ex beatae sint deserunt ipsum dolores perspiciatis maxime officiis.</p>
      </div>
    )
  }
  
  function Footer() {
    return (
      <div>
        <p>&copy; Test - 2022</p>
      </div>
    )
  }
  
  useEffect(() => {
    setState(prev => ({...prev, counter: prev.counter + 1}))
  }, [])
  
  return (
    <div className="App">
      <Header title={state.title}/>
      <div>
        <div>{state.counter}</div>
        <button onClick={() => changeTitle('Test Title')}>Change Title</button>
      </div>
      <hr />
      <Counter/>
      <hr />
      <Footer/>
    </div>
  );
}


/**
 * challenge 1
 * buat counter component
 * bisa + dan -, tapi ketika klik - saat angka 1, hasilnya ttep di 0
 * 
 * challenge 2
 * 
 * set default counternya jadi angka 1, hanya ketika awal render saja
 * 
 */

export default App;
