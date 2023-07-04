import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Branch from "../components/branch";
import Login from "../components/login";
import Dashboard from "../components/dashboard";
import RootLayout from "../layouts/RootLayout";
import Person from "../components/person";
import PageNotFound from "../components/pagenotfound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {["/",'/login'].map((path) => <Route path={path} element={<Login />} />)}
            <Route path="/" element={<RootLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="branch" element={<Branch />} />
                <Route path="person" element={<Person />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Route>
    )
);

function Router() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default Router;