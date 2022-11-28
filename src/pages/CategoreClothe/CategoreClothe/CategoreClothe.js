import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookNowModal from '../BookNowModal/BookNowModal';
import ClotheCard from './ClotheCard/ClotheCard';

const CategoreClothe = () => {
    const clothes = useLoaderData()
    // send clothe info in modal
    const [clotheInfo,setClotheInfo]=useState(null)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 my-20'>
            {
                clothes?.map(clothe=><ClotheCard 
                    key={clothe.id} 
                    clothe={clothe}
                    setClotheInfo={setClotheInfo}
                ></ClotheCard>)
            }

            {
              clotheInfo &&
              <BookNowModal clotheInfo={clotheInfo} setClotheInfo={setClotheInfo}></BookNowModal>  
            }
            </div>
           
        </div>
    );
};

export default CategoreClothe;