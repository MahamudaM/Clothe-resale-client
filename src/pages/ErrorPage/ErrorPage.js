import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import erorImg from '../../assets/image/404img.jpg'
import { AuthContext } from '../../Contexte/AutheProvider';
const ErrorPage = () => {
  const {logOut}=useContext(AuthContext)
const navigate = useNavigate()
  const error = useRouteError()
  const logOutHandler =()=>{
    logOut()
    .then(()=>{
      navigate('/login')
    })
    .catch(err=>console.log(err))
  }
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${erorImg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
     
      <p className='text-red-600'>samething went wrong!!</p>
            <p className='text-red-600 font-bold'>{error.statusText || error.message}</p>
            <h1 className="mb-5 text-5xl font-bold"><Link to='/'> pleace back to home page</Link></h1>
            <span>OR</span>
            <p>pleace <button className='btn-primary' onClick={logOutHandler}> Log Out</button> & <Link to ='/login'>Log in</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default ErrorPage;