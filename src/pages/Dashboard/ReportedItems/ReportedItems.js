import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ReportModal from './ReportModal';

const ReportedItems = () => {
    const [deleteItem,setDeleteItem]=useState(null)
    const closeSellerModal=()=>{
        setDeleteItem(null);
    }
    const {data:reportedItems=[],isLoading,refetch}=useQuery({  
      queryKey:['reportedClothe'],
      queryFn:async()=>{
          const res = await fetch(`https://y-five-cyan.vercel.app/reported`)
          const data = await res.json();
          return data;
        }
        
      })
if(isLoading){
    return <button className="btn loading">loading</button>
}

const reporItemDeleteHandl=item=>{
    fetch(`https://y-five-cyan.vercel.app/clothe/reportedClothe/${item._id}`,{
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
console.log(reportedItems)
    return (
        <div>
            <p>ReportedItems</p>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          
        </th>
        <th>product</th>
        <th>name</th>
        <th>price</th>
        <th>delete</th>
        
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        reportedItems?.map((item,i)=><tr 
        key={item._id} 
        seller={item}
        >
        <th>
          <label>
            {i+1}
          </label>
        </th>
       
        <td>
        <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>         
        </td>
        <td>
       {item.productName}          
        </td>
        <td>
       {item.price}          
        </td>

        <td><label onClick={()=>setDeleteItem(item)} htmlFor="delete-modal" className="btn btn-ghost btn-xs">delete</label></td>
        
        {/* <th>
          <button className="btn btn-ghost btn-xs">verify</button>
        </th> */}
      </tr>)
      }
   
    </tbody>  
    
  </table>
</div>
{
  deleteItem && <ReportModal
  title = {`are you sure to delete ${deleteItem.productName}`}
message ={`if you delete ${deleteItem.productName},it can not undone`}
closeSellerModal={closeSellerModal}
btnName = {'Delete'}
deleteHandler= {reporItemDeleteHandl}
itemData = {deleteItem}
  ></ReportModal>
}
        </div>
    );
};

export default ReportedItems;