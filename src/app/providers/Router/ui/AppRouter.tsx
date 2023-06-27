import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<MainPage />} />
        </Routes>
    );
};

export default AppRouter;