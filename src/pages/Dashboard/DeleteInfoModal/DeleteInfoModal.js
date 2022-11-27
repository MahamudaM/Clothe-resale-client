import React from 'react';

const DeleteInfoModal = ({title,message,closeSellerModal,btnName,deleteHandler,sellerData}) => {
    return (
      <div>
          {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="delete-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">   
     <label onClick={()=>deleteHandler(sellerData)} htmlFor="delet-doctor-modal" className="btn btn-primary ">{btnName}</label>
     <button onClick={closeSellerModal} className='btn btn-outline'>cancle</button>
    </div>
  </div>
</div>
      </div>
    );
};

export default DeleteInfoModal;