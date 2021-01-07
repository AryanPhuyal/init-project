import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './Screen/Login/Login';
import Products from './Screen/products/Products';
import AddProduct from './Screen/products/AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Products}/>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Login} />
      <Route path="/addproduct" component={AddProduct}/>
    </div>
  );
}

export default App;
