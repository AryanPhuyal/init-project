import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from "../../../store/action";
const AddCategories = () => {
    const { register, errors, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const { token} = useSelector(state=>state.auth);
    const submitHandeler = (data) => {
        dispatch(addCategory(token,data.title))
    }
  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit(submitHandeler)}>
          <div className="form-group">
            <input
              ref={register}
              name="title"
              placeholder="Category Title"
              type="text"
            />
            {errors.title && <p className="form-error">{errors.title}</p>}
          </div>
          <div className="form-group">
            <button type="submit">Add Category</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategories;
