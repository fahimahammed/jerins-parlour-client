import React from 'react';

const ServiceCard = ({ singleService }) => {
    const { title, price, description, img } = singleService;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Photo" className="rounded-xl w-[72px]" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <h4>${price}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;