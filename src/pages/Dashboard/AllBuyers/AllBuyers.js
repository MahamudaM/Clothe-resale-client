import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteInfoModal from '../DeleteInfoModal/DeleteInfoModal';


const AllBuyers = () => {
  const [deleteUser,setDeleteUser]=useState(null)
  const closeBuyerModal=()=>{
    setDeleteUser(null);
  }

    const {data:users=[],isLoading,refetch}=useQuery({  
        queryKey:['sellerclothe'],
        queryFn:async()=>{
       
          const res = await fetch(`http://localhost:5000/users?userRole=user`)
          const data = await res.json();
          return data;
        }
        
      })
if(isLoading){
    return <p>loadin.....</p>
}
console.log(users)

// delete users
const buyerDeleteHandl=user=>{
  fetch(`http://localhost:5000/users/${user._id}`,{
    method:'DELETE'
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.deletedCount>0){
      toast.success('successfully delete')
      refetch()
    }
  })
}
    return (
        <div>
            <p className='text-3xl font-bold text-center'> All Buyers</p>
               {/* table */}
               <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          
        </th>
        <th>name</th>
        <th>user role</th>
        <th>Buyer email</th>
        <th>delete</th>
        
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        users?.map((user,i)=>
        <tr user={user} key={user._id}>
        <th>
          <label>
            {i+1}
          </label>
        </th>
       
        <td>
       {user.name}          
        </td>
        <td>
       {user.userRole}          
        </td>
        <td>
       {user.email}          
        </td>

        <td><label onClick={()=>setDeleteUser(user)} htmlFor="delete-modal" className="btn btn-ghost btn-xs">delete</label></td>
        
      </tr>)
      }
   
    </tbody>
   
    
  </table>
</div>
{
  deleteUser && <DeleteInfoModal
  title = {`are you sure to delete ${deleteUser.name}`}
message ={`if you delete ${deleteUser.name},it can not undone`}
closeSellerModal={closeBuyerModal}
btnName = {'Delete'}
deleteHandler= {buyerDeleteHandl}
sellerData = {deleteUser}
  ></DeleteInfoModal>
}
        </div>
    );
};

export default AllBuyers;