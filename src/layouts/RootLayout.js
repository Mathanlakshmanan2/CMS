import React from "react";
import { Outlet } from "react-router-dom";
import MenuAppBar from "./navbar";

function RootLayout() {

    return (
        <>
        <MenuAppBar/>
            <Outlet />
        </>
    );
}

export default RootLayout;