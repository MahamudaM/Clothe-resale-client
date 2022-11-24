import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharePages/Footer/Footer';
import Hader from '../SharePages/Hader/Hader';

const Main = () => {
    return (
        <div>
            <Hader></Hader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;