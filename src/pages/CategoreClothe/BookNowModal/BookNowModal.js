import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexte/AutheProvider';

const BookNowModal = ({clotheInfo,setClotheInfo}) => {
    const {user}=useContext(AuthContext)
const {name,resalePrice,_id,img} = clotheInfo
console.log(clotheInfo)
    const bookingHndler=event=>{
event.preventDefault()
const form = event.target;
const userName = form.userName.value;
const email = form.email.value;
const phone = form.phone.value;
const bookingInfo = {
byerName:userName,
productName:name,
dressId:_id,
price:resalePrice,
email,
phone,
img
}
console.log(bookingInfo)
fetch(`https://y-five-cyan.vercel.app/booking`,{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(bookingInfo)
  
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  setClotheInfo(null)
  if(data.acknowledged===true){
    toast.success('Booking confirmed')
   
  }
 
})
    }
    return (
        <div>
         {/* Put this part before </body> tag */}
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
   {/* modla form */}
  
     <div className='mx-auto'>
   <form onSubmit={bookingHndler} className='grid gap-x-6 justify-items-center'>
   <input type="text" className="input input-bordered w-full max-w-xs" disabled value={name}/><br/>

   <input type="text" className="input input-bordered w-full max-w-xs" disabled value={`${resalePrice}$`}/><br/>

    <input type="text" name='userName' defaultValue ={user?.displayName} disabled placeholder="name" className="input input-bordered w-full max-w-xs" /><br/>
    <input type="text" name='phone' placeholder="phone" className="input input-bordered w-full max-w-xs" /><br/>
    <input type="text" name='location' placeholder="location" className="input input-bordered w-full max-w-xs" /><br/>
    <input type="email" name='email' defaultValue ={user?.email} disabled placeholder="email" className="input input-bordered w-full max-w-xs" /><br/>
    <input type="submit"  value="Submit" className="input input-bordered w-full max-w-xs bg-[#f00135] text-white" /><br/>
   </form>
    </div>
   {/* modal form end */}
  </div>
</div> 
        </div>
    );
};

export default BookNowModal;