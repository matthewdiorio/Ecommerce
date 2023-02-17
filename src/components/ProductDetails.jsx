import React from "react";
import { Link, useParams } from "react-router-dom"
import { addToCart } from "../redux/CartItemsSlice";
import { useDispatch } from "react-redux";
import items from "../services/items.json";
import { BsArrowLeft } from "react-icons/Bs"

const ProductDetails = () => {
    const dispatch = useDispatch();

    const { nameParam } = useParams();
    const product = items.products.find(product => product.name === nameParam)
    const { name, description, price, image } = product;

    return (
        <div className="product-details container">
            <Link to="/">
                <div className="flex items-center">
                    <BsArrowLeft className="mr-2" /> Continue Shopping
                </div>
            </Link>
            <div className="w-full flex justify-center p-4 items-center">
                <div className="lg:flex justify-center items-center">
                    <img src={window.location.origin + "/imgs/" + image} alt={name} className="lg:w-[30rem] md:w-[20rem] w-[15rem]" />
                    <div className="product-name">
                        <div className="text-2xl font-bold mb-5">{name}</div>
                        <p className="pricing mb-2">${price}</p>
                        <p className="max-w-[500px] mb-4">{description}</p>
                        <button className="bg-stone-800 hover:bg-stone-500 text-white p-4 
                            focus:bg-stone-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-600 active:shadow-lg transition duration-150 ease-in-out
                        " onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails