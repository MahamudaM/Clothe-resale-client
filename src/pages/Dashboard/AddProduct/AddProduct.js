import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import  { AuthContext } from '../../../Contexte/AutheProvider'
const AddProduct = () => {
  const {user}=useContext(AuthContext)
  console.log(user.email)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imgBBkey = process.env.REACT_APP_imgBB_key
  

const {data:categorey=[],isLoading}=useQuery({  
  queryKey:['categore'],
  queryFn:async()=>{
    const res = await fetch(`http://localhost:5000/categore`)
    const data = await res.json();
    return data;
  }
})

// form handler
  const addProductHandler = (data) => {
   
let localTime = new Date();
const date = localTime.getFullYear()+'-'+(localTime.getMonth()+1)+'-'+localTime.getDate();
const img = data.productImg[0]
const formData = new FormData()
formData.append('image',img)
const url = `https://api.imgbb.com/1/upload?key=${imgBBkey}`
fetch(url,{
  method:'POST',
  body:formData
})
.then(res=>res.json())
.then(imgData=>{
 
  if(imgData.success){
    console.log(data.email)
    const product = {
catagoreID:data.categoreId,
sellerEmail:user.email,
img:imgData.data.url,
name:data.productname,
location:data.location,
resalePrice:data.resalePrice,
originalPrice:data.originalPrice,
useYears:data.purchaseYear,
postTime:date,
sellerName:data.sellername,
condition:data.productCondi,

    }
    // insert new product inside database
    fetch(`http://localhost:5000/clothe`,{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      toast.success(`${data.productname} added successfully`)
      navigate('/dashboard/myProduct')
    })
  }
})
    console.log(data);
  };
if(isLoading){
  return <p>loading....</p>
}
  return (
    <div>
        <div  className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto p-10 my-20'>
<h1 className="text-2xl font-bold text-center">Add product</h1>
{/* register  from */}
<form onSubmit={handleSubmit(addProductHandler)}  >
<div className="form-control">
  <label className="label">
    <span className="label-text">Seller name</span>   
  </label>
  <input type="text" {...register("sellername",{required:'seller name is required'})} placeholder="seller name" className="input input-bordered w-full " />
  {errors.sellername && <p role="alert">{errors.sellername?.message}</p>}
</div> 

<div className="form-control">
  <label className="label">
    <span className="label-text">Seller email</span>   
  </label>
  <input type="email" {...register("email")} disabled defaultValue={user?.email} className="input input-bordered w-full " />
  {errors.email&& <p role="alert">{errors.email?.message}</p>}
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">product name</span>   
  </label>
  <input type="text" {...register("productname",{required:'product name is required'})} placeholder="product name" className="input input-bordered w-full " />
  {errors.productname && <p role="alert">{errors.productname?.message}</p>}
</div> 

<div className="form-control">
  <label className="label">
    <span className="label-text">product image</span>   
  </label>
  <input type="file" {...register("productImg",{required:'product Image is required'})} placeholder="product Image" className="input input-bordered w-full " />
  {errors.productImg && <p role="alert">{errors.productImg?.message}</p>}
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">description</span>   
  </label>
  <input type="text" {...register("description",{required:'description is required'})} placeholder="description" className="input input-bordered w-full " />
  {errors.description && <p role="alert">{errors.description?.message}</p>}
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">phone</span>   
  </label>
  <input type="text" {...register("phone",{required:'phone is required'})} placeholder="phone" className="input input-bordered w-full " />
  {errors.phone && <p role="alert">{errors.phone?.message}</p>}
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">purchase Year</span>   
  </label>
  <input type="text" {...register("purchaseYear",{required:'purchaseYear is required'})} placeholder="purchase Year" className="input input-bordered w-full " />
  {errors.purchaseYear && <p role="alert">{errors.purchaseYear?.message}</p>}
</div>


<div className="form-control ">
  <label className="label">
    <span className="label-text">choose an categore</span>   
  </label>
  <select {...register("categoreId",{required:'categoreId is required'})}   className="select select-bordered w-full max-w-xs">  
    {
    categorey?.map(cat=><option value={`${cat.catID}`} selected key={cat._id}>{cat.name}</option>)
  }  
</select>
{errors.categoreId && <p role="alert">{errors.categoreId?.message}</p>}
</div>   

<div className="form-control ">
  <label className="label">
    <span className="label-text"> condition type</span>   
  </label>
  <select {...register("productCondi",{required:'User role is required'})}   className="select select-bordered w-full max-w-xs">  
  <option  >excellent</option>
  <option  >fair</option>
  <option  >good</option>
</select>
{errors.productCondi && <p role="alert">{errors.productCondi?.message}</p>}
</div>  
   
<div className="form-control">
  <label className="label">
    <span className="label-text">resale Price</span>   
  </label>
  <input type="text" {...register("resalePrice",{required:'resalePrice is required'})} placeholder="resale Price" className="input input-bordered w-full " />
  {errors.resalePrice && <p role="alert">{errors.resalePrice?.message}</p>}
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">original Price</span>   
  </label>
  <input type="text" {...register("originalPrice",{required:'original Price is required'})} placeholder="original Price" className="input input-bordered w-full " />
  {errors.originalPrice && <p role="alert">{errors.originalPrice?.message}</p>}
</div>

<div className="form-control ">
  <label className="label">
    <span className="label-text">location</span>   
  </label>
  <input type="text" {...register("location",{required:'location is required'})} placeholder="location" className="input input-bordered w-full " />
  {errors.location && <p className="text-primary">{errors.location?.message}</p>}
</div>

      <div className="form-control mt-6">
      <input className=" bg-primary input input-bordered w-full  text-white" value="Submit" type="submit" />
      </div>

    </form>

            </div>
    </div>
  );
};

export default AddProduct;
