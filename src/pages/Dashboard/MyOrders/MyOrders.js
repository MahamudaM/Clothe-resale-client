import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexte/AutheProvider';
import MyOrderCard from './MyOrderCard';

const MyOrders = () => {
    const {user}=useContext(AuthContext)
   
    const {data:MyOrders=[],isLoading}=useQuery({  
        queryKey:['booking',user?.email],
        queryFn:async()=>{
          const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`)
          const data = await res.json();
          return data;
        }
        
      })
if(isLoading){
    return <p>loadin.....</p>
}

console.log( MyOrders)
    return (
        <div>
            <p>my Orders</p>
            {/* order table */}
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>title</th>
        <th>Email</th>
        <th>price</th>
        <th>pay button</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      
      {
    MyOrders?.map((myOrde,i)=><MyOrderCard myOrde={myOrde} key={myOrde._id} i={i}></MyOrderCard>)
  }
      
     
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default MyOrders;