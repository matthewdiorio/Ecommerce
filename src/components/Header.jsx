import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toggleOpen } from "../redux/cartSlice";
import { TfiShoppingCart } from "react-icons/Tfi"
import {useDispatch, useSelector} from "react-redux"

const Header = () => {
    const dispatch = useDispatch()
    const {count} = useSelector((state => state.cartItems))

    return (
        <header className='sticky top-0 bg-stone-800 text-white z-20 w-full mb-5'>
            <nav className=" border-gray-200 container py-4">
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap">LUMINIOUS</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <div className="relative cursor-pointer" onClick={() => dispatch(toggleOpen())} >
                            <TfiShoppingCart className="text-3xl" />
                            <div className="cart-items absolute w-5 h-5 z-40 bottom-[-5px] right-[-5px] flex flex-col justify-center items-center rounded-full bg-white text-black text-sm">
                                {count}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;