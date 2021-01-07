import React from "react";
import { useForm } from "react-hook-form"; 
import { useDispatch, useSelector } from 'react-redux'
import {addProduct} from '../../../store/action'



const AddProduct = () => {
    const { register, errors, handleSubmit } = useForm();
    const {token} = useSelector(state => state.auth)
    const dispatch = useDispatch()
  const submitHandler = (data) => {
        dispatch(addProduct(token,{...data}))
    }
  return (
    <div>
      <div className="form">
              <form onSubmit={ handleSubmit(submitHandler)}>
          <div className="form-group">
            <input
              className="form-input"
              ref={register}
              type="text"
              name="name"
              placeholder="Product Name"
            />
            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <input
              className="form-input"
              ref={register}
              type="number"
              name="price"
              placeholder="Product Proce"
            />
            {errors.price && <p className="form-error">{errors.price}</p>}
          </div>

          <div className="form-group">
            <input
              className="form-input"
              ref={register}
              type="text"
              name="categoryId"
              placeholder="Categories"
            />
            {errors.categoryId && (
              <p className="form-error">{errors.categoryId}</p>
            )}
          </div>

          <div className="form-group">
            <input
              className="form-input"
              ref={register}
              type="text-area"
              name="description"
              placeholder="Details about product"
            />
            {errors.description && (
              <p className="form-error">{errors.description}</p>
            )}
          </div>
          <div className="form-group">
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
