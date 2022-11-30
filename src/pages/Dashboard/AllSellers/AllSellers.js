import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

import DeleteInfoModal from '../DeleteInfoModal/DeleteInfoModal'

const AllSellers = () => {
const [verifiySeller,setVerifiySeller] = useState(false)
    const [deleteSeller,setDeleteSeller]=useState(null)
    const closeSellerModal=()=>{
      setDeleteSeller(null);
    }
    // loade seller
    const {data:sellers=[],isLoading,refetch}=useQuery({  
        queryKey:['sellerclothe'],
        queryFn:async()=>{
       
          const res = await fetch(`https://y-five-cyan.vercel.app/seller?userRole=seller`)
          const data = await res.json();
          return data;
        }
        
      })
if(isLoading){
    return <button className="btn loading">loading</button>
}

// delete seller
const sellerDeleteHandl=seller=>{
  fetch(`https://y-five-cyan.vercel.app/seller/${seller._id}`,{
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

// verifiy handler
const verifiyHandler=(email)=>{
  
  fetch(`https://y-five-cyan.vercel.app/seller/${email}`,{
  method:'PUT'  
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  
  if(data.acknowledged===true){
    toast.success('verify user')
    refetch()
  }
 
})

}



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
        sellers?.map((seller,i)=><tr 
        key={seller._id} 
        seller={seller}
        >
        <th>
          <label>
            {i+1}
          </label>
        </th>
       
        <td>
       {seller.name}          
        </td>
        <td>
       {seller.userRole}          
        </td>
        <td>
       {seller.email}          
        </td>

        <td><label onClick={()=>setDeleteSeller(seller)} htmlFor="delete-modal" className="btn btn-ghost btn-xs">delete</label></td>
        
        <th>
         
            {
              seller?.ver==='true'? 'verified':
              <button onClick={()=>verifiyHandler(seller.email)} className="btn btn-ghost btn-xs">verify</button>
            }
            
          
         
        </th>
      </tr>)
      }
   
    </tbody>  
    
  </table>
</div>
{
  deleteSeller && <DeleteInfoModal
  title = {`are you sure to delete ${deleteSeller.name}`}
message ={`if you delete ${deleteSeller.name},it can not undone`}
closeSellerModal={closeSellerModal}
btnName = {'Delete'}
deleteHandler= {sellerDeleteHandl}
sellerData = {deleteSeller}
  ></DeleteInfoModal>
}
        </div>
    );
};

export default AllSellers;