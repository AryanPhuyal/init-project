import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../../store/action";
import {Link} from 'react-router-dom'


function Login() {
     const dispatch = useDispatch()
    const { register, handleSubmit, watch, errors } = useForm();
    const {loading} = useSelector(state=>state.auth)
    const submitHandler = (data) => {
            dispatch(login(data.email,data.password))
        }
    return (
      <div className="login">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
            <input
              type="email"
              ref={register}
              name="email"
              placeholder="Email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              ref={register}
              name="password"
              placeholder="password"
              className="form-input"
            />
          </div>

          <input type={"submit"} />
          <Link to="/register"> Don't have an account</Link>
        </form>
      </div>
    );
}

export default Login
