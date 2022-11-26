import React from 'react';

const ClotheCard = ({clothe,setClotheInfo}) => {
    // console.log(clothe)
    const {img,name,location,resalePrice,originalPrice,useYears,postTime,sellerName}=clothe
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='text-xl font-semibold'>seller : {sellerName}</p>
    <p>location: {location}</p>
    <p>useYears {useYears}</p>
    <p>post Time {postTime}</p>
    <div className="card-actions justify-end">
        <p>origina lPrice :{originalPrice}$</p>
       
        <p>resale price:{resalePrice}$</p>
        <label onClick={()=>setClotheInfo(clothe)}  htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default ClotheCard;