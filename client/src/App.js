import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './Screen/Login/Login';
import Products from './Screen/products/Products';
import AddProduct from './Screen/products/AddProduct/AddProduct';
import Categories from './Screen/categories/Categories';
import AddCategories from './Screen/categories/AddCategories/AddCategories';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Products}/>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Login} />
      <Route path="/addproduct" component={AddProduct} />
      <Route path="/categories" component={Categories} />
      <Route path="/addCategories" component={ AddCategories}/>
    </div>
  );
}

export default App;
