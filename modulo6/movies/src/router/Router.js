// Libraries
import React from "react";

// Routes
import { Routes, Route } from "react-router-dom"

// Components
import HomePage from "../pages/HomePage/HomePage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="details/:id" element={<DetailsPage />} /> 
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            </>
    )
}

export default Router