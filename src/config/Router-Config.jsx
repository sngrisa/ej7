import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./../components/About/About";
import Index from "../components/Index/Index";
import Products from "../components/Products/Products";
import DetailsProduct from "../components/DetailsProduct/DetailsProduct";

export default function RouterConfig() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/products">
                        <Route path=":id" element={<DetailsProduct />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}