import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState()
  return (
    <div className="App">
      <Router  ele={<ProductList/>}/>
      <Router  ele={<CartPage/>}/>
      <Router  ele={<PaymentPage/>}/>
    </div>
  );
}




export default App;
