import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllSelerCard from './AllSelerCard/AllSelerCard';


const AllSellers = () => {

    
    const {data:sellers=[],isLoading}=useQuery({  
        queryKey:['sellerclothe'],
        queryFn:async()=>{
       
          const res = await fetch(`http://localhost:5000/seller?userRole=seller`)
          const data = await res.json();
          return data;
        }
        
      })
if(isLoading){
    return <p>loadin.....</p>
}
console.log( sellers)

    return (
        <div>
            <p className='text-3xl font-bold text-center'> all sellers</p>
            {/* table */}
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          
        </th>
        <th>name</th>
        <th>user role</th>
        <th>sller email</th>
        <th>delete</th>
        <th>seller status</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        sellers?.map((seller,i)=><AllSelerCard seller={seller} key={seller._id} i={i}></AllSelerCard>)
      }
   
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default AllSellers;