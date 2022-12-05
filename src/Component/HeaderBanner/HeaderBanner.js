import React from 'react';
import Banner from '../../welcome.jpg'
import './HeaderBanner.css'

const HeaderBanner = () => {
    return (
        <div className='d-flex align-items-center justify-content-around banner m-3 p-3'>
            <img src={Banner} alt="" className='img-fluid'/>
        </div>
    );
};

export default HeaderBanner;