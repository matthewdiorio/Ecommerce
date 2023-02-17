import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/CartItemsSlice";
const CartItem = ({ product }) => {
    const dispatch = useDispatch();
    const { id, image, price, count, name } = product;
    return (
        <div className="flex items-center justify-between border border-solid p-5 mb-6" key={id}>
            <div className="flex gap-3 items-center">
                <img src={window.location.origin + "/imgs/" + image} alt={'bottle of ' + name} className="w-14 h-14" />
                <p className="product-name font-bold">
                    {name}
                </p>
            </div>
                <div className="flex items-center gap-3 ">
                    <button className="bg-stone-300  w-[30px] h-[30px] text-black rounded-full flex items-center justify-center" onClick={() => dispatch(addToCart(product))}>+</button>
                    <div className="count">{count}</div>
                    <button className="bg-stone-300  w-[30px] h-[30px] text-black rounded-full flex items-center justify-center" onClick={() => dispatch(removeFromCart(product))}>-</button>
                </div>
          
            <div className="flex flex-col items-center gap-3">
                <div className="pricing">${(price * count).toFixed(2)}</div>
            </div>
        </div>
    )
}

export default CartItem;