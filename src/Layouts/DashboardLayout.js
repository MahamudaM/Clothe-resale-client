import React from 'react';
import { Link } from 'react-router-dom';
import Hader from '../SharePages/Hader/Hader';

const DashboardLayout = () => {
    return (
        <div>
            <Hader></Hader>
            {/* sidevar */}
            <div className="drawer drawer-mobile max-w-6xl mx-auto ">
  <input id="dahbordSidevar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
   <p>a;flasfip</p>
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="dahbordSidevar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80  ">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/'>home</Link></li>
      <li><Link to='/'>home</Link></li>
      <li><Link to='/'>home</Link></li>
      <li><Link to='/'>home</Link></li>
    </ul>
  
  </div>
</div>
            
        </div>
    );
};

export default DashboardLayout;