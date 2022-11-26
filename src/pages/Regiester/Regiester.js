import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexte/AutheProvider';

const Regiester = () => {
    const {register,handleSubmit,formState: { errors } }=useForm();
    const [erro,setErro]=useState()
const {userRegister,googleSignIn,updateUser}=useContext(AuthContext)
const navigate = useNavigate()


const registerHandler =data=>{
    setErro('')
    console.log(data)
const email = data.email;
const password = data.password;
const name = data.name;
const userRole = data.userRole
// create user
    userRegister(email,password)
    .then(result=>{
        console.log(result)
        toast.success('successfully register user')
        const userInfo = {displayName:data.name}
        updateUser(userInfo)
        .then(()=>{
          navigate('/')
          saveUser(email,name,userRole)
        })
        .catch(err=>console.log(err))
    })
    .catch(error=>{
        const errors = error.message;
        setErro(errors)
    })

}
// sign in withe goole 
const provider = new GoogleAuthProvider()
const googleHandler =()=>{
    googleSignIn(provider)
    .then(result=>{
        const user = result.user;
        console.log(user)
    })
    .catch(err=>console.log(err))
}
// send user info in mongodb
const saveUser = (email,name,userRole)=>{
  const user = {email,name,userRole}
  fetch(`http://localhost:5000/allusers`,{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
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
<div className="form-control ">
  <label className="label">
    <span className="label-text">choose account option</span>   
  </label>
  <select {...register("userRole")}   className="select select-bordered w-full max-w-xs">  
  <option value='seller' selected>seller</option>
  <option value='user' selected>user</option>
</select>
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

      <div className="form-control mt-6">
      <input className=" bg-primary input input-bordered w-full  text-white" value="Sing up" type="submit" />
      </div>
<small className='mt-3'>Have an account? <Link to='/login'className='text-primary'>Longin</Link></small>

<div className="divider">OR</div>
      <div className=" mt-6">      
      <button onClick={googleHandler} className="btn btn-outline  w-full ">sing up with google </button>
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