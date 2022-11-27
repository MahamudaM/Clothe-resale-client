import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllByersCard from './AllByersCard/AllByersCard';

const AllBuyers = () => {

    const {data:users=[],isLoading}=useQuery({  
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
        users?.map((user,i)=><AllByersCard user={user} key={user._id} i={i}></AllByersCard>)
      }
   
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default AllBuyers;