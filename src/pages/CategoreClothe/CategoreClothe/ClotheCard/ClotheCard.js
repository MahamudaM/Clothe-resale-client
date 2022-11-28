
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {  CheckIcon } from '@heroicons/react/24/solid'
const ClotheCard = ({clothe,setClotheInfo}) => {
  const [sellerverify,setSellerverify]=useState(null)
   
    const {img,name,location,resalePrice,originalPrice,useYears,postTime,sellerName}=clothe
  

useEffect(()=>{
  fetch(`http://localhost:5000/seller/${clothe?.sellerEmail}`)
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    setSellerverify(data)
  })
},[clothe?.sellerEmail])





console.log(clothe)
    // reported handler
    const reportedHandler=clothe=>{
        console.log(clothe)
        const name = clothe.name;
        const resalePrice = clothe.resalePrice;
        const img = clothe.img;
        const id =clothe._id;
        const reportedInfo = {
            productName :name,
            price:resalePrice,
            img:img,
            productId:id

        }
        fetch(`http://localhost:5000/reportedItems`,{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(reportedInfo)
  
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.acknowledged===true){
        toast.success('Added Report  successfully')
       
      }    
  })  
      }
      // verify seller


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='text-xl font-semibold'>
    {
        sellerverify?.sellerEmail? <CheckIcon className="h-6 w-6 text-blue-500"/>:""
      } seller : {sellerName}</p>
    <p>location: {location}</p>
    <p>useYears {useYears}</p>
    <p>post Time {postTime}</p>
    <p>origina lPrice :{originalPrice}$</p>       
        <p>resale price:{resalePrice}$</p>
   
    <div className="card-actions justify-end">
    <button onClick={()=>reportedHandler(clothe)} className='btn btn-primary text-white'> Report to Admin</button>
        <label onClick={()=>setClotheInfo(clothe)}  htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default ClotheCard;