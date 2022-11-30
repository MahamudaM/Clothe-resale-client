
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {  CheckIcon } from '@heroicons/react/24/solid'
// import { useQuery } from '@tanstack/react-query';
const ClotheCard = ({clothe,setClotheInfo}) => {
  const [sellerverify,setSellerverify]=useState(null)
   
    const {img,name,location,resalePrice,originalPrice,useYears,postTime,sellerName,_id,sellerEmail}=clothe
  
// verify seller

// const {data:sellers=[],isLoading,}=useQuery({  
//   queryKey:['seller'],
//   queryFn:async()=>{
 
//     const res = await fetch(`https://y-five-cyan.vercel.app/seller/${sellerEmail}`)
//     const data = await res.json();
//     return data;
//   }
  
// })



// https://y-five-cyan.vercel.app/seller/varify?ver=true
useEffect(()=>{
  fetch(`https://y-five-cyan.vercel.app/seller/${sellerEmail}`)
  .then(res=>res.json())
  .then(data=>{  
    setSellerverify(data)
    console.log(data)
  })
},[sellerEmail])

console.log(sellerverify)




    // reported handler
    const reportedHandler=id=>{
        
        fetch(`https://y-five-cyan.vercel.app/clothe/reportedClothe/${id}`,{
  method:'PUT'
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.acknowledged===true){
        toast.success('Add Report  successfully')
       
      }    
  })  
      }
      


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='text-xl font-semibold'>
      {
        clothe?.ver==='true'? <CheckIcon className="h-6 w-6 text-blue-500"/>:''
      }
       seller : {sellerName}</p>
    <p>location: {location}</p>
    <p>useYears {useYears}</p>
    <p>post Time {postTime}</p>
    <p>origina lPrice :{originalPrice}$</p>       
        <p>resale price:{resalePrice}$</p>
   
    <div className="card-actions justify-end">
    <button onClick={()=>reportedHandler(_id)} className='btn btn-primary text-white'> Report to Admin</button>
        <label onClick={()=>setClotheInfo(clothe)}  htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default ClotheCard;