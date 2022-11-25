import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const {register,handleSubmit,formState: { errors } }=useForm();


    // login handler
    const loginHandler=data=>{
        console.log(data)
    }
    return (
        <div>
           <div  className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto p-10 my-20'>
<h1 className="text-2xl font-bold text-center">Log in</h1>
<form onSubmit={handleSubmit(loginHandler)}  >   
   
<div className="form-control">
  <label className="label">
    <span className="label-text">Email</span>   
  </label>
  <input type="email" {...register("email",{required:'Email Address is required'})} placeholder="email" className="input input-bordered w-full " />
  {errors.email && <p role="alert">{errors.email?.message}</p>}
</div>
<div className="form-control ">
  <label className="label">
    <span className="label-text">password</span>   
  </label>
  <input type="password" {...register("password",{required:'password required',minLength:{value:8,message:'password must be 8 charecter'},pattern:{value:/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).*/,message:'password must have number, uppercase and lowercase'}})} placeholder="password" className="input input-bordered w-full " />
  {errors.password && <p className="text-primary">{errors.password?.message}</p>}
</div>
<p className='mt-2'>forget password?</p>
      <div className="form-control mt-6">
      <input className=" bg-primary input input-bordered w-full  text-white" value="Log in" type="submit" />
      </div>
<small className='mt-3'> Don't have an account? <Link to='/regiester'className='text-primary'>Sign up</Link></small>

<div className="divider">OR</div>
      <div className=" mt-6">      
      <button className="btn btn-outline  w-full ">login with google </button>
      </div>
     <div>
     
     </div>
    </form>

            </div>
        </div>
    );
};

export default Login;