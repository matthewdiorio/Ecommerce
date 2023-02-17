import React, { useRef } from "react";
import { HiChevronLeft } from 'react-icons/hi'
import CartItem from './CartItem'
import { toggleOpen } from "../redux/cartSlice";
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch()
    const { count, cartItems, total } = useSelector(state => state.cartItems)
    const cartRef = useRef()

    const handleClickOutside = e => {
        if (!cartRef.current.contains(e.target)) {
            dispatch(toggleOpen())
        }
    }

    return (
        <div className="fixed z-50 top-0 left-0 w-full h-screen bg-shadow" onClick={handleClickOutside}>
            <div className="h-full bg-grey sm:w-[30rem] min-w-[15rem] overflow-y-auto ml-auto" ref={cartRef}>
                <div className="p-5">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center cursor-pointer" onClick={() => dispatch(toggleOpen())}>
                            <HiChevronLeft />
                            <span className="text-sm">Continue Shopping</span>
                        </div>
                        <div>
                            <p>Shopping Bag {'(' + count + ')'}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        {cartItems.length === 0 ? (
                            <div className="uppercase text-center text2xl">Your cart is empty</div>
                        ) : (
                            <div>
                                {cartItems.map(product => {
                                    return (
                                        <CartItem key={product.id} product={product} />
                                    )
                                })}
                               <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                    <div className="total ml-auto flex gap-4 justify-end items-center">
                                        <span className="font-bold">Total:</span> 
                                        <span className="text-2xl font-extrabold">${total}</span>
                                    </div>
                              
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;