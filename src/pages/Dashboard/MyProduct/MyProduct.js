import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexte/AutheProvider';

import MyProdDeletModal from './MyProdDeletModal';

const MyProduct = () => {

  const [deleteSellerProd,setDeleteSellerProd]=useState(null)
  const closeSellerProdModal=()=>{
    setDeleteSellerProd(null);
  }
    const {user}=useContext(AuthContext)
   console.log(user.email)
    const {data:sellerclothe=[],isLoading,refetch}=useQuery({  
        queryKey:['sellerclothe',user?.email],
        queryFn:async()=>{
          const res = await fetch(`https://y-five-cyan.vercel.app/sellerclothe?email=${user?.email}`)
          const data = await res.json();
          return data;
        }
        
      })
      console.log(sellerclothe)
if(isLoading){
    return <button className="btn loading">loading</button>
}
// delete product
const sellerProdDeleteHandl=myCloth=>{
  fetch(`https://y-five-cyan.vercel.app/sellerclothe/${myCloth._id}`,{
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

// adverties porduct\
const advertisHandler=(id)=>{
  console.log(id)
  fetch(`https://y-five-cyan.vercel.app/advertised/${id}`,{
  method:'PUT'  
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  
  if(data.acknowledged===true){
    toast.success('Product add for advertisement')
   
  }
 
})

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
        <th>advertise</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}

      {
        sellerclothe?.map((myCloth,i)=>
        <tr myCloth={myCloth} key={myCloth._id}>
        <th>
          <label>
            {i+1}
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={myCloth.img} alt="Avatar" />
              </div>
            </div>
            <div>
              <div className="font-bold">{myCloth.name}</div>
              <div className="text-sm opacity-50">{myCloth.sellerEmail}</div>
            </div>
          </div>
        </td>
        <td>
       {myCloth.resalePrice}
          
        </td>
        <td> <label onClick={()=>sellerProdDeleteHandl(myCloth)} htmlFor="delete-modal" className="btn btn-ghost btn-xs">delete</label></td>
        
        <th>
          {
            myCloth?.paid? <span className='text-green-500'>sold</span>
            :
            <button className="btn btn-ghost btn-xs">unsold</button>
          }
          
        </th>
        <th>
        {
          myCloth?.paid? " ": <button onClick={()=>advertisHandler(myCloth._id)} className="btn btn-ghost btn-xs">advertise</button>
        }
          
        </th>
      </tr>)
      }
   
    </tbody>
   
    
  </table>
</div>
{
  deleteSellerProd && <MyProdDeletModal
  title = {`are you sure to delete ${deleteSellerProd.name}`}
message ={`if you delete ${deleteSellerProd.name},it can not undone`}
closeSellerModal={closeSellerProdModal}
btnName = {'Delete'}
deleteHandler= {sellerProdDeleteHandl}
productData = {deleteSellerProd}
  ></MyProdDeletModal>
  
}
        </div>
    );
};

export default MyProduct;