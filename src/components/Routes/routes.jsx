import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/home";
import Menu from "../Menu/menu";
import Cart from "../Cart/cart";

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/menu" element={<Menu />} />

            <Route path="/cart" element={<Cart />} />

        </Routes>
    );
};

export default AppRoutes;