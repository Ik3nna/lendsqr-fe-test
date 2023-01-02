import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/login";

function App () {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Login />} />

                    <Route path="/" element={<Navigate replace to="/home" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;

