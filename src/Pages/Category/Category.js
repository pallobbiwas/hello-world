import React, { useEffect, useState } from 'react';
import Categor from './Categor';

const Category = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1>CATEGORY STORES</h1>
            <div className='wrapper1'>
               {
                services.map(p=><Categor p={p}></Categor>)
               }

            </div>
            
        </div>
    );
};

export default Category;