
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import BBBnerrs from '../components/BBBnerrs';


const HomeLayout = () => {
    return (
        <div className='container mx-auto'>
            <header>
                <Navbar></Navbar>

            </header>
         
         <BBBnerrs></BBBnerrs>
            <main>
                <Outlet></Outlet>

            </main>
            <footer>
        <Footer></Footer>

            </footer>
        </div>
    );
};

export default HomeLayout;