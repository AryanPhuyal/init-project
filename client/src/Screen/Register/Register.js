import React from 'react'
import classes from './Register.module.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Register = () => {
    const {register,handleSubmit,errors} = useForm()
    return (
      <div className={classes.register}>
        <div>
          <form>
            <div className={"form-group"}>
                        <input className="form-input" name="name" type="name" placeholder="Name" ref={register}  />
            </div>
            <div className={"form-group"}>
              <input className="form-input" type="email" name="email" placeholder="Email Address" ref={register} />
            </div>

            <div className={"form-group"}>
              <input className="form-input" type='password' name="password" placeholder="Password" ref={register} />
            </div>
                </form>
                <Link to="/login">Already have an account</Link>
            </div>
            
      </div>
    );
}

export default Register;
