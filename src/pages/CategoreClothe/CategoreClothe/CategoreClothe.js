import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ClotheCard from './ClotheCard/ClotheCard';

const CategoreClothe = () => {
    const clothes = useLoaderData()
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 my-20'>
            {
                clothes.map(clothe=><ClotheCard key={clothe.id} clothe={clothe}></ClotheCard>)
            }
            </div>
           
        </div>
    );
};

export default CategoreClothe;