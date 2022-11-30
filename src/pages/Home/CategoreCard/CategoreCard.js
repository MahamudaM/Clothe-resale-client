import React from 'react';

const CategoreCard = ({categore}) => {
    const {name,img}=categore
    return (
        <div className="card h-40 bg-base-100 shadow-xl image-full">
        <figure ><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
         
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>
    );
};

export default CategoreCard;