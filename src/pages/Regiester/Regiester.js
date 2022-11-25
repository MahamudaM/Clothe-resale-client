import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexte/AutheProvider';

const Regiester = () => {
    const {register,handleSubmit,formState: { errors } }=useForm();
    const [erro,setErro]=useState()
const {userRegister}=useContext(AuthContext)
const registerHandler =data=>{
    console.log(data)
const email = data.email;
const password = data.password;
const name = data.name;
    userRegister(email,password)
    .then(result=>{
        console.log(result)
    })
    .catch(error=>{
        const errors = error.message;
        setErro(errors)
    })

}

    return (
        <div>
           <div  className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto p-10 my-20'>
<h1 className="text-2xl font-bold text-center">Sign up</h1>
{/* register  from */}
<form onSubmit={handleSubmit(registerHandler)}  >
<div className="form-control">
  <label className="label">
    <span className="label-text">Name</span>   
  </label>
  <input type="text" {...register("name",{required:'Name is required'})} placeholder="Name" className="input input-bordered w-full " />
  {errors.name && <p role="alert">{errors.name?.message}</p>}
</div>   
    
   
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
      <input className=" bg-primary input input-bordered w-full  text-white" value="Sing up" type="submit" />
      </div>
<small className='mt-3'>Have an account? <Link to='/login'className='text-primary'>Longin</Link></small>

<div className="divider">OR</div>
      <div className=" mt-6">      
      <button className="btn btn-outline  w-full ">sing up with google </button>
      </div>
     <div>
     {
       erro && <p>{erro}</p>
      }
     </div>
    </form>

            </div>
        </div>
    );
};

export default Regiester;