import React, { useContext, useState } from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import LoveTrianglesFunction from "../components/love-triangles/love-triangles-function";


export const LoveTrianglesPage2 = () => {
    return (
        <>
            <Header/>
            <Layout>
                <LoveTrianglesFunction/>
            </Layout>
        </>
    )
}
