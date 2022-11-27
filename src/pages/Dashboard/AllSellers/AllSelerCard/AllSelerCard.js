import React from 'react';

const AllSelerCard = ({seller,i}) => {
    const {name,userRole,email}=seller
    return (
        <tr>
        <th>
          <label>
            {i+1}
          </label>
        </th>
       
        <td>
       {name}          
        </td>
        <td>
       {userRole}          
        </td>
        <td>
       {email}          
        </td>

        <td>  <button className="btn btn-ghost btn-xs">delete</button></td>
        <th>
          <button className="btn btn-ghost btn-xs">verify</button>
        </th>
      </tr>
    );
};

export default AllSelerCard;