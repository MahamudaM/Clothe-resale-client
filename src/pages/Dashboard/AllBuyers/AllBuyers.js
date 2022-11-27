import { useQuery } from '@tanstack/react-query';
import React from 'react';

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
            <p>all All Buyers</p>
        </div>
    );
};

export default AllBuyers;