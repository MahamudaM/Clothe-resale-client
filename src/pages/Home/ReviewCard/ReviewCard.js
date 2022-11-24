import React from 'react';

const ReviewCard = ({reviw}) => {
    const {name,adress,review,img}=reviw
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
  
    <p>{review}</p>
    <div className="card-actions justify-end mt-2">
    <div className="avatar">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img} alt='person'/>
  </div>
</div>
<div className='ml-4 mt-2'>
<p className=' font-semibold'>{name}</p>
      <p>{adress}</p>
</div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default ReviewCard;