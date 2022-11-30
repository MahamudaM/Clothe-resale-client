import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
    return <button className="btn loading">loading</button>
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
        <th>
        pay button
        </th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      
      {
    MyOrders?.map((myOrde,i)=>
    <tr myOrde={myOrde} key={myOrde._id}>
    <th>
      <label>
        {i+1}
      </label>
    </th>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={myOrde.img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{myOrde.productName}</div>
          <div className="text-sm opacity-50">United States</div>
        </div>
      </div>
    </td>
    <td>
    {myOrde.email}
     
    </td>
    <td>{myOrde.price}$</td>
    <th>
      {
        myOrde.price && !myOrde.paid &&  <Link to={`/dashboard/payment/${myOrde._id}`}><button className="btn btn-primary btn-xs">pay</button></Link>
      }
      {
        myOrde.price && myOrde.paid &&  <span className="text-green-500">paid</span>
      }
     
    </th>
  </tr>
    )
  }
      
     
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default MyOrders;