import React from 'react';
import scroll1 from '../../images/Scroll1.jpg'
import scroll2 from '../../images/Scroll2.jpg'
import scroll3 from '../../images/scroll3.jpg'
import scroll4 from '../../images/scroll4.jpg'
import scroll5 from '../../images/scroll5.jpg'
import scroll6 from '../../images/scroll6.jpg'
import scroll7 from '../../images/scroll7.jpg'
import scroll8 from '../../images/scroll8.jpg'
import scroll9 from '../../images/scroll9.jpg'
import scroll10 from '../../images/scroll10.jpg'
import scroll11 from '../../images/scroll11.jpg'
import scroll12 from '../../images/scroll12.jpg'
import './ScrollItem.css'

const ScrollItem = () => {
    return (
        <div className='wrapper'>
            <div className='item'><img src={scroll1} alt=""/></div>
            <div className='item'><img src={scroll2} alt=""/></div>
            <div className='item'><img src={scroll3} alt=""/></div>
            <div className='item'><img src={scroll4} alt=""/></div>
            <div className='item'><img src={scroll5} alt=""/></div>
            <div className='item'><img src={scroll6} alt=""/></div>
            <div className='item'><img src={scroll7} alt=""/></div>
            <div className='item'><img src={scroll8} alt=""/></div>
            <div className='item'><img src={scroll9} alt=""/></div>
            <div className='item'><img src={scroll10} alt=""/></div>
            <div className='item'><img src={scroll11} alt=""/></div>
            <div className='item'><img src={scroll12} alt=""/></div>
            
        </div>
    );
};

export default ScrollItem;