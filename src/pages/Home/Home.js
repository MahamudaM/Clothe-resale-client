import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banarImg from '../../assets/image/homeBanar.jpg'
import per1 from '../../assets/image/person1.jpg'
import per2 from '../../assets/image/person2.jpg'
import per3 from '../../assets/image/person3.jpg'
import AdvertesProdCard from './advertesProdCard/advertesProdCard';
import CategoreCard from './CategoreCard/CategoreCard';
import ReviewCard from './ReviewCard/ReviewCard';
import axios from 'axios';

const Home = () => {
const [categores,setCategores]=useState([])


useEffect(()=>{
axios.get('http://localhost:5000/categore')
.then(data=>{
    console.log(data.data)
const categoreProds = data.data
    setCategores(categoreProds)
})
},[])

// advertised product
const {data:advertesProds=[],isLoading}=useQuery({  
    queryKey:['advertised'],
    queryFn:async()=>{
   
      const res = await fetch(`http://localhost:5000/advertised?adv=adv`)
      const data = await res.json();
      return data;
    }
    
  })
if(isLoading){
return <button className="btn loading">loading</button>
}
console.log(advertesProds)

    const reviews =[
        {
            id:1,
            name :'Tareq jamil',
            review:'This is a great app you can sell things fast. It’s really easy to use',
            adress:'Turkey,Istambul',
            img:per1
        },
        {
            id:1,
            name :'Junaed jamsed',
            review:'This is a great app you can sell things fast. It’s really easy to use',
            adress:'Turkey,Istambul',
            img:per2
        },
        {
            id:1,
            name :'Ismail ibn Musa Menk',
            review:'Excellent platform to buy and sell second hand goods. Very easy to use',
            adress:'Turkey,Istambul',
            img:per3
        },
        {
            id:1,
            name :'Tareq jamil',
            review:'Really happy with Shpock helped me grow my business',
            adress:'Turkey,Istambul',
            img:per1
        },
        {
            id:1,
            name :'Ismail ibn Musa Menk',
            review:'Very good way to sell safe and secure. Very easy to use',
            adress:'Turkey,Istambul',
            img:per3
        },
        {
            id:1,
            name :'Junaed jamsed',
            review:'Really happy with Shpock helped me grow my business',
            adress:'Turkey,Istambul',
            img:per2
        }
    ]
    
    return (
        <div>
           {/* home banar */}
           <div className="hero min-h-screen" style={{ backgroundImage: `url(${banarImg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">SELL YOUR STUFF & BAG A BARGAIN</h1>
      <p className="mb-5">Second-hand clothes  is a marketplace and classifieds platform that brings millions of private buyers and sellers</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
{/*clothes  categore section */}
<div className='my-10 max-w-6xl mx-auto'>
    <h1 className='text-3xl font-bold text-center'>Oure category products</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 my-20 ">
        {
            categores?.map((categore)=><Link to={`/categore/${categore.catID}`}><CategoreCard categore={categore} key={categore.catID}></CategoreCard>
                </Link>)
        }

    </div>
</div>
{/* advertesProds section */}
<div>

{
    advertesProds?.length>0? 

    <div>
        <h1 className='text-3xl font-bold text-center'>Oure Adverties products</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 my-20 ">
       {
         advertesProds?.map(product=><AdvertesProdCard
            key={product.id} 
            product={product}
            
        ></AdvertesProdCard>)
       }
       </div>
    </div>
        
    :''
}


</div>



{/* buyer review */}
<div className='my-10 max-w-6xl mx-auto'>
    <h1 className='text-3xl font-bold text-center'>See what Shpockers are saying</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 my-20 ">
{
    reviews.map(reviw=><ReviewCard key={reviw.id} reviw={reviw}></ReviewCard>)
}
    </div>
</div>
        </div>
    );
};

export default Home;