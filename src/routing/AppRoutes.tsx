import React from "react";
import { Route } from "react-router-dom";
import Product from "features/product/Product";
import MainLayout from "components/molecules/layout/MainLayout";
import Errorpage from "components/molecules/error/Errorpage";

 const AppRoutes = <Route path="/" element={<MainLayout/>} errorElement={<Errorpage/>}>
    <Route path={"products"} element={<Product/>}/>
</Route>;

export default AppRoutes;