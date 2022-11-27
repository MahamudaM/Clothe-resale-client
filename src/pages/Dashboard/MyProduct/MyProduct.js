import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexte/AutheProvider';
import AddProductCard from '../AddProduct/AddProductCard/AddProductCard';

const MyProduct = () => {


    const {user}=useContext(AuthContext)
   console.log(user.email)
    const {data:sellerclothe=[],isLoading}=useQuery({  
        queryKey:['sellerclothe',user?.email],
        queryFn:async()=>{
          const res = await fetch(`http://localhost:5000/sellerclothe?email=${user?.email}`)
          const data = await res.json();
          return data;
        }
        
      })
if(isLoading){
    return <p>loadin.....</p>
}


    return (
        <div>
            <p>My product</p>
            {/* table */}
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name</th>
        <th>price</th>
        <th>delete</th>
        <th>sales status</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        sellerclothe?.map((myCloth,i)=><AddProductCard myCloth={myCloth} key={myCloth._id} i={i}></AddProductCard>)
      }
   
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default MyProduct;