import React from "react";
import "./Index.css";
import Products from "../Products/Products";
import Swiper from "../Swiper/Swiper";



let Index = () => {

    return (
        <>
            <Swiper />
            <div className="mt-5 container" id="products">
                <Products />
            </div>
        </>
    )
}

export default Index;