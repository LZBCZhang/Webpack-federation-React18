import React from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import AppRoutes from "routing/AppRoutes";

const router = createBrowserRouter(
    createRoutesFromElements(
        AppRoutes
    )
);

const App = () => <RouterProvider router={router} />;

export default App;