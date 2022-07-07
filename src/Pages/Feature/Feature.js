import React from 'react';
import './Feature.css'
const Feature = (props) => {
    const{name,img,offer,price} = props.p
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img}style={{height:'200px'}} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{offer}</p>
                    <h2> <b>${price}</b></h2>
                    <div class="card-actions">
                        <button class="btn btn-primary">ADD TO CART</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Feature;