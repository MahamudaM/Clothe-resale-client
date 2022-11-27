import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexte/AutheProvider';
import AddProductCard from '../AddProduct/AddProductCard/AddProductCard';

const MyProduct = () => {


    const {user}=useContext(AuthContext)
   
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
console.log( sellerclothe)

    return (
        <div>
            <p>My product</p>
            {/* table */}
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>sales status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        sellerclothe?.map(myCloth=><AddProductCard myCloth={myCloth} key={myCloth._id}></AddProductCard>)
      }
   
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default MyProduct;