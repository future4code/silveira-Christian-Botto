import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import CartPage from '../pages/CartPage/CartPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage'
import EditAddressPage from '../pages/EditAddressPage/EditAddressPage'
import HomePage from '../pages/HomePage/HomePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';

function Router() {
    return (
        <Routes>
            <Route index path="/" element={<HomePage />} />

            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />

            <Route path="details/:id" element={<DetailsPage />} />

            <Route path="cart" element={<CartPage />} />

            <Route path="register" element={<RegisterPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="edit-profile" element={<EditProfilePage />} />
            <Route path="edit-address" element={<EditAddressPage />} />

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default Router;