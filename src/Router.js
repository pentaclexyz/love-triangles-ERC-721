import React from "react";
import { Route, Routes } from "react-router";

import {About} from "./pages/about";
import {Terms} from "./pages/terms";
import {Main} from "./pages/main";
import {LoveTrianglesPage} from "./pages/love-triangles/love-triangles-page";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LoveTrianglesPage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/terms" element={<Terms/>}/>
        </Routes>
    );
}
