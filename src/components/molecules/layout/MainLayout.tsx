import React from "react";
import Header from "components/molecules/layout/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () =>
    <>
    <Header/>
    <Outlet/>
    </>;

export default MainLayout;