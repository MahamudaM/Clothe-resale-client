import React from 'react';

const MyOrderCard = ({myOrde,i}) => {
    const {email,img,price, productName}=myOrde;
    console.log(myOrde.email)
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
              <div className="font-bold">{productName}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
        {email}
         
        </td>
        <td>{price}$</td>
        <th>
          <button className="btn btn-ghost btn-xs">pay</button>
        </th>
      </tr>

    );
};

export default MyOrderCard;