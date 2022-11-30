
import React from 'react';

const AdvertesProdCard = ({product}) => {   
    const {img,name,location,resalePrice,originalPrice,useYears,postTime,sellerName}=product
  
  

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='text-xl font-semibold'>
     seller : {sellerName}</p>
    <p>location: {location}</p>
    <p>useYears {useYears}</p>
    <p>post Time {postTime}</p>
    <p>origina lPrice :{originalPrice}$</p>       
        <p>resale price:{resalePrice}$</p>
   
    <div className="card-actions justify-end">
    <button className='btn btn-primary text-white'> Book Now</button>
        
      
    </div>
  </div>
</div>
        </div>
    );
};

export default AdvertesProdCard;