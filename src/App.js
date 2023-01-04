import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/dashboard";

function App () {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Navigate replace to="/home" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;

