import React from "react";

const Banner = () => {
    return (
        <div className="w-full bg-cover bg-center" style={{ height: "25rem", backgroundImage: `url(${window.location.origin}/imgs/banner.jpg)` }}>
            <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-40">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">Shop our Summer collection</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner