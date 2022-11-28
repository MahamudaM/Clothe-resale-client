import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Hader from '../SharePages/Hader/Hader';

const DashboardLayout = () => {
    return (
        <div>
            <Hader></Hader>
            {/* sidevar */}
            <div className="drawer drawer-mobile max-w-6xl mx-auto ">
  <input id="dahbordSidevar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content p-10">
  <Outlet></Outlet>
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="dahbordSidevar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80  ">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard/myOrder'>My Orders</Link></li>
      <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
      <li><Link to='/dashboard/myProduct'>My Product</Link></li>
      <li><Link to='/dashboard/allSeller'>All Sellers</Link></li>
      <li><Link to='/dashboard/allBuyer'>All Buyers</Link></li>
      <li><Link to='/dashboard/ReportedItems'>Reported Items</Link></li>
    </ul>
  
  </div>
</div>
            
        </div>
    );
};

export default DashboardLayout;