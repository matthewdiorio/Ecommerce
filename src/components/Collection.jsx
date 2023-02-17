import React, { useState, useEffect, Fragment } from 'react';
import Banner from './Banner';
import items from "../services/items.json";
import Product from './Product';

const Collection = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [sort, setSort] = useState("Name");
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        let newProducts = items.products.slice();
        if (sort === "Price: Asc") {
            newProducts.sort((a, b) => a.price - b.price);
        } else if (sort === "Price: Desc") {
            newProducts.sort((a, b) => b.price - a.price);
        } else {
            newProducts.sort((a, b) => a.name.localeCompare(b.name));
        }
        setSortedProducts(newProducts);
    }, [sort]);

    return (
        <Fragment>
            <Banner/>

            <div className='container relative pb-5 mt-3'>
                <div className="toolbar flex justify-between items-center mb-5">
                    <h1 className="font-medium  leading-tight text-4xl">Lotions</h1>
                    <div>
                        <div className="dropdown inline-block relative group" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                            <button className="font-semibold py-2 px-4 rounded inline-flex items-center">
                                <span className="mr-1">Sort by {sort}</span>
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </button>
                            {showDropdown && (
                                <ul className="dropdown-menu drop-shadow-lg absolute block text-gray-700 w-full pt-1">
                                    <li><div className="rounded-t bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => { setSort("Name"); setShowDropdown(false); }}>Name</div></li>
                                    <li><div className="bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => { setSort("Price: Asc"); setShowDropdown(false); }}>Price: Asc</div></li>
                                    <li><div className="rounded-b bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => { setSort("Price: Desc"); setShowDropdown(false); }}>Price: Desc</div></li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:gird-cols:2 gap-10">
                    {sortedProducts.map(item => {
                        return <Product key={item.id} product={item} />
                    })}
                </div>

            </div>
        </Fragment>
    )
}

export default Collection;