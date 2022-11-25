import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banarImg from '../../assets/image/homeBanar.jpg'
import per1 from '../../assets/image/person1.jpg'
import per2 from '../../assets/image/person2.jpg'
import per3 from '../../assets/image/person3.jpg'
import CategoreCard from './CategoreCard/CategoreCard';
import ReviewCard from './ReviewCard/ReviewCard';
const Home = () => {
const [categores,setCategores]=useState([])


useEffect(()=>{
fetch('http://localhost:5000/categore')
.then(res=>res.json())
.then(data=>{
    console.log(data)
    setCategores(data)
})
},[])


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