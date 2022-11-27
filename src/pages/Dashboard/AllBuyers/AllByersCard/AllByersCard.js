import React from 'react';

const AllByersCard = ({user,i}) => {
    const {name,userRole,email,_id} = user
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
        
      </tr>
    );
};

export default AllByersCard;