import React, { useEffect } from 'react'
import { fetchProduct } from '../../store/action'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function Products() {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)
    const { products, loading, error } = useSelector(state => state.product)
    
    useEffect(() => {
       dispatch(fetchProduct(token))
    }, [dispatch, token])
    
    console.log(products)
    return (
        <div>
            <div>
                <Link to="/addproduct">Add Product</Link>
            </div>
            <div className={ "table"}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {!loading && !error && (
                <>
                  {products.map((p) => (
                    <tr>
                      <td>{p.name}</td>
                      <td>{p.price}</td>
                      <td>{p.description}</td>
                      <td>{p.category}</td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Products
