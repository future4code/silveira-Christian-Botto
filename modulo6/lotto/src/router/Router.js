import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiaDeSortePage from "../pages/DiaDeSortePage/DiaDeSortePage";
import LotoFacilPage from "../pages/LotoFacilPage/LotoFacilPage"
import LotoManiaPage from "../pages/LotoManiaPage/LotoManiaPage"
import MegaSenaPage from "../pages/MegaSenaPage/MegaSenaPage"
import QuinaPage from "../pages/QuinaPage/QuinaPage"
import TimeManiaPage from "../pages/TimeManiaPage/TimeManiaPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<MegaSenaPage />} />

                <Route path="dia+de+sorte" element={<DiaDeSortePage />} />
                <Route path="loto+facil" element={<LotoFacilPage />} />
                <Route path="loto+mania" element={<LotoManiaPage />} />
                <Route path="quina" element={<QuinaPage />} />
                <Route path="time+mania" element={<TimeManiaPage />} />

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router