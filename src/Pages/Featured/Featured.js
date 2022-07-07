import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';
import './Featured.css'

const Featured = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='wrapper1'>
           {
            services.map(p=><Feature p={p}></Feature>)
           }
        </div>
    );
};

export default Featured;