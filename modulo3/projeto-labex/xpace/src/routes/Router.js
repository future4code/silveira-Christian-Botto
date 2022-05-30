import AdminHomePage from "../pages/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import ErrorPage from "../pages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />

                <Route path="trips/list" element={<ListTripsPage />} />
                <Route path="trips/app" element={<ApplicationFormPage />} />

                <Route path="login" element={<LoginPage />} />

                <Route path="admin/trips/list" element={<AdminHomePage />} />
                <Route path="admin/trips/create" element={<CreateTripPage />} />
                <Route path="admin/trips/:id" element={<TripDetailsPage />} />

                <Route path="*" element={<ErrorPage />} />                
            </Routes>
        </BrowserRouter>
    )
}
export default Router



// <BrowserRouter>
// <Routes>
//     <Route index element={<HomePage />} />
//     <Route path="admin" element={<AdminHomePage />} />
//     <Route path="app" element={<ApplicationFormPage />} />
//     <Route path="create" element={<CreateTripPage />} />
//     <Route path="list" element={<ListTripsPage />} />
//     <Route path="login" element={<LoginPage />} />
//     <Route path="detailsn" element={<TripDetailsPage />} />
//     <Route path="*" element={<ErrorPage />} />
// </Routes>
// </BrowserRouter>