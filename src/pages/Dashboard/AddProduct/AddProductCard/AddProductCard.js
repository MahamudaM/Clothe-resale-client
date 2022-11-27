import React from 'react';

const AddProductCard = ({myCloth,i}) => {
    const {sellerEmail,resalePrice,img,name}=myCloth
   
    return (
      <tr>
      <th>
        <label>
          {i+1}
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{sellerEmail}</div>
          </div>
        </div>
      </td>
      <td>
     {resalePrice}
        
      </td>
      <td>  <button className="btn btn-ghost btn-xs">delete</button></td>
      <th>
        <button className="btn btn-ghost btn-xs">unsold</button>
      </th>
      <th>
        <button className="btn btn-ghost btn-xs">advertise</button>
      </th>
    </tr>
    );
};

export default AddProductCard;