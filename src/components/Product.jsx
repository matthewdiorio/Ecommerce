import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const { id, image, price, name } = product;

    return (
        <div className='product'>
            <Link to={`/product/${name}`}>

                <div className="bg-stone-100 flex justify-center items-center">
                    <img src={window.location.origin + "/imgs/" + image} alt={"tube of " + name} className="h-auto max-w-full hover:scale-105 transition duration-50 ease-in-out" />
                </div>
            </Link>
            <div className='product-details mt-2 flex flex-col items-start'>

                <Link to={`/product/${name}`} ><div className="font-bold ">{name}</div></Link>
                <div className="text-lg ">${price}</div>

            </div>

        </div>
    )
}

export default Product