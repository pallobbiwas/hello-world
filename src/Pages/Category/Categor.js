import React from 'react';

const Categor = (props) => {
    const { name, img } = props.p;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {name}
                    <div class="badge badge-secondary">NEW</div>
                </h2>


            </div>
        </div>
        </div>
    );
};

export default Categor;