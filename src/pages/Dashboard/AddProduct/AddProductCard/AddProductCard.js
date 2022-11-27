import React from 'react';

const AddProductCard = (myCloth) => {
    const {email}=myCloth
    console.log(myCloth)
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{email}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>  <button className="btn btn-ghost btn-xs">delete</button></td>
        <th>
          <button className="btn btn-ghost btn-xs">unsold</button>
        </th>
      </tr>
    );
};

export default AddProductCard;